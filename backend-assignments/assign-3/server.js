const exp = require("express");
const app = exp();

app.use(exp.json());

const { MongoClient } = require("mongodb");
MongoClient.connect("mongodb://localhost:27017")
  .then((mClient) => {
    const dbObj = mClient.db("vnrtest");
    const productsCollectionObj = dbObj.collection("products");
    app.set("productsCollectionObj", productsCollectionObj);
    console.log("DB connection success");

    app.listen(3000, () => console.log("server on port 3000..."));
  })
  .catch((err) => console.log("err in connecting db:", err));

const productApp = require("./APIs/productApi");
app.use("/product-api", productApp);

