import mongoose from 'mongoose';

const rentalSchema = mongoose.Schema({
  userID: {type: mongoose.Schema.Types.ObjectId, ref: "UserModel"},
  productID: {type: mongoose.Schema.Types.ObjectId, ref: "ProductModel"}
}, {collection: 'rentals'});
export default rentalSchema;

