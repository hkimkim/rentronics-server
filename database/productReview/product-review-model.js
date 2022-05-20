import mongoose from 'mongoose';
import productReviewSchema from './product-review-schema.js'

const productReviewModel = mongoose
    .model('productReviewModel', productReviewSchema);
export default productReviewModel;