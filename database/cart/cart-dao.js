import cartModel from "./cart-model.js";

export const daoFindCartForUser = (uID) => cartModel.find({userID: uID}).populate('productID');
export const daoAddItemToCartForUser = (item) => cartModel.create(item);
export const daoDeleteCartForUser = (userID) => cartModel.deleteMany({userID: userID});
export const daoDeleteItemFromCartForUser = (userID, productID) => cartModel.deleteOne({userID: userID, productID:productID});
export const daoUpdateProductCountCartForUser = (userID, productID, newCount) => cartModel.findOneAndUpdate({userID: userID,productID:productID}, {$inc : {'productCount' : newCount}})
