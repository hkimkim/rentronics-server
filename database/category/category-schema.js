import mongoose from 'mongoose';

const categorySchema = mongoose.Schema({
    categoryName: String,
    categoryDescription: String,
}, {collection: 'category'});
export default categorySchema;