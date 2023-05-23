const { Shop } = require('../models');

const getAllShops = () =>
  Shop.find({});

module.exports = {
  getAllShops,
};