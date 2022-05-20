import productsModel from './products-model.js';

export const daoGetAllTrendingItems = () => productsModel.find({}).sort('-totalSold').limit(10).populate('sellerID');
export const daoGetAllProductsForQuery = (searchWord) => productsModel.find({productName: {$regex: new RegExp(searchWord, 'i')}}).populate('sellerID');
export const daoGetAllProductsForSeller = (userID) =>
    productsModel.find({sellerID: userID}).populate("sellerID");
export const daoGetProductFromID = (productID) => productsModel.findById(productID).populate('sellerID');
export const daoAddProduct = (product) => productsModel.create(product);
export const daoDeleteProduct = (productID) => productsModel.deleteOne({_id: productID});
export const daoUpdateProduct = (productID, updatedProduct) => productsModel.updateOne({_id: productID}, {$set: updatedProduct})
export const daoUpdateProductAvailableItemsForProduct = (productID, newAvailable) => productsModel.updateOne({_id: productID},{totalSold:newAvailable})

// this to check if api is working
export const daoFindAllItems = () => productsModel.find();
