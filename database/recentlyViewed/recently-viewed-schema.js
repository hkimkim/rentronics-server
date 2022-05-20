import mongoose from 'mongoose';
import UserModel from "../users/user-model.js";
import productsModel from "../products/products-model.js";

const recentlyViewedSchema = mongoose.Schema({
    userID: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    productID: {type: mongoose.Schema.Types.ObjectId, ref: 'productsModel'}
}, {collection: 'recently_viewed'});
export default recentlyViewedSchema;