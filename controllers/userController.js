const User = require("../models/userModel");
const bcryptjs = require("bcryptjs");

// Register function
// Register function
const registerUser = async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already in use" });
    }

    const hashedPassword = await bcryptjs.hash(req.body.password, 10);
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      userType: req.body.userType, // Save user type during registration
    });

    const savedUser = await newUser.save();
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      userId: savedUser._id, // Return the unique user ID
      userType: savedUser.userType, // Return userType for potential use
    });
  } catch (error) {
    console.error("Error during registration", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


// Login function
// Login function
const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    const isPasswordValid = await bcryptjs.compare(req.body.password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Return user data including _id and userType
    res.status(200).json({
      success: true,
      message: "Login successful",
      userId: user._id, // Return user ID for future reference
      userType: user.userType, // Send userType back to frontend
    });
  } catch (error) {
    console.error("Error during login", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


module.exports = { registerUser, loginUser };
