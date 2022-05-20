import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema({
    reviewDescription: String,
    reviewDate: Date,
    reviewRating: Number,
    reviewTitle: String
}, {collection: 'reviews'});
export default reviewSchema;