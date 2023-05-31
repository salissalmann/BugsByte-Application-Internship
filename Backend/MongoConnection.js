const mongoose = require('mongoose');

const DBstring = "mongodb+srv://i200489:Salis2002@cluster0.itrz8w7.mongodb.net/";
mongoose.set('strictQuery', true);

const connectToMongo = async () => {
  try {
    await mongoose.connect(DBstring);
    console.log("CONNECTED TO DATABASE SUCCESSFULLY");
  } catch (error) {
    console.error("FAILED TO CONNECT TO DATABASE:", error.message);
  }
};

module.exports = connectToMongo;
