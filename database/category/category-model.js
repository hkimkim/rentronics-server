import mongoose from 'mongoose';
import categorySchema from './category-schema.js'

const categoryModel = mongoose
    .model('categoryModel', categorySchema);
export default categoryModel;