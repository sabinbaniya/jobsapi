const { StatusCodes } = require("http-status-codes");

const CustomError = require("../Errors/CustomError");

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }

  return res.status(StatusCodes.BAD_REQUEST).json({ msg: err });
};

module.exports = errorHandler;
