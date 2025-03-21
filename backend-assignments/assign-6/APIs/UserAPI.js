const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../Models/userModel");

const userApp = express.Router();
userApp.use(express.json());

userApp.post("/register", async (req, res) => {
  try {
    const { username, password, email } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already taken" });
    }

    // Hash password 
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      password: hashedPassword,
      email,
    });

    // Save user in DB
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });

  } catch (error) {
    res.status(500).json({ message: "Error registering user", error: error.message });
  }
});

module.exports = userApp;
