import rolesModel from "./roles-model.js";

export const daoFindRoleNameForID = (roleID) => rolesModel.find({_id: roleID});
export const daoAddRole = (role) => rolesModel.create(role);
export const daoDeleteRole = (roleID) => rolesModel.deleteOne({_id: roleID});
export const daoUpdateRole = (roleID, updatedRole) => rolesModel.updateOne({_id: roleID}, {$set: updatedRole})