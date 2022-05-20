import mongoose from 'mongoose';
import UserModel from "../users/user-model.js";
import productsModel from "../products/products-model.js";

const wishlistSchema = mongoose.Schema({
    userID: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
    productID: {type: mongoose.Schema.Types.ObjectId, ref: 'productsModel'}
}, {collection: 'wishlist'});
export default wishlistSchema;