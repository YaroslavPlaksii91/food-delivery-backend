const { Product } = require('../models');

const getAllProducts = () =>
  Product.find({}).populate('owner', 'name');
  
const getProductById = (id) =>
  Product.findById(id).populate('owner', 'name');

module.exports = {
  getAllProducts,
  getProductById,
};