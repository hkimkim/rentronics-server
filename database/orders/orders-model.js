import mongoose from 'mongoose';
import orderSchema from './orders-schema.js'

const ordersModel = mongoose
    .model('ordersModel', orderSchema);
export default ordersModel;