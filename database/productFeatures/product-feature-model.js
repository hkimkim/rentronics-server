import mongoose from 'mongoose';
import productFeaturesSchema from './product-feature-schema.js'

const productFeaturesModel = mongoose
    .model('productFeaturesModel', productFeaturesSchema);
export default productFeaturesModel;