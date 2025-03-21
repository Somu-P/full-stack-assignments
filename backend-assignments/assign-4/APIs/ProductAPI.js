const exp = require("express");
const productApp = exp.Router();
productApp.use(exp.json());
const Product = require("../Models/productModel");

productApp.get("/products", async (req, res) => {
  const productsList = await Product.find();
  res.send({ message: "products", payload: productsList });
});

productApp.post("/product", async (req, res) => {
  const newProduct = req.body;
  const productDoc = new Product(newProduct);
  await productDoc.save();
  res.send({ message: "product created" });
});

module.exports = productApp;
