const express = require("express");
const mongoose = require("mongoose");
const userApp = require("./APIs/UserAPI");
require("dotenv").config();

const app = express();
app.use("/user-api", userApp);

mongoose
  .connect("mongodb://localhost:27017/testvnr2")
  .then(() => {
    console.log("DB connected successfully");
    app.listen(3000, () => console.log("Server running on port 3000"));
  })
  .catch((err) => console.log("DB connection error:", err));
