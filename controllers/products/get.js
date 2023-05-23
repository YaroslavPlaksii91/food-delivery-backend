const { product: service } = require('../../services');

const get = async (req, res) => {  
  const { shop } = req.params;
  
  const products = await service.getAllProducts(shop);

  res.json({
    status: "success",
    code: 200,
    data: {
        products,
    },
  });
};

module.exports = get;

