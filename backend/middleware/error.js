const ErrorHandler = require("../utils/ErrorHandler");

module.exports = (error, req, res, next) => {
  error.statusCode = error.statusCode;
  error.message = error.message;

  //wrong mongo db id
  if (error.name === "CastError") {
    const message = `Resources not found with this id.. Invalid ${err.path}`;
    error = new ErrorHandler(message, 400);
  }

  //Duplicate key error
  if (error.code === 1100) {
    const message = `Duplicate key ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorHandler(message, 400);
  }
  //Wrong jwt entered
  if (error.name === "jsonwebTokenError") {
    const message = `Your url is invalid please try again later`;
    err = new ErrorHandler(message, 400);
  }
  // jwt expired
  if (error.name === "TokenExpiredError") {
    const message = `Your url is expired please try again later`;
    err = new ErrorHandler(message, 400);
  }

  res.status(error.statusCode).json({
    success: false,
    message: error.message,
  });
};
