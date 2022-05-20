import mongoose from 'mongoose';
import productsModel from "../products/products-model.js";
import featuresModel from "../features/features-model.js";

const productFeaturesSchema = mongoose.Schema({
    productID: {type: mongoose.Schema.Types.ObjectId, ref: 'productsModel'},
    featureID: {type: mongoose.Schema.Types.ObjectId, ref: 'featuresModel'}
}, {collection: 'product_features'});
export default productFeaturesSchema;