const mongoose = require("mongoose");

const Course = mongoose.model(
  "Course",
  new mongoose.Schema({
    title: String,
    description: String,
    repository: String,
    url: String,
    user: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    ]
  })
);

module.exports = Course;