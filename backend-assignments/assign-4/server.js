const exp = require("express");
const app = exp();
const productApp = require("./APIs/ProductAPI");
const mongoose = require("mongoose");
app.use("/product-api", productApp);

mongoose
  .connect("mongodb://localhost:27017/testvnr2")
  .then(() => {
    console.log("db connection success");
    app.listen(3000, () => console.log("server on port 3000..."));
  })
  .catch((err) => console.log("err connecting in db:", err));
