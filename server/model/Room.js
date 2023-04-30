const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
  roomname: {
    type: String,
    trim: true,
    required: [true, "Please add a Roomname"],
  },
});

module.exports = mongoose.model("Room", RoomSchema);
