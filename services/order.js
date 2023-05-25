const { Order } = require('../models');

const getOrders = (phone) =>
  Order.find({phone});

const createOrder = (body) => Order.create(body);

module.exports = {
  getOrders,
  createOrder,
};