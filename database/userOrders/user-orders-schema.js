import mongoose from 'mongoose';
import UserModel from "../users/user-model.js";
import ordersModel from "../orders/orders-model.js";

const userOrderSchema = mongoose.Schema({
    userID: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    orderID: {type: mongoose.Schema.Types.ObjectId, ref: 'ordersModel'}
}, {collection: 'user_orders'});
export default userOrderSchema;