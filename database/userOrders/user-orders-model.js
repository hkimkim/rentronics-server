import mongoose from 'mongoose';
import userOrderSchema from './user-orders-schema.js'

const userOrderModel = mongoose
    .model('userOrderModel', userOrderSchema);
export default userOrderModel;