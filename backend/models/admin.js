const bcrypt = require("bcryptjs");

let admin = {
  email: "admin@gmail.com",
  password: bcrypt.hashSync("1234", 8)
};

const getAdmin = () => admin;

const updateAdmin = ({ email, password }) => {
  admin = { email, password };
  return admin;
};

module.exports = {
  getAdmin,
  updateAdmin
};