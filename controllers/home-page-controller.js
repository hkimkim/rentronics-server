import {daoGetAllCategories} from "../database/category/category-dao.js";
import {daoGetAllTrendingItems} from "../database/products/products-dao.js";
import {
    daoGetAllFeaturesIDsForProduct
} from "../database/productFeatures/product-feature-dao.js";
import {daoGetFeatureForID} from "../database/features/features-dao.js";
import {daoGetPopularReviews} from "../database/reviews/review-dao.js";
import {daoGetAllUserProductForReviews} from "../database/productReview/product-review-dao.js";
import {daoGetAllRecentlyViewedForUser} from "../database/recentlyViewed/recently-viewed-dao.js";
import {daoGetAllProductsForCategory} from "../database/productCategory/product-category-dao.js";
import mongoose from "mongoose";

const getHomePageData = async (req, res) => {
    const homePageData = {}
    // fetch available categories
    const availableCategories = await daoGetAllCategories();
    //fetch respective filters for these categories
    //fetch all products for each category
    //fetch all features for each product and add them as part of each category in which the product belongs
    const categoriesData = []
    for (const category of availableCategories) {
        const features = {}
        const allProducts = await daoGetAllProductsForCategory(category._id)
        for(const product of allProducts){
            const allFeatures = await daoGetAllFeaturesIDsForProduct(product["productID"]["_id"])
            for(const feature of allFeatures){
                const featureData = await daoGetFeatureForID(feature)
                const newFeature = {_id:featureData["_id"],featureValue:featureData["FeatureValue"]}
                if(featureData['featureName'] in Object.keys(features))
                {
                    features[featureData['FeatureName']] = [ ... features[featureData['FeatureName']],newFeature]
                }
                else {
                    features[featureData['FeatureName']] = [newFeature]
                }
            }
        }
        const categoryData = {}
        categoryData[category['categoryName']] = features
        categoriesData.push(categoryData)
    }
    homePageData['categories'] =categoriesData
    // fetch trending items
    // go to the products tables and fetch the top 10 products
    homePageData['treadingItems'] = await daoGetAllTrendingItems()
    // fetch popular reviews
    // go to the reviews table and fetch top 10 reviews with max likes
    const popularReviewIDs = await daoGetPopularReviews();
    homePageData['popularReviews'] = await daoGetAllUserProductForReviews(popularReviewIDs)
    // if logged in, fetch recently viewed items
    const userID = req.query['userID']
    if (userID)
    {
        // fetch recently viewed items
        // get all recently viewed product ids for this user
        homePageData['recentItems'] = await daoGetAllRecentlyViewedForUser(mongoose.Types.ObjectId(userID))
    }
    res.json(homePageData);
}

export default (app) => {
    app.post('/api/home', getHomePageData); //userID expected in requested
}
