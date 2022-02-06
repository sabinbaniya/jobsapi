const jwt = require("jsonwebtoken");

const BadRequestError = require("../Errors/BadRequestError");
const UnauthenticatedError = require("../Errors/Unauthenticated");
require("dotenv").config();

const checkAuth = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token || !token.startsWith("Bearer")) {
    throw new BadRequestError("User not authenticated");
  }

  const access = token.split(" ")[1];

  try {
    const user = jwt.verify(access, process.env.JWT_SECRET);

    if (!user) {
      throw new UnauthenticatedError("Not authorized");
    }

    req.body.user = { userId: user.userId, name: user.name };

    next();
  } catch (error) {
    throw new UnauthenticatedError("Not authorized");
  }
};

module.exports = checkAuth;
