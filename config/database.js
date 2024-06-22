const mongoose = require("mongoose");

const dbConnection = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then((conn) => {
      console.log(
        `DB Connected to ${conn.connection.host}:${conn.connection.port}`
      );
    })
    .catch((error) => {
      console.log(`Error connecting to DB ${error}`);
      process.exit(1);
    });
};

module.exports = dbConnection;
