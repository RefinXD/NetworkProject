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
const Room = require("./model/Room");

const CHAT_BOT = "ChatBot"; // Add this
let chatRoom = ""; // E.g. javascript, node,...
let allUsers = []; // All users in current chat room
let connectedUsers = [];
let usernameMapping = new Map()
let idMapping = new Map()
// Add this
// Create an io server and allow for CORS from http://localhost:3000 with GET and POST methods
const io = new Server(server, {
  cors: {
    origin: [
      "http://localhost:3000",
      "http://192.168.1.41:3000",
      "http://192.168.1.33:3000",
      "http://172.20.10.4:3000"
    ],
    methods: ["GET", "POST"],
  },
});


// Add this
// Listen for when the client connects via socket.io-client
io.on("connection", async (socket) => {
  console.log(`User connected ${socket.id}`);
  
  // console.log(socket)
  // console.log(io.sockets['sockets']);
  // console.log("after join room")
  socket.on("updateUsernames", (data)=>{
    console.log(data)
    const obj = JSON.parse(data)
    const name = obj.nickname;
    if (connectedUsers.indexOf(name) == -1){
      connectedUsers.push(name)
      console.log(connectedUsers)
      usernameMapping.set(name,socket.id)
      idMapping.set(socket.id,name)
    }
    else{
      console.log("no update")
    }
    let onlineObj = []
    connectedUsers.forEach(element => {
    newObj = {_id:socket.id,nickname:element}
    onlineObj.push(newObj)
   })
    socket.emit("online_users", onlineObj);
  })
  // const onlineUsers = await User.find({status: "Online"}).select({nickname: 1});
  // console.log(onlineUsers)
  const allRooms = await Room.find()
  socket.emit("available_rooms",allRooms );
  
  // We can write our socket event listeners in here...
  socket.on("test",async  (data) => {
    const allRooms = await Room.find()
    socket.emit("available_rooms", allRooms);
  })
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
  socket.on("logout", () => {
    console.log("logout")
    const targetUser = idMapping.get(socket.id)
    const targetIdx = connectedUsers.indexOf(targetUser)
    connectedUsers.splice(targetIdx);
    idMapping.delete(socket.id);
    usernameMapping.delete(targetUser);
    let onlineObj = []
    connectedUsers.forEach(element => {
    newObj = {_id:socket.id,nickname:element}
    onlineObj.push(newObj)
   })
    socket.emit("online_users", onlineObj);
    socket.disconnect();
  })
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
    socket.disconnect();
  });

});

server.listen(4000, () => "Server is running on port 3000");
