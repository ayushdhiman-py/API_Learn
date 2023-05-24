const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = () => {
  console.log("DB connected");
  return mongoose.connect(process.env.MongoURL);
};

module.exports = connectDB;
