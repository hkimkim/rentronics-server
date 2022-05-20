import mongoose from 'mongoose';

const featureSchema = mongoose.Schema({
    FeatureName: String, FeatureValue: String,
}, {collection: 'features'});
export default featureSchema;