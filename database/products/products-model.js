import mongoose from 'mongoose';
import productsSchema from './products-schema.js'

const productsModel = mongoose
    .model('productsModel', productsSchema);
export default productsModel;