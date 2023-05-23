const { Schema, model } = require("mongoose");
const Joi = require("joi");

const orderItemSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    shop: {
      type: String,
      required: true,
    },
  });

const orderSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Enter name"],
    },
    email: {
      type: String,
      required: [true, "Enter email"],
    },
    phone: {
      type: String,
      required: [true, "Enter phone"],
    },
    address: {
        type: String,
        required: [true, "Enter address"],
    },
    order: {
        type: [orderItemSchema],
        required: [true, "Enter order"],
    },
    total: {
        type: Number,
        required: [true, "Enter total"]
    }
  },
  { versionKey: false, timestamps: true }
);

const addSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  address: Joi.string().required(),
  order: Joi.array().items(
    Joi.object({
      name: Joi.string().required(),
      quantity: Joi.number().required(),
      price: Joi.number().required()
    })
  ).required(),
  total: Joi.number().required()
});

const Order = model("order", orderSchema);

module.exports = {
  Order,
  addSchema,
};