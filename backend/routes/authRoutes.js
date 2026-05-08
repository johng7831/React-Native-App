// routes/authRoutes.js
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const { getAdmin, updateAdmin } = require("../models/admin");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

const SECRET = "mysecretkey";

// ✅ REGISTER API
router.post("/register", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  if (password.length < 4) {
    return res.status(400).json({ message: "Password must be at least 4 characters" });
  }

  const hashedPassword = bcrypt.hashSync(password, 8);
  updateAdmin({ email, password: hashedPassword });

  return res.status(201).json({ message: "Admin registered successfully" });
});


// ✅ LOGIN API
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const admin = getAdmin();

  if (email !== admin.email) {
    return res.status(400).json({ message: "User not found" });
  }

  const isMatch = bcrypt.compareSync(password, admin.password);

  if (!isMatch) {
    return res.status(400).json({ message: "Invalid password" });
  }

  const token = jwt.sign({ email }, SECRET, { expiresIn: "1d" });

  res.json({
    message: "Login successful",
    token
  });
});


// 🔒 PROTECTED ROUTE
router.get("/admin", authMiddleware, (req, res) => {
  res.json({
    message: "Welcome Admin Dashboard",
    user: req.user
  });
});

module.exports = router;