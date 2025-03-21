const express = require("express");
const router = express.Router();
const Employee = require("../models/Employee");
router.post("/employees", async (req, res) => {
  try {
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    res.status(201).send({ message: "Employee Created", payload: newEmployee });
  } catch (err) {
    res.status(400).send({ message: "Error", payload: err.message });
  }
});

router.get("/employees", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.send({ message: "Employees Fetched", payload: employees });
  } catch (err) {
    res.status(500).send({ message: "Error", payload: err.message });
  }
});

// Get Employee by ID
router.get("/employees/:id", async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).send({ message: "Employee Not Found" });
    }
    res.send({ message: "Employee Found", payload: employee });
  } catch (err) {
    res.status(500).send({ message: "Error", payload: err.message });
  }
});

// Update 
router.put("/employees/:id", async (req, res) => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedEmployee) {
      return res.status(404).send({ message: "Employee Not Found" });
    }
    res.send({ message: "Employee Updated", payload: updatedEmployee });
  } catch (err) {
    res.status(500).send({ message: "Error", payload: err.message });
  }
});

// Delete
router.delete("/employees/:id", async (req, res) => {
  try {
    const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
    if (!deletedEmployee) {
      return res.status(404).send({ message: "Employee Not Found" });
    }
    res.send({ message: "Employee Deleted" });
  } catch (err) {
    res.status(500).send({ message: "Error", payload: err.message });
  }
});

module.exports = router;
