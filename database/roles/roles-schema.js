import mongoose from 'mongoose';

const roleSchema = mongoose.Schema({
    roleName: String, roleDescription: String,
}, {collection: 'roles'});
export default roleSchema;