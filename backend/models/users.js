const mongoose = require("mongoose");
const Joi = require("joi");

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
    fullName: {
      type: String,
      required: [true, "Please enter the full name of the user"],
      minlength: 4,
      maxlength: 200,
    },
    credential: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Credential",
      required: [true, "Please provide an credential for the user"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

const validateUserSchema = (body) => {
  const schema = Joi.object({
    firstName: Joi.string().min(2).max(100).required(),
    lastName: Joi.string().min(2).max(100).required(),
    credential: Joi.string()
      .required()
      .regex(/^[0-9a-fA-F]{24}$/, "credentialId"),
    fullName: Joi.string().min(4).max(200).required(),
  });

  return schema.validate(body);
};

module.exports = { User, validateUserSchema };
