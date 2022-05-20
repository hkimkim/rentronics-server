import {
    daoDeleteCartForUser,
    daoDeleteItemFromCartForUser,
    daoFindCartForUser,
    daoUpdateProductCountCartForUser
} from "../database/cart/cart-dao.js";
import {daoUpdateProductAvailableItemsForProduct} from "../database/products/products-dao.js";
import {daoAddOrder} from "../database/orders/orders-dao.js";
import {daoAddUserOrder} from "../database/userOrders/user-orders-dao.js";

const getCartData = async (req, res) => {
    let cartData = {}
    const userID = req.query['userID']    // check if user loggedin
    if(userID)
    {
        // get user cart and send to front end
        cartData = await daoFindCartForUser(userID)
        res.json(cartData);
        return
    }
    res.send(401);
}

const removeCartItem = async (req, res) => {
    const userID = req.query['userID']
    let cartData = {}
    if (userID){
        const productID = req.query['productID']
        await daoDeleteItemFromCartForUser(userID,productID);
        // get user cart and send to front end
        cartData = await daoFindCartForUser(userID)
        res.json(cartData);
        return
    }
    res.send(401)
}

const updateItemCountCart = async (req, res) => {
    let cartData = {}
    const userID = req.query['userID']
    if (userID){
        const productID = req.query['productID']
        const newCount = req.query['newCount']
        if (newCount === "0" ){
            await daoDeleteItemFromCartForUser(userID,productID);
            // get user cart and send to front end
            cartData = await daoFindCartForUser(userID)
            res.json(cartData);
            return
        }
        await daoUpdateProductCountCartForUser(userID,productID,parseInt(newCount));
        res.send(200);
        return
    }
    res.send(401)
}

const placeOrder = async (req, res) => {
    const userID = req.query['userID']
    if (userID){
        // get user cart from database
        const currentCart = await daoFindCartForUser(userID)
        // check if all the items are available in stock
        // if everything is there, then place order and send 200
        // else send error stating which items are out of stock
        const availableItems = []
        const outOfStockItems = []
        for (const item of currentCart){
            //check if item in stock
            if(item["productCount"] <= item["productID"]["totalAvailable"]){
                // item in stock
                availableItems.push({'productID':item["productID"]["_id"],'buyCount':item["productCount"], 'soldCount':item["productID"]["totalSold"]})
            }
            else
            {
                //item out of stock
                outOfStockItems.push({'productID':item["productID"]["_id"]})
            }
        }
        // if all item in stock, place order
        if (outOfStockItems.length === 0){
            const listSoldProductIds = []
            const listSoldProductCounts = []
            for (const item of availableItems){
                // update sold count in the product table
                await daoUpdateProductAvailableItemsForProduct(item['productID'], item['soldCount'] + item['buyCount'])
                // add product and count to list
                listSoldProductIds.push(item['productID'])
                listSoldProductCounts.push(item['buyCount'])
            }
            // add order to order table
            const orderID = await daoAddOrder({'orderDate':(new Date()).toLocaleDateString(),'productID':listSoldProductIds,'itemCount':listSoldProductCounts})
            // add order to user
            await daoAddUserOrder({"userID":userID,"orderID":orderID})

            //clear cart
            await daoDeleteCartForUser(userID);
            res.send(200);
            return
        }
        else{
            //send items out of stock
            // TODO: Add error message code
            // res.send(200);
            return
        }
    }
    res.send(401);
}

export default (app) => {
    app.post('/api/cart', getCartData); //loggedIn and userID needed
    app.post('/api/updateItemCountCart', updateItemCountCart); // loggedIn and userID, productID, updatedCount
    app.post('/api/removeItemCart', removeCartItem); // loggedIn and userID, productID
    app.post('/api/placeOrder', placeOrder); // loggedIn and userID needed
}
