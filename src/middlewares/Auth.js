const jwt = require("jsonwebtoken");
const User = require("../models/user");

const userAuth = async (req, res, next) => {
  try {
    // Read token from cookies
    const { token } = req.cookies;

    // Check if token exists
    if (!token) {
      return res.status(401).send("Login Again");
    }

    // Verify JWT token
    const decodedObj = jwt.verify(token, "DEV@TINDER_SECRET6278");
    const { _id } = decodedObj;

    // Find user in database
    const user = await User.findById(_id);

    // Check if user exists
    if (!user) {
      return res.status(401).send("User Not Found");
    }

    // Attach user to request object
    req.user = user;

    // Proceed to the next middleware
    next();
  } catch (err) {
    return res.status(401).send("Error: " + err.message);
  }
};

module.exports = {
  userAuth,
};