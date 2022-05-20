import featuresModel from './features-model.js';

export const daoGetFeatureForID = (featureID) => featuresModel.findById(featureID);
export const daoAddFeature = (feature) => featuresModel.create(feature);
export const daoDeleteFeature = (featureID) => featuresModel.deleteOne({_id: featureID});
export const daoUpdateFeature = (featureID, updated_feature) => featuresModel.updateOne({_id: featureID}, {$set: updated_feature})

export const daoGetFeaturesForListOfFeatureIDs = (listOfFeatureIds) => featuresModel.find({_id: {$in: listOfFeatureIds}})
