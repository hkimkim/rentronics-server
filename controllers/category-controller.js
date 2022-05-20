import * as categoryDao from "../database/category/category-dao.js";
import * as productCategoryDao from "../database/productCategory/product-category-dao.js"
import * as productFeatureDao from "../database/productFeatures/product-feature-dao.js"
import * as featureDao from '../database/features/features-dao.js'
import mongoose from "mongoose";

export default (app) => {
    app.get('/api/category/name/:catName', getCategoryByName);
    app.get('/api/category/brands/:cid', getAllBrands);
    app.post('/api/category', addCategory);
    app.post('/api/category/productCategory', addProductCategory);
    app.delete('/api/category/:cid', deleteCategory);
    // app.put('/api/users/:uid', updateUser);
}

const getCategoryByName = async (req, res) => {
    const name = req.params['catName'];
    const categoryId = await categoryDao.daoGetCategoryByName(name);
    res.json(categoryId);
}

const addCategory = async (req, res) => {
    const category = req.body;
    const response = await categoryDao.daoAddCategory(category);
    res.json(response);
}

const deleteCategory = async (req, res) => {
    const catId = req.params['cid'];
    const status = await categoryDao.daoDeleteCategory(catId);
    res.sendStatus(200);
}

const getAllBrands = async (req, res) => {
    const catId = req.params['cid'];
    const products = await productCategoryDao.daoGetAllProductsForCategory(mongoose.Types.ObjectId(catId)); 

    const productIds = products.map(product => product['productID']['_id']);

    const productFeatures = await productFeatureDao.daoGetAllFeaturesIDsForListOfProducts(productIds);
    const listOfFeatures = await featureDao.daoGetFeaturesForListOfFeatureIDs(productFeatures);
    const brands = listOfFeatures.filter(feature => feature.FeatureName === "Brand").map(feature => feature.FeatureValue);

    res.json(brands);
}

const addProductCategory = async (req, res) => {
    const productCategory = req.body;
    const response = await productCategoryDao.daoAddProductCategory(productCategory);
    res.json(response);
}

