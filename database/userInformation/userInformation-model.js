import mongoose from 'mongoose';
import userInformationSchema from './userInformation-schema.js'

const userInformationModel = mongoose
    .model('userInformationModel', userInformationSchema);
export default userInformationModel;