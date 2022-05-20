import ordersModel from './orders-model.js';

export const daoGetAllOrdersForUser = (userID) => ordersModel.find({userID: userID});
export const daoAddOrder = (order) => ordersModel.create(order);
export const daoDeleteOrderForUser = (userID) => ordersModel.deleteOne({userID: userID});
export const daoUpdateOrder = (orderID, updatedOrder) => ordersModel.updateOne({orderID: orderID}, {$set: updatedOrder})