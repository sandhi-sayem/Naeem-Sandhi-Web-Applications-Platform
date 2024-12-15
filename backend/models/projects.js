const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter a valid title"],
      minlength: 2,
      maxlength: 100,
    },
    description: {
      type: String,
      required: [true, "Please enter a description"],
      minlength: 2,
      maxlength: 100,
    },
    image: {
      type: String,
      required: [true, "Please enter an image URL"],
      minlength: 7,
      maxlength: 100,
    },
    reviews: [
      {
        review: {
          user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: [true, "Please provide an user id for the review"],
          },
          title: {
            type: String,
            required: [true, "Please provide a title for the review"],
          },
          description: {
            type: String,
            required: [true, "Please provide a description for the review"],
          },
        },
      },
    ],
    ratings: [
      {
        rating: {
          user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: [true, "Please provide an user id for the rating"],
          },
          star: {
            type: Number,
            required: [true, "Please provide a star rating for the project"],
          },
        },
      },
    ],
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
