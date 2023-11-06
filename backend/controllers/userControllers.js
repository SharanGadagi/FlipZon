const path = require("path");
const User = require("../models/user");
const ErrorHandler = require("../utils/ErrorHandler");
const fs = require("fs");
const generateToken = require("../utils/generateToken");
const sendMail = require("../utils/sendMail");
const catchAsyncError = require("../middleware/catchAsyncError");
const jwt = require("jsonwebtoken");
const { ObjectId } = require("mongodb");

const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    let ExistUser = await User.findOne({ email });
    //user exist
    if (ExistUser) {
      //  this for same image not uploaded again in db
      const filename = req.file.filename;
      const filePath = `uploads/${filename}`;
      fs.unlink(filePath, (err) => {
        if (err) {
          console.log("error", err);
          res.status(500).json({
            message: "Error deleting file",
          });
        }
      });
      return next(new ErrorHandler("User already exist", 400));
    }
    const filename = req.file.filename;
    const fileUrl = path.join(filename);
    const avatar = fileUrl;

    // Create an object with the user data
    const user = {
      name,
      email,
      password,
      avatar,
    };

    //create token
    const activationToken = createActivationToken(user);
    console.log("registerUser ~ activationToken:", activationToken);

    // res.cookie("activation_token", activationToken, {
    //   expires: new Date(Date.now() + 10 * 60 * 1000),
    //   httpOnly: true,
    //   sameSite: "none",
    //   secure: true,
    // });

    const removeActivationTokenPeriods = activationToken.replace(/\./g, "&");
    console.log(
      "registerUser ~ removeActivationTokenPeriods:",
      removeActivationTokenPeriods
    );

    //this is frontend url
    const activationUrl = `http://localhost:5173/activation/${removeActivationTokenPeriods}`;

    // console.log("registerUser ~ activationUrl:", activationUrl);

    //send mail
    try {
      sendMail({
        email: user.email,
        subject: "Activate your account",
        text: `Hello ${user.name} please click on the link to activate your account: ${activationUrl}`,
      });

      res.status(200).json({
        message: `Please check your email: ${user.email} to activate your account`,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
};

// create activation token
const createActivationToken = (user) => {
  const options = {
    expiresIn: "5m",
  };
  return generateToken(user, process.env.ACTIVATION_SECRET_KEY, options);
};

// const createActivationToken = (user) => {
//   return jwt.sign(user, process.env.ACTIVATION_SECRET_KEY, {
//     expiresIn: "5m",
//   });
// };

//activate the user
const activateUser = catchAsyncError(async (req, res, next) => {
  try {
    //first verify the token
    const { activation_token } = req.body;

    const newUser = jwt.verify(
      activation_token,
      process.env.ACTIVATION_SECRET_KEY
    );
    console.log("activateUser ~ newUser:", newUser);

    //for verified user
    if (!newUser) {
      return next(new ErrorHandler("Invalid token", 400));
    }

    const { name, email, avatar, password } = newUser;

    var user = await User.findOne({ email });
    if (user) {
      return next(new ErrorHandler("User already exist", 400));
    }
    //save the user data in db
    user = await User.create({
      name,
      email,
      avatar,
      password,
    });
    //this in model use "getJwtToken" method
    const token = user.getJwtToken();
    res
      .status(201)
      .cookie("token", token, {
        //3 months
        expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
        httpOnly: true,
        sameSite: "none",
        secure: true,
      })
      .json({
        success: true,
        user,
        token,
      });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});

const userLogin = catchAsyncError(async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(new ErrorHandler("Please provide all fields!", 400));
    }

    const user = await User.findOne({ email }).select("+password");
    console.log("login ~ user:", user);

    if (!user) {
      return next(new ErrorHandler("User doesn't exist!", 400));
    }

    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      return next(
        new ErrorHandler("Please provide the correct information", 400)
      );
    }

    const userPayload = {
      ...user,
    };
    console.log("login ~ userPayload:", userPayload);

    const options = {
      expiresIn: process.env.JWT_EXPIRES,
    };
    const token = generateToken(
      userPayload,
      process.env.JWT_SECRET_KEY,
      options
    );

    console.log("userLogin ~ token:", token);

    res
      .status(200)
      .cookie("token", token, {
        expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
        httpOnly: true,
        sameSite: "none",
        secure: true,
      })
      .json({
        success: true,
        message: "Login Successfully",
        user,
        token,
      });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});

const getLoginUserInfo = catchAsyncError(async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      return next(new ErrorHandler("User Doesn't exist", 400));
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});

module.exports = {
  registerUser,
  activateUser,
  userLogin,
  getLoginUserInfo,
};
