import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const exist = await User.findOne({ email });
    if (exist) {
      return res.status(400).json({ message: "email already exists" });
    }
    const hashPassword = await bcryptjs.hash(password, 10);
    const newUser = User({
      fullname: fullname,
      email: email,
      password: hashPassword,
    });

    await newUser.save();
    res.status(201).json({
      message: "User created successfully",
      user: {
        _id: newUser._id,
        fullname: newUser.fullname,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.log("error: " + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    const isMatch = await bcryptjs.compare(password, existingUser.password);

    if (!existingUser || !isMatch) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(201).json({
      message: "login successfull",
      user: {
        fullname: existingUser.fullname,
        email: existingUser.email,
        id: existingUser._id,
      },
    });
  } catch (error) {
    console.log("error: " + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
