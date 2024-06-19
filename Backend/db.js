const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://Ankit:Ankit123@inventorymanagement.m2a0nve.mongodb.net/IMS";

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;
