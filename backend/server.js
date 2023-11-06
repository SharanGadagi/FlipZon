const app = require("./app");
const databaseConnection = require("./db/database");
const ErrorHandler = require("./middleware/error");

//handling uncaught exception
process.on("uncaughtException", (error) => {
  console.log(`Error: ${error.message}`);
  console.log("Shutting down the server for handling uncaught exception ");
});

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "backend/config/.env",
  });
}

app.use(ErrorHandler);
//database connection
databaseConnection();

//create server
const server = app.listen(process.env.PORT, () => {
  console.log(`server running at port http://localhost:${process.env.PORT}`);
});

//uncaught promise rejection
process.on("unhandleRejection", (error) => {
  console.log(`Shutting down the server for ${error.message}`);
  console.log("Shutting down the server for unHandle promise rejection ");
  server.close(() => {
    process.exit(1);
  });
});
