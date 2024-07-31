const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/aaftabdb";
const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("connected to mongo.");
  } catch (error) {
    console.log("error comes.", error);
    process.exit(1);
  }
};
module.exports = connectToMongo;
