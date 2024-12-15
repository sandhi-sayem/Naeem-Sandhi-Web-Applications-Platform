const express = require("express");
const router = express.Router();
const _ = require("lodash");
const { User, validateUserSchema } = require("../models/users");

router.get("/", async (req, res) => {
  const user = await User.find()
    .sort({ firstName: 1, lastName: 1 })
    .select("-password");

  return res.status(200).send(user);
});

router.post("/", async (req, res) => {
  req.body.fullName = req.body.firstName + req.body.lastName;

  const { error } = validateUserSchema(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  return res.status(200).send(req.body);
});

module.exports = router;
