const mongoose = require("mongoose");

const databaseConnection = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(
        `Database connected Successfully.... ${data.connection.host} `
      );
    })
    .catch((error) => {
      console.log("database error", error);
    });
};

module.exports = databaseConnection;
