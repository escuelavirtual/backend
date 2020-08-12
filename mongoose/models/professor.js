const mongoose = require("mongoose");

const professorSchema = mongoose.Schema({
  courses: {
    type: Array,
    default: [],
  },

  rating: Number,
});

module.exports = mongoose.model("Professor", professorSchema);
