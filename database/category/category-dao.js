import categoryModel from './category-model.js';

export const daoGetAllCategories = () => categoryModel.find({}, '_id categoryName');
export const daoGetCategoryIDForCategoryName = (categoryName) => categoryModel.findOne({categoryName:categoryName})
export const daoAddCategory = (category) => categoryModel.create(category);
export const daoDeleteCategory = (catID) => categoryModel.deleteOne({_id: catID});
export const daoUpdateCategory = (catID, updatedCategory) => categoryModel.updateOne({_id: catID}, {$set: updatedCategory})

export const daoGetCategoryByName = (name) => categoryModel.find({"categoryName" : name});