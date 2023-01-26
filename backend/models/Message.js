const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  sender_id: {
    //送った方のID
    type: String,
    required: true,
  },
  room_id: {
    //会話している二人の部屋のID
    type: String,
    required: true
  },
  message: {
    type: String,
    max: 200,
  }
})

module.exports = mongoose.model("Message", MessageSchema);

