import userInformationModel from './userInformation-model.js';

export const daoGetAllUserInformationForUser = (userID) => userInformationModel.findOne({userID: userID});
export const daoAddUserInformation = (userInformation) => userInformationModel.create(userInformation);
export const daoDeleteUserInformation = (userID) => userInformationModel.deleteOne({userID: userID});
export const daoUpdateUserInformation = (userID, updatedUserInformation) => userInformationModel.updateOne({userID: userID}, {$set: updatedUserInformation})