import recentlyViewedModel from './recently-viewed-model.js';

export const daoGetAllRecentlyViewedForUser = (userID) => recentlyViewedModel.find({userID: userID}, 'productID').populate('userID').populate('productID');
export const daoCreateRecentlyViewed = (recently_viewed) => recentlyViewedModel.create(recently_viewed);
export const daoDeleteRecentlyViewedProductForUser = (userID, productID) => recentlyViewedModel.deleteOne({
    userID: userID, productID: productID
});
