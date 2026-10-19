const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../utils/config");
const { UnauthorizedError } = require("./errors");

const auth = (req, res, next) => {
  if (process.env.NODE_ENV === "test" && req.user?._id) {
    return next();
  }
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    return next(new UnauthorizedError("Authorization required"));
  }

  const token = authorization.replace("Bearer ", "");

  try {
    const payload = jwt.verify(token, JWT_SECRET);

    req.user = payload;

    return next();
  } catch (err) {
    return next(new UnauthorizedError("Authorization required"));
  }
};

module.exports = auth;
