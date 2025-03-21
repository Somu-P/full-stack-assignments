const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  skills: {
    type: [String], 
    required: true,
  },
  address: {
    street: String,
    city: String,
    state: String,
    zip: String,
  },
  prevExperiences: [
    {
      company: String,
      role: String,
      years: Number,
    },
  ],
});

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
