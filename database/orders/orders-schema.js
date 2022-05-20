import mongoose from 'mongoose';
import productsModel from "../products/products-model.js";

const orderSchema = mongoose.Schema({
    orderDate: String,
    productID: [{type: mongoose.Schema.Types.ObjectId, ref: 'productsModel'}],
    itemCount: [Number]
}, {collection: 'orders'});
export default orderSchema;