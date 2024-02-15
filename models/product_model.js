const mongoose = require("mongoose");

// SQL Table === NoSQL Collection
// SQL Row === NoSQL document
// SQL columns === fields

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const ProductModel = mongoose.model("products", ProductSchema);

module.exports = ProductModel;
