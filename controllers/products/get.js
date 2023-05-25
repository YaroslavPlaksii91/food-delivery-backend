const { product: service } = require('../../services');

const get = async (_, res) => { 
  const products = await service.getAllProducts();

  res.json({
    status: "success",
    code: 200,
    data: {
        products,
    },
  });
};

module.exports = get;

