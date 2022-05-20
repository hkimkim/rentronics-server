import userModel from "./user-model.js";

export const findAllUsers = () => {
    return userModel.find();
  }

export const findUserById = (uid) => {
    return userModel.findById(uid);
  }

export const findUserByEmail = (email) => {
    return userModel.findOne({email: email});
}

export const findUserByCredentials = (email, password) => {
    return userModel.findOne({email: email, password: password});
}


export const createUser = (user) => {
    const status = userModel.create(user);
    return status;
}

export const deleteUser = (uid) => {
    const user = userModel.deleteOne({_id: uid});
    return user;
}

export const updateUser = (uid, user) => {
    const status = userModel.updateOne({_id: uid}, {$set: user});
    return status;
}


