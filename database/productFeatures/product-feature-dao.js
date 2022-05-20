import productFeaturesModel from './product-feature-model.js';

export const daoGetAllFeaturesIDsForProduct = (productID) => productFeaturesModel.find({productID: productID}).distinct('featureID');
export const daoGetAllFeaturesForProduct = (productID) => productFeaturesModel.find({productID: productID}).populate('featureID');
export const daoAddProductFeature = (productFeature) => productFeaturesModel.create(productFeature);
export const daoDeleteFeatureForProduct = (productID) => productFeaturesModel.deleteOne({productID: productID});
