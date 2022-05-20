import mongoose from 'mongoose';
import roleSchema from './roles-schema.js'

const rolesModel = mongoose
    .model('rolesModel', roleSchema);
export default rolesModel;