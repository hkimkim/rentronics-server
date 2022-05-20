import mongoose from 'mongoose';
import productsModel from "../products/products-model.js";
import categoryModel from "../category/category-model.js";

const productCategorySchema = mongoose.Schema({
    productID: {type: mongoose.Schema.Types.ObjectId, ref: 'productsModel'},
    categoryID: {type: mongoose.Schema.Types.ObjectId, ref: 'categoryModel'}
}, {collection: 'product_category'});
export default productCategorySchema;