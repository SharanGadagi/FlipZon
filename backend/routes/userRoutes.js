const express = require("express");
const router = express.Router();
const { upload } = require("../utils/multer");
const {
  registerUser,
  activateUser,
  userLogin,
  getLoginUserInfo,
} = require("../controllers/userControllers");
const { isAuthenticated } = require("../middleware/auth");

//upload.single("file")   ===> remember this name is "file"
router.route("/register").post(upload.single("file"), registerUser);
router.route("/activation").post(activateUser);
router.route("/login").post(userLogin);
router.route("/getLoginUser").get(isAuthenticated, getLoginUserInfo);

module.exports = router;
