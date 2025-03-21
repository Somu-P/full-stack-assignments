const express = require("express");
const app = express();
const mongoose = require("mongoose");
const productApp = require("./APIs/productAPI");

app.use(express.json()); // Middleware for JSON body parsing
app.use("/product-api", productApp);

// Corrected MongoDB connection URL
mongoose
  .connect("mongodb://localhost:27017/vnrtest", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB connection success");
    app.listen(3000, () => console.log("Server running on port 3000..."));
  })
  .catch((err) => console.log("DB connection failed:", err));
