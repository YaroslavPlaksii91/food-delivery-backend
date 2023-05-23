const { order: service } = require('../../services');
const { addSchema } = require('../../models');
const { createError } = require('../../helpers');

const create = async (req, res) => {
  const { error } = addSchema.validate(req.body);

  if (error) {
    throw createError(400, "missing required field");
  }

  const result = await service.createOrder(req.body);

  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result,
    },
  });
};

module.exports = create;