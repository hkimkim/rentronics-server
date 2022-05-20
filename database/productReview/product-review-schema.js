import mongoose from 'mongoose';
import productsModel from "../products/products-model.js";
import reviewsModel from "../reviews/review-model.js";

const productReviewSchema = mongoose.Schema({
    productID: {type: mongoose.Schema.Types.ObjectId, ref: 'productsModel'},
    reviewID: {type: mongoose.Schema.Types.ObjectId, ref: 'reviewsModel'},
    userID: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'}
}, {collection: 'product_reviews'});
export default productReviewSchema;