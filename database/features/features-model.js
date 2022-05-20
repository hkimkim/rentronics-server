import mongoose from 'mongoose';
import featureSchema from './features-schema.js'

const featuresModel = mongoose
    .model('featuresModel', featureSchema);
export default featuresModel;