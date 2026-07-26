const mongoose = require("mongoose");
const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://developeraditya24:eMpBefulnW27VEgU@namastenode.umy13r5.mongodb.net/"
  );
};

module.exports = connectDB;
