import bcrypt from "bcrypt";
import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 5);

    const oldUser = await userModel.findOne({ username: req.body.username });
    if (!oldUser) {
      const newUser = new userModel({
        ...req.body,
        password: hash,
      });
      await newUser.save();
      res.status(200).json(newUser);
    } else {
      res.status(400).json("Username already exists ");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json("Internal Server Error");
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await userModel.findOne({ username: req.body.username });

    if (!user) {
      return res.status(400).json("Username not found ");
    }

    const isCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isCorrect) return res.status(400).json("Password incorrect! ");;

    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
      },
      process.env.JWT_KEY
    );

    const { password, ...info } = user._doc;
    res
      .cookie("accessToken", token, {
        httpOnly: true,
        // sameSite: "none",
        // secure: false,
      })
      .status(200)
      .send(info);
  } catch (err) {
    console.log(err);
  }
};
