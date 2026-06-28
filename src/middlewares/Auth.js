const jwt = require("jsonwebtoken");
const User = require("../models/user");

const userAuth = async (req, res, next) => {
  //read token from cookies
  try{
    const {token} = req.cookies;
    if(!token) {
      res.status(401).send("Login Again");
    }
    // validate the token
    const secret = process.env.JWT_SECRET;
    if (!secret) throw new Error("JWT_SECRET is not set in environment. Add it to your .env file.");
    const decodedObj = jwt.verify(token, secret);
    const { _id } = decodedObj;
    // find the user
    const user = await User.findById(_id);
    if (!user) {
      throw new Error("User Not Found");
    }
    req.user = user; // attach user to request object
    // proceed to the next middleware or route handler
    next();
  } catch(err) {
    res.status(401).send("Error: " + err.message);
  }

};

module.exports = {
  userAuth,
};
