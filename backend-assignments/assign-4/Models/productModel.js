const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 10,
  },
  cost: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model("product", productSchema);
module.exports = Product;
