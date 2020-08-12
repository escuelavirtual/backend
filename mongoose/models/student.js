const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  ratings: {
    type: Array,
    default: [],
  },

  courses: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("Student", studentSchema);
