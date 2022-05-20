import mongoose from 'mongoose';
import productCategorySchema from "./product-category-schema.js";

const productCategoryModel = mongoose
    .model('productCategoryModel', productCategorySchema);
export default productCategoryModel;