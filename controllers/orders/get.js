const { order: service } = require('../../services');

const get = async (req, res) => {   
  const { phone } = req.params;
  
  const orders = await service.getOrders(phone);

  res.json({
    status: "success",
    code: 200,
    data: {
        orders,
    },
  });
};

module.exports = get;