const mongoose = require("mongoose");
const { databaseUrl } = require("../secret");

const databaseConnection = async (options = {}) => {
  try {
    await mongoose.connect(databaseUrl, options);
    console.log(`Database connection successful`);

    mongoose.connection.on("error", (error) => {
      console.error("Connection is not established", error);
    });
  } catch (error) {
    console.error("Error: ", error.toString());
  }
};

module.exports = databaseConnection;
