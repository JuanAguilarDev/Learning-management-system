const mongoose = require("mongoose");

const Course = mongoose.model(
  "Course",
  new mongoose.Schema({
    title: String,
    description: String,
    repository: String,
    video: String,
    author: String
  })
);

module.exports = Course;
