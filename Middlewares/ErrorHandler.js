const CustomError = require("../Errors/CustomError");

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
};

module.exports = errorHandler;
