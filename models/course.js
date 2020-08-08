const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
  parts: {
    type: Array,
    default: [],
  },

  title: {
    type: String,
    required : true,
  },

  description: {
    type: String,
    required : true
  },

  summary: {
    type: String,
    required: true
  },

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
