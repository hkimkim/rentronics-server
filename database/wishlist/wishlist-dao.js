import wishlistModel from './wishlist-model.js';

export const daoGetWishlistForUser = (userID) => wishlistModel.find({userID: userID}).populate("productID");
export const daoCreateUserWishlist = (wishlist) => wishlistModel.create(wishlist);
export const daoDeleteProductFromWishlistForUser = (userID, productID) => wishlistModel.deleteOne({
    userID: userID, productID: productID
});
