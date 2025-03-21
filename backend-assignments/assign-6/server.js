const express = require("express");
const mongoose = require("mongoose");
const userApp = require("./APIs/UserAPI");

const app = express();
app.use("/user-api", userApp);

mongoose
  .connect("mongodb://localhost:27017/vnrtest")
  .then(() => {
    console.log("DB connection successful");
    app.listen(3000, () => console.log("Server running on port 3000"));
  })
  .catch((err) => console.log("DB connection error:", err));
