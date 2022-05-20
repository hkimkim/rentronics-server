import reviewsModel from './review-model.js';

export const daoFindReview = (reviewID) => reviewsModel.findById(reviewID);
export const daoGetPopularReviews = () => reviewsModel.find().sort('-reviewRating').limit(10).distinct('_id')
export const daoAddReview = (review) => reviewsModel.create(review);
export const daoDeleteReview = (reviewID) => reviewsModel.deleteOne({_id: reviewID});
export const daoUpdateReview = (reviewID, updatedReview) => reviewsModel.updateOne({_id: reviewID}, {$set: updatedReview})