import rentalModel from "./rentals-model";



export const getRentalForUser = (uid) =>
    rentalModel.find({userID:uid});

export const createUserRental = (uid, pid) =>
    rentalModel.create({userID: uid, productID: pid});

export const deleteRental = (rid) =>
    rentalModel.deleteOne({_id:rid});

export const deleteAllRentalsByUser = (uid) =>
    rentalModel.deleteMany({userID: uid});

