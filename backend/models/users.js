const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please enter a valid first name"],
      minlength: 2,
      maxlength: 100,
    },
    lastName: {
      type: String,
      required: [true, "Please enter a valid last name"],
      minlength: 2,
      maxlength: 100,
    },
    email: {
      type: String,
      required: [true, "Please enter a valid email"],
      minlength: 7,
      maxlength: 100,
    },
    password: {
      type: String,
      required: [true, "Please enter a valid password"],
      minlength: 6,
      maxlength: 25,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
