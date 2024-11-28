const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userType: { type: String, enum: ['arena', 'shop'], required: true }, // Include userType field
});

const User = mongoose.model("User", userSchema);
module.exports = User;
