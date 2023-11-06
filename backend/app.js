const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const ErrorHandler = require("./middleware/error");
// const fileUpload = require("express-fileupload"); when  use multer don't use this

app.use(express.json());
//for cookie
app.use(cookieParser());
const corsOptions = {
  origin: "http://localhost:5173", // or "*" to allow requests from any origin (for development)
  methods: "GET,POST,PUT,DELETE",
  credentials: true, // if you need to include cookies or authorization headers
};
app.use(cors(corsOptions));
//this for save the the files in upload folder
app.use("/", express.static("upload"));
app.use(bodyParser({ extended: true, limit: "50mb" }));
//for files
// app.use(fileUpload({ useTempFiles: true }));

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "backend/config/.env",
  });
}

//routes
const user = require("./routes/userRoutes");

app.use("/api/user", user);

// error middleware
app.use(ErrorHandler);

module.exports = app;
