import * as featureDao from "../database/features/features-dao.js"
import * as productFeatureDao from "../database/productFeatures/product-feature-dao.js"
import mongoose from "mongoose";

export default (app) => {
    // app.get('/api/feature/name/:catName', getCategoryByName);
    // app.get('/api/category/brands/:cid', getAllBrands);
    app.post('/api/features', addFeature);
    app.post('/api/features/productFeature', addProductFeature);
    app.get('/api/features/fid/:pid', getAllFeaturesIDsForProduct);
    app.get('/api/features/:fid', getFeatureById);

    // app.delete('/api/category/:cid', deleteCategory);
    app.put('/api/features/:fid', updateFeature);
}

const addFeature = async (req, res) => {
    const feature = req.body;
    const insertedFeature = await featureDao.daoAddFeature(feature);
    res.json(insertedFeature);
}

const addProductFeature = async (req, res) => {
    const productFeautre = req.body;
    const response = await productFeatureDao.daoAddProductFeature(productFeautre);
    res.json(response);
}

const getAllFeaturesIDsForProduct = async (req, res) => {
    const productID = req.params['pid'];
    const productData = await productFeatureDao.daoGetAllFeaturesIDsForProduct(productID)
    res.json(productData);
}

const getFeatureById = async (req, res) => {
    const featuredId = req.params['fid'];
    const featureData = await featureDao.daoGetFeatureForID(featuredId);
    res.json(featureData);
}

const updateFeature = async (req, res) => {
    const featureId = req.params['fid'];
    const updated_feature = req.body;
    const status = await featureDao.daoUpdateFeature(mongoose.Types.ObjectId(featureId), updated_feature);
    res.json(status); 
}