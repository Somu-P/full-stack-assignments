const exp = require("express");
const productApp = exp.Router();
let products = [
  { productId: 1, productName: "Mobile", price: 50000 },
  { productId: 2, productName: "Laptop", price: 90000 },
  { productId: 3, productName: "Television", price: 120000 },
];

productApp.get("/products", (req, res) => {
  res.send({ message: "all products", payload: products });
});

productApp.get("/products/:productId", (req, res) => {
  const paramId = Number(req.params.productId);
  let result = products.find((product) => product.productId === paramId);
  if (result === undefined) {
    res.send({ message: "product not found" });
  } else {
    res.send({ message: "user", payload: result });
  }
});

productApp.put("/product", (req, res) => {
  let modifiedProduct = req.body;
  let productIndex = products.findIndex(
    (product) => product.productId === modifiedProduct.productId
  );
  if (productIndex === -1) res.send({ message: "User not found to update" });
  else {
    products.splice(productIndex, 1, modifiedProduct);
    res.send({ message: "User modified" });
  }
});

productApp.delete("/product/:productId", (req, res) => {
  let paramId = Number(req.params.productId);
  let productIndex = products.findIndex(
    (products) => products.productId === paramId
  );
  if (productIndex === -1) {
    res.send({ message: "User not found" });
  } else {
    products.splice(productIndex, 1);
    res.send({ message: "User has been removed" });
  }
});

module.exports = productApp;

