const { shop: service } = require('../../services');

const get = async (_, res) => {  
  const shops = await service.getAllShops();

  res.json({
    status: "success",
    code: 200,
    data: {
      shops,
    },
  });
};

module.exports = get;