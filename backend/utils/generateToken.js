const jwt = require("jsonwebtoken");

const generateToken = (payload, secret, options = {}) => {
  return jwt.sign(payload, secret, options);
};

module.exports = generateToken;
