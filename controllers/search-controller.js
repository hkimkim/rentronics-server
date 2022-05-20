import {daoGetAllProductsForQuery} from "../database/products/products-dao.js";
import {
    daoGetAllFeaturesForProduct, daoGetAllFeaturesIDsForProduct
} from "../database/productFeatures/product-feature-dao.js";
import {
    daoGetAllCategoryForProduct, daoGetAllProductsIDsForCategory
} from "../database/productCategory/product-category-dao.js";
import {daoGetAllCategories, daoGetCategoryIDForCategoryName} from "../database/category/category-dao.js";

const getSearchResults = async (req, res) => {
    // get searchKey
    const searchKey = req.body['searchKeyword']
    // get category id
    const categoryName = req.body['category']
    const categoryData = await daoGetCategoryIDForCategoryName(categoryName)
    // get featuresFilter list
    const featuresFilterList = req.body['activeFeatureFilterIDs']
    const featuresFilterIDsList = featuresFilterList.map((feature) => {return feature['featureID']["_id"]})
    // get search results and send to front end
    const searchResults = await daoGetAllProductsForQuery(searchKey)
    const searchResultsWithFilters = []
    for (const item of searchResults) {
        const productID = item['_id']
        const productFeatures = await daoGetAllFeaturesIDsForProduct(productID)
        const productFeaturesString = productFeatures.map((objectID)=>{ return objectID.toString()})
        const productCategoryIDs = await daoGetAllCategoryForProduct(productID)
        const productCategoryString = productCategoryIDs.map((objectID)=>{ return objectID.toString()})
        const overlapFeatures = featuresFilterIDsList.filter(value => productFeaturesString.indexOf(value) !== -1)
        if (featuresFilterIDsList.length === 0 && productCategoryString.includes(categoryData["_id"].toString())){
            searchResultsWithFilters.push(item)
        }
        else if (overlapFeatures.length !== 0 && productCategoryString.includes(categoryData["_id"].toString())) {
            searchResultsWithFilters.push(item)
        }
    }
    res.json(searchResultsWithFilters);
}

const getCategoryFeatures = async (req, res) => {
    const data = {}
    const allCategories = await daoGetAllCategories()
    for (const category of allCategories) {
        const featuresIDsList = []
        const productIDs = await daoGetAllProductsIDsForCategory(category['_id'])
        for (const productID of productIDs){
            const productFeatures = await daoGetAllFeaturesForProduct(productID)
            featuresIDsList.push(...productFeatures)
        }
        data[category['categoryName']] = featuresIDsList
    }
    res.json(data);
}

export default (app) => {
    app.post('/api/search', getSearchResults); //searchKey, categoryID, featuresFilterIDsList
    app.get('/api/categoryFeatures', getCategoryFeatures);
}
