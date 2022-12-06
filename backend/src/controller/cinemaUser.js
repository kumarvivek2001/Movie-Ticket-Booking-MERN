const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { secretJWTKey } = require("../utils/verify");

//register api
const userRegistration = async (req, res) => {
  try {
    if (
      !req.body.first_name ||
      !req.body.last_name ||
      !req.body.email ||
      !req.body.password ||
      !req.body.mobile
    ) {
      return res.json({ message: "Malformed Request!!" });
    }

    const userAlreadyExist = await userModel.findOne({ email: req.body.email });

    if (userAlreadyExist) {
      return res.json({ message: "User already exists!!" });
    }

    const userData = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      mobile: req.body.mobile,
    };

    const result = await userModel.create(userData);

    return res.json({
      message: "User registration success",
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return res.json({
      message: "Something went wrong!!",
      status: 500,
    });
  }
};

//login api
const userSignin = async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res.json({ message: "Malformed Request!!" });
    }

    const userExist = await userModel.findOne({ email: req.body.email });
    if (!userExist) {
      return res.json({ message: "User does not exists!!" });
    }

    const userPassHashFromDB = userExist.password;
    const passCorrect = await bcrypt.compare(
      req.body.password,
      userPassHashFromDB
    );
    if (!passCorrect) {
      return res.json({ message: "Wrong Password!!" });
    }

    const token = jwt.sign(
      {
        first_name: userExist.first_name,
        last_name: userExist.last_name,
        email: userExist.email,
        isAdmin: userExist.isAdmin,
      },
      secretJWTKey,
      { expiresIn: "6h" }
    );
    return res.json({ message: "Login succesfull!", token });
  } catch (err) {
    console.log(err);
    return res.json({
      message: "Something went wrong!!",
      status: 500,
    });
  }
};

//list all user api
const listallUsers = async (req, res) => {
  try {
    const usersList = await userModel.find({});
    return res.json({
      message: "List of all users with details!!",
      users: usersList,
    });
  } catch (err) {
    console.log(err);
    return res.json({
      message: "Something went wrong!!",
      status: 500,
    });
  }
};

module.exports = {
  userRegistration,
  userSignin,
  listallUsers,
};
