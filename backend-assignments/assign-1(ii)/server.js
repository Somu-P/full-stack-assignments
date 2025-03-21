const exp = require("express");
const app = exp();
app.use(exp.json());

app.listen(3500, () => console.log("Server running on port 3500..."));

let products = [
  { productId: 1, productName: "Mobile", price: 50000 },
  { productId: 2, productName: "Laptop", price: 90000 },
  { productId: 3, productName: "Television", price: 120000 },
];

app.get("/products", (req, res) => {
  res.send({ message: "All products", payload: products });
});

app.get("/products/:productId", (req, res) => {
  const paramId = Number(req.params.productId);
  let result = products.find(product => product.productId === paramId);
  if (!result) {
    res.send({ message: "Product not found" });
  } else {
    res.send({ message: "Product found", payload: result });
  }
});

app.post("/product", (req, res) => {
  let newProduct = req.body;
  products.push(newProduct);
  res.send({ message: "Product added", payload: newProduct });
});


app.put("/product", (req, res) => {
  let modifiedProduct = req.body;
  let productIndex = products.findIndex(product => product.productId === modifiedProduct.productId);

  if (productIndex === -1) {
    res.send({ message: "Product not found to update" });
  } else {
    products[productIndex] = modifiedProduct;
    res.send({ message: "Product modified", payload: modifiedProduct });
  }
});

app.delete("/products/:productId", (req, res) => {
  let paramId = Number(req.params.productId);
  let productIndex = products.findIndex(product => product.productId === paramId);

  if (productIndex === -1) {
    res.send({ message: "Product not found" });
  } else {
    let removedProduct = products.splice(productIndex, 1);
    res.send({ message: "Product has been removed", payload: removedProduct });
  }
});
