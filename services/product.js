const { Product } = require('../models');

const getAllProducts = (shop) =>
  Product.find({owner: shop}).populate('owner', 'name');

const getProductById = (id) =>
  Product.findById(id).populate('owner', 'name');

module.exports = {
  getAllProducts,
  getProductById,
};