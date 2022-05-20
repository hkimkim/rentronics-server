import mongoose from 'mongoose';
import reviewSchema from './review-schema.js'

const reviewsModel = mongoose
    .model('reviewsModel', reviewSchema);
export default reviewsModel;