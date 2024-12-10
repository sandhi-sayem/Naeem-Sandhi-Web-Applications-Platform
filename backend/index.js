const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to DB.");
    app.listen(port, () => console.log(`App running on port ${port}`));
  })
  .catch((err) => console.log(err));

app.use(express.json());
app.get("/", (req, res) => {
  return res.status(200).send("Node.js, Express, and MongoDb");
});
