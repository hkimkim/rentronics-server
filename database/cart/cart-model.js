import mongoose from 'mongoose';
import cartSchema from './cart-schema.js'

const cartModel = mongoose
    .model('cartModel', cartSchema);
export default cartModel;