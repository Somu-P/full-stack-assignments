const express = require("express");
const productApp = express.Router();
const Product = require("../Models/productModel");

productApp.use(express.json()); // Middleware for JSON body parsing

// Get product by ID
productApp.get("/products/id/:_id", async (req, res) => {
  try {
    const product = await Product.findById(req.params._id);
    if (!product) return res.status(404).send({ message: "Product not found" });
    res.send({ message: "Product found", payload: product });
  } catch (err) {
    res.status(500).send({ message: "Error", payload: err.message });
  }
});

// Get product by name
productApp.get("/products/name/:name", async (req, res) => {
  try {
    const product = await Product.findOne({ name: req.params.name });
    if (!product) return res.status(404).send({ message: "Product not found" });
    res.send({ message: "Product found", payload: product });
  } catch (err) {
    res.status(500).send({ message: "Error", payload: err.message });
  }
});

// Create a new product
productApp.post("/product", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.send({ message: "Product created", payload: newProduct });
  } catch (err) {
    res.status(500).send({ message: "Error", payload: err.message });
  }
});

// Update a product using findOneAndUpdate()
productApp.put("/product", async (req, res) => {
  try {
    const updatedProduct = await Product.findOneAndUpdate(
      { _id: req.body._id },
      { $set: req.body },
      { new: true }
    );
    if (!updatedProduct) return res.status(404).send({ message: "Product not found" });
    res.send({ message: "Product updated", payload: updatedProduct });
  } catch (err) {
    res.status(500).send({ message: "Error", payload: err.message });
  }
});

// Delete a product using findOneAndDelete()
productApp.delete("/product/:id", async (req, res) => {
  try {
    const product = await Product.findOneAndDelete({ _id: req.params.id });
    if (!product) return res.status(404).send({ message: "Product not found" });
    res.send({ message: "Product deleted", payload: product });
  } catch (err) {
    res.status(500).send({ message: "Error", payload: err.message });
  }
});

module.exports = productApp;
