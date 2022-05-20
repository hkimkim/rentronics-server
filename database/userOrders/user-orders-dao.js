import userOrderModel from './user-orders-model.js';

export const daoGetAllOrdersForUser = (userID) => userOrderModel.find({userID: userID});
export const findOrdersByUser = async (uid) => {
  return await userOrderModel.find({userID: uid}).populate({
    path: "orderID", populate: {
      path: "productID"
    }
  });
}

export const daoAddUserOrder = (userOrder) => userOrderModel.create(userOrder);
export const daoDeleteAllOrderForUser = (userID) => userOrderModel.deleteMany({userID: userID});