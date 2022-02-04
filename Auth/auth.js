const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  res.send("login");
};

const register = async (req, res) => {
  const { email, password, name } = req.body;

  if (!email || !password || !name) {
    throw new Error();
  }
  res.send({ email, password, name });
};

module.exports = { login, register };
