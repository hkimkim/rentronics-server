import mongoose from 'mongoose';
import recentlyViewedSchema from "./recently-viewed-schema.js";

const recentlyViewedModel = mongoose
    .model('recentlyViewedModel', recentlyViewedSchema);
export default recentlyViewedModel;