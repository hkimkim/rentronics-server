import mongoose from 'mongoose';
import wishlistSchema from "./wishlist-schema.js";

const wishlistModel = mongoose
    .model('wishlistModel', wishlistSchema);
export default wishlistModel;