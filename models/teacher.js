const mongoose = require("mongoose");

const teacherSchema = mongoose.Schema({
  courses: {
    type: Array,
    default: [],
  },

  rating: Number,
});

module.exports = mongoose.model("Teacher", teacherSchema);
