const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
  student_id: {
    type: String,
    required: true
  },
  teacher_id: {
    type: String,
    requried: true
  },
  
},
{ timestamps: true }
)

module.exports = mongoose.model("Room", RoomSchema);