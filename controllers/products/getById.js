const { product: service } = require('../../services');
const { createError } = require('../../helpers');

const getById = async (req, res) => {
  const { id } = req.params;
  const product = await service.getProductById(id);

  if (!product) {
    throw createError(404);
  }

  res.json({
    status: "success",
    code: 200,
    data: {
      product,
    },
  });
};

module.exports = getById;