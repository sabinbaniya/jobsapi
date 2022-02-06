const { StatusCodes } = require("http-status-codes");

const UserModel = require("../Models/UserModel");
const BadRequestError = require("../Errors/BadRequestError");

require("dotenv").config();

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password || password === "" || email === "") {
    throw new BadRequestError("Please provide all required fields");
  }

  const user = await UserModel.findOne({ email });

  if (!user) {
    throw new BadRequestError("No user exists");
  }

  const isPasswordValid = await user.comparePasswords(password);

  if (!isPasswordValid) {
    throw new BadRequestError("No user exists");
  }

  const token = user.generateToken();

  res.status(StatusCodes.OK).json({ name: user.name, userId: user._id, token });
};

const register = async (req, res) => {
  const { email, password, name } = req.body;

  const user = await UserModel.create({
    name,
    email,
    password,
  });

  const token = user.generateToken();

  res.status(StatusCodes.CREATED).json({ name: user.name, token });
};

module.exports = { login, register };
