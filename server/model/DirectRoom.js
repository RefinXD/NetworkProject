const mongoose = require("mongoose");

const DirectRoomSchema = new mongoose.Schema({
  roomname: {
    type: String,
    trim: true,
    required: [true, "Please add a Roomname"],
  },
});

module.exports = mongoose.model("DirectRoom", DirectRoomSchema);
