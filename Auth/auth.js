const jwt = require("jsonwebtoken");
const UserModel = require("../Models/UserModel");

const BadRequestError = require("../Errors/BadRequestError");
const { StatusCodes } = require("http-status-codes");

require("dotenv").config();

const login = async (req, res) => {
  res.send("login");
};

const register = async (req, res) => {
  const { email, password, name } = req.body;

  await UserModel.create({
    name,
    email,
    password,
  });

  res.status(StatusCodes.CREATED).json({ name });
};

module.exports = { login, register };
