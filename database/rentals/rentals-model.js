import mongoose from 'mongoose';
const rentalSchema = require('./rentals-schema.js');

const rentalModel = mongoose.model("RentalModel", rentalSchema);

export default rentalModel;