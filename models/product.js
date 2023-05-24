const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Enter name for product"],
    },
    description: {
      type: String,
      required: [true, "Enter description for product"],
    },
    price: {
      type: String,
      required: [true, "Enter price for product"],
    },
    image: {
        href: {
          type: String,
          required: [true, "Enter href for product image"],
        },
        alt: {
          type: String,
          required: [true, "Enter alt for product image"],
        },
      },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "shop",
    },
  },
  { versionKey: false, timestamps: true }
);

const Product = model("product", productSchema);

module.exports = {
    Product,
};