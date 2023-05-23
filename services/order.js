const { Order } = require('../models');

const createOrder = (body) => Order.create(body);

module.exports = {
  createOrder,
};