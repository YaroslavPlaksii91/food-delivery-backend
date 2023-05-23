const { Schema, model } = require("mongoose");

const shopSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Enter name for shop"],
    },
  },
  { versionKey: false, timestamps: true }
);

const Shop = model("shop", shopSchema);

module.exports = {
    Shop,
};