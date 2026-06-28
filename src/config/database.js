const mongoose = require("mongoose");
const connectDB = async () => {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI is not set in environment. Create a .env file or set the variable.");
  }
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
};

module.exports = connectDB;