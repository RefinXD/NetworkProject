const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  nickname: {
    type: String,
    trim: true,
    required: [true, "Please add a name"],
  },
  username: {
    type: String,
    trim: true,
    required: [true, "Please add a surname"],
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
    minlength : 6
  },
  
});

module.exports = mongoose.model("User", UserSchema);
