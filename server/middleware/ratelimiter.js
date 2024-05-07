const setRateLimit = require("express-rate-limit");

const rateLimitMiddleware = setRateLimit({
  windowMs: 60 * 1000,
  max: 200,
  headers: true,
});

module.exports = rateLimitMiddleware;
