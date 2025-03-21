const express = require("express");
const mongoose = require("mongoose");
const employeeRoutes = require("./routes/EmployeeAPI");

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/employeeDB")
  .then(() => {
    console.log("DB Connected");
    app.listen(3000, () => console.log("Server running on port 3000"));
  })
  .catch((err) => console.log("DB Connection Failed:", err));

app.use("/api", employeeRoutes);
