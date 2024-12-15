const mongoose = require("mongoose");
const Joi = require("joi");

const credentialSchema = new mongoose.Schema({
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
});

const Credential = mongoose.model("Credential", credentialSchema);

const validateCredentialSchema = (body) => {
  const schema = Joi.object({
    email: Joi.string().min(2).max(100).required().email(),
    password: Joi.string()
      .min(7)
      .max(25)
      .required()
      .regex(/^[0-9a-zA-Z@!#$%]$/),
  });

  return schema.validate(body);
};

module.exports = { Credential, validateCredentialSchema };
