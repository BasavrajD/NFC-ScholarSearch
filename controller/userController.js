const asyncHandler = require("express-async-handler");
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
//@desc Register a user
//@route POST /api/users/register
//@access public

const registerUser = asyncHandler(async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      res.status(400).send({
        success: false,
        message: "Please fill all fields",
      });
      // throw new Error("All fields are mandatory.");
    }

    const userAvailable = await userModel.findOne({ email });
    if (userAvailable) {
      res.status(401).send({
        success: false,
        message: "user already exists",
      });
      // throw new Error("User already registered");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      username,
      email,
      password: hashedPassword,
    });

    await user.save();
    return res.status(201).send({
      success: true,
      message: "New User Created",
      user,
    });
  } catch (error) {
    return res.status(500).send({
      message: "Error In Register Callback",
      success: false,
      error,
    });
    // throw new Error("User data is not valid");
  }
});

//@desc Login a user
//@route POST /api/users/login
//@access public

const loginUser = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "Please fill all fields",
      });
    }

    // if (user && (await bcrypt.compare(password, user.password))) {
    //   const accessToken = jwt.sign(
    //     {
    //       user: {
    //         username: user.username,
    //         email: user.email,
    //         id: user.id,
    //       },
    //     },
    //     process.env.ACCESS_TOKEN_SECRET,
    //     { expiresIn: "15m" }
    //   );
    //   res.status(200).json({ accessToken });
    // }
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(200).send({
        success: false,
        message: "Email is not registered",
      });
    }
    //password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send({
        success: false,
        message: "Invalid username or password",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Login successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Login Callback",
      error,
    });
  }
});

//@desc Current user
//@route GET /api/users/current
//@access private

const currentUser = asyncHandler(async (req, res) => {
  res.json(req.user);
});

module.exports = { registerUser, loginUser, currentUser };
