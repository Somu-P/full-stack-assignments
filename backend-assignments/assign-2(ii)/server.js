const exp = require("express");
const app = exp();

const userApp = require("./APIs/userAPI");
const productApp = require("./APIs/productAPI");

app.use(exp.json());

app.use("/user-api", userApp);
app.use("/product-api", productApp);

app.use((req, res, next) => {
  res.status(404).send({ message: "Invalid Path" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res
    .status(500)
    .send({ message: "Internal Server Error", error: err.message });
});

app.listen(4000, () => console.log("server on port 4000"));
