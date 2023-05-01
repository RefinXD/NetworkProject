const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const logger = require("morgan");
const mongoose = require("mongoose");
const dbConfig = require("./configs/database");
const MyLogger = require("./middlewares/myLogger");
const leaveRoom = require("./utils/leave-room");
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
let onlineUsers = [];
// Add this
// Create an io server and allow for CORS from http://localhost:3000 with GET and POST methods
const io = new Server(server, {
  cors: {
    origin: [
      "http://localhost:3000",
      "http://192.168.1.41:3000",
      "http://192.168.1.33:3000",
    ],
    methods: ["GET", "POST"],
  },
});

io.use(async (socket, next) => {
  const sessionID = socket.handshake.auth.sessionID;
  if (sessionID) {
    const session = await sessionStore.findSession(sessionID);
    if (session) {
      socket.sessionID = sessionID;
      socket.userID = session.userID;
      socket.username = session.username;
      return next();
    }
  }
  const username = socket.handshake.auth.username;
  if (!username) {
    return next(new Error("invalid username"));
  }
  socket.sessionID = randomId();
  socket.userID = randomId();
  socket.username = username;
  next();
});

// Add this
// Listen for when the client connects via socket.io-client
io.on("connection", async (socket) => {
  console.log(`User connected ${socket.id}`);
  // console.log("after join room")
  const onlineUsers = await User.find({ status: "Online" }).select({
    nickname: 1,
  });

  // We can write our socket event listeners in here...
  socket.on("test", (data) => {
    socket.emit("online_users", onlineUsers);
  });
  socket.on("join_room", (data) => {
    // console.log("data from join room",data)
    const { username, room } = data; // Data sent from client when join_room event emitted
    socket.join(room);
    chatRoom = room;
    allUsers.push({ id: socket.id, username, room });
    chatRoomUsers = allUsers.filter((user) => user.room === room);
    console.log("-----------chatroomuser-------", chatRoomUsers);
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
    console.log(message);
    console.log(username);
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

  socket.on("disconnect", async () => {
    console.log("User disconnected from the chat");
    const user = allUsers.find((user) => user.id == socket.id);
    console.log("user", user);
    console.log(user?.username);
    if (user?.username) {
      allUsers = leaveRoom(socket.id, allUsers);
      socket.to(chatRoom).emit("chatroom_users", allUsers);
      const offlineUser = await User.findOneAndUpdate(
        { nickname: user.username },
        { status: "Offline" }
      );
      console.log(offlineUser);
      socket.to(chatRoom).emit("receive_message", {
        message: `${user.username} has disconnected from the chat.`,
      });
    }
  });

  // persist session
  sessionStore.saveSession(socket.sessionID, {
    userID: socket.userID,
    username: socket.username,
    connected: true,
  });

  // emit session details
  socket.emit("session", {
    sessionID: socket.sessionID,
    userID: socket.userID,
  });

  // join the "userID" room
  socket.join(socket.userID);

  // fetch existing users
  const users = [];

  const messagesPerUser = new Map();
  messages.forEach((message) => {
    const { from, to } = message;
    const otherUser = socket.userID === from ? to : from;
    if (messagesPerUser.has(otherUser)) {
      messagesPerUser.get(otherUser).push(message);
    } else {
      messagesPerUser.set(otherUser, [message]);
    }
  });

  sessions.forEach((session) => {
    users.push({
      userID: session.userID,
      username: session.username,
      connected: session.connected,
      messages: messagesPerUser.get(session.userID) || [],
    });
  });
  socket.emit("users", users);

  // notify existing users
  socket.broadcast.emit("user connected", {
    userID: socket.userID,
    username: socket.username,
    connected: true,
    messages: [],
  });

  // forward the private message to the right recipient (and to other tabs of the sender)
  socket.on("private message", ({ content, to }) => {
    const message = {
      content,
      from: socket.userID,
      to,
    };
    socket.to(to).to(socket.userID).emit("private message", message);
    // messageStore.saveMessage(message);
  });

  // notify users upon disconnection
  socket.on("disconnect", async () => {
    const matchingSockets = await io.in(socket.userID).allSockets();
    const isDisconnected = matchingSockets.size === 0;
    if (isDisconnected) {
      // notify other users
      socket.broadcast.emit("user disconnected", socket.userID);
      // update the connection status of the session
      // sessionStore.saveSession(socket.sessionID, {
      //   userID: socket.userID,
      //   username: socket.username,
      //   connected: false,
      // });
    }
  });
});

server.listen(4000, () => "Server is running on port 3000");
