const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
  parts: {
    type: Array,
    default: [],
  },

  title: String,

  description: String,

  summary: String,

  start_date: {
    type: Date,
    default: Date.now(),
  },

  finish_date: {
    type: Date,
  },

  requirements: {
    type: Array,
    default: [],
  },

  students: {
    type: Array,
    default: [],
  },

});

module.exports = mongoose.model("Course", courseSchema);
