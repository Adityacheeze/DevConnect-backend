const mongoose = require("mongoose");
const connectDB = async () => {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI is not set in environment. Create a .env file or set the variable.");
  }

  try{

    await mongoose.connect(uri)
      console.log("Database connected");
    }
  catch(err){
    console.error("Database connection failed:", err);
    process.exit(1);
  }
};

module.exports = connectDB;