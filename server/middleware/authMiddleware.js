const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  let token;

  // Check if Authorization header exists
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Extract token
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Save decoded data in request
      req.user = decoded;

      // Continue to next middleware/controller
      next();
    } catch (error) {
      return res.status(401).json({
        message: "Invalid Token",
      });
    }
  } else {
    return res.status(401).json({
      message: "No Token Provided",
    });
  }
};

module.exports = protect;