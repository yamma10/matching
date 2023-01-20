const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 3,
    max: 25,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    max: 50,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 50,
  },
  profilePicture: {
    type: String,
    default: "",
  },
  coverPicture: {
    type: String,
    default: "",
  },
  city: {
    type: String,
    max: 4,
    default: "saga",
  },
  method: {
    type: String,
    default: "",
  },
},

 { timestamps: true }

);

module.exports = mongoose.model("Teacher", TeacherSchema);