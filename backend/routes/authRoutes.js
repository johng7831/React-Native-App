const express = require("express");

const router = express.Router();

const {
  registerUser,
  loginUser,
} = require("../controllers/authController");

router.post("/register", registerUser);
router.get("/register", (req, res) => {
  res.status(405).json({
    message: "Use POST /api/auth/register",
  });
});

router.post("/login", loginUser);
router.get("/login", (req, res) => {
  res.status(405).json({
    message: "Use POST /api/auth/login",
  });
});

module.exports = router;