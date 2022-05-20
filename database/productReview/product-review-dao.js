import productReviewModel from './product-review-model.js';
import reviewsModel from "../reviews/review-model.js";

export const daoFindReviewForProduct = (pID) => productReviewModel.find({productID: pID}).populate('userID').populate('reviewID');
export const daoGetAllUserProductForReviews = (reviewIDs) => productReviewModel.find({'reviewID': {$in: reviewIDs}}).populate('productID').populate('userID').populate('reviewID');

export const daoDeleteReviewForProduct = (productID) => productReviewModel.deleteOne({productID: productID});
export const daoDeleteReviewForUser = (userID) => productReviewModel.deleteOne({userID: userID});
export const daoUpdateReviewForProduct = (productID, productReview) => productReviewModel.updateOne({productID: productID}, {$set: productReview})

export const daoFindReviewForUser = async (uID) => {
  return productReviewModel.find({userID: uID}).populate({
    path: "productID", populate: {
      path: "sellerID"
    }
  }).populate("reviewID");
}

export const daoGetAllProductReviews = () => {
  return productReviewModel.find().populate({
    path: "productID",
    populate: {
        path: "sellerID"
  }
}).populate("reviewID");
}

export const daoAddProductReview = (uid, pid, rid) => productReviewModel.create({userID: uid, productID: pid, reviewID: rid});

