const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const logger = require("morgan");
const mongoose = require("mongoose");
const dbConfig = require("./configs/database");
const MyLogger = require("./middlewares/myLogger");

const apiRoute = require("./routes/api");
const authRoute = require("./routes/auth");
const User = require("./model/User");
const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use(cors());
app.use(cookieParser());
app.use(MyLogger);

// use express router
app.use("/api", apiRoute);
app.use("/auth", authRoute);

app.get("/", (req, res) => {
  res.send("Hello World Chatter!");
});

// Error handler
/**
 * errorHandler
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const errorHandler = (err, req, res, next) => {
  const statusCode = err?.code || err?.status || 500;

  return res.status(statusCode).json({
    code: statusCode,
    message: err?.message || "Error",
  });
};
app.use(errorHandler);

const PORT = process.env.PORT || 2555;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

//connect mongodb atlas
const mongo_uri = dbConfig.MONGODB_URI;
mongoose.Promise = global.Promise;
mongoose.connect(
  mongo_uri,
  { useNewUrlParser: true },
  () => {
    console.log("database connection established!\nuri: ", mongo_uri);
  },
  (e) => {
    console.log("database connection error: ", e);
  }
);

//mongodb error handler
mongoose.connection.on("error", (err) => {
  console.error("MongoDB error", err);
});

module.exports = app;

//----------------------------------------------------------------------------------------------------

http = require("http");
const server = http.createServer(app); // Add this
const { Server } = require("socket.io"); // Add this

const CHAT_BOT = "ChatBot"; // Add this
let chatRoom = ""; // E.g. javascript, node,...
let allUsers = []; // All users in current chat room

// Add this
// Create an io server and allow for CORS from http://localhost:3000 with GET and POST methods
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// Add this
// Listen for when the client connects via socket.io-client
io.on("connection", (socket) => {
  console.log(`User connected ${socket.id}`);


  // We can write our socket event listeners in here...
  socket.on("join_room", (data) => {
    const { username, room } = data; // Data sent from client when join_room event emitted
    socket.join(room);
    chatRoom = room;
    allUsers.push({ id: socket.id, username, room });
    chatRoomUsers = allUsers.filter((user) => user.room === room);
    socket.to(room).emit("chatroom_users", chatRoomUsers);
    socket.emit("chatroom_users", chatRoomUsers);
    let __createdtime__ = Date.now(); // Current timestamp
    // Send message to all users currently in the room, apart from the user that just joined
    socket.to(room).emit("receive_message", {
      message: `${username} has joined the chat room`,
      username: CHAT_BOT,
      __createdtime__,
    }); // Join the user to a socket room
  });
  socket.on("send_message", (data) => {
    const { message, username, room, __createdtime__ } = data;
    io.in(room).emit("receive_message", data); // Send to all users in room, including sender
    // harperSaveMessage(message, username, room, __createdtime__) // Save message in db
    //   .then((response) => console.log(response))
    //   .catch((err) => console.log(err));
  });
  socket.on("leave_room", (data) => {
    const { username, room } = data;
    socket.leave(room);
    const __createdtime__ = Date.now();
    // Remove user from memory
    allUsers = leaveRoom(socket.id, allUsers);
    socket.to(room).emit("chatroom_users", allUsers);
    socket.to(room).emit("receive_message", {
      username: CHAT_BOT,
      message: `${username} has left the chat`,
      __createdtime__,
    });
    console.log(`${username} has left the chat`);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected from the chat");
    const user = allUsers.find((user) => user.id == socket.id);
    if (user?.username) {
      allUsers = leaveRoom(socket.id, allUsers);
      socket.to(chatRoom).emit("chatroom_users", allUsers);
      const offlineUser = User.findOneAndUpdate({username:user.username},{status:"Offline"});
      socket.to(chatRoom).emit("receive_message", {
        message: `${user.username} has disconnected from the chat.`,
      });
    }
  });
});

server.listen(4000, () => "Server is running on port 3000");
