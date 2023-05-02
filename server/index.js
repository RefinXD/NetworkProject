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
const DirectRoom = require("./model/DirectRoom");
const { sensitiveHeaders } = require("http2");

const CHAT_BOT = "ChatBot"; // Add this
let chatRoom = ""; // E.g. javascript, node,...
let allUsers = []; // All users in current chat room
let connectedUsers = [];
let usernameMapping = new Map();
let idMapping = new Map();
// Add this
// Create an io server and allow for CORS from http://localhost:3000 with GET and POST methods
const io = new Server(server, {
  cors: {
    origin: [
      "http://localhost:3000",
      "http://192.168.1.41:3000",
      "http://192.168.1.33:3000",
      "http://172.20.10.4:3000",
      "http://172.20.10.12:3000",
      "http:///182.232.53.57:3000"

    ],
    methods: ["GET", "POST"],
  },
});

// io.use(async (socket, next) => {
//   const sessionID = socket.handshake.auth.sessionID;
//   if (sessionID) {
//     const session = await sessionStore.findSession(sessionID);
//     if (session) {
//       socket.sessionID = sessionID;
//       socket.userID = session.userID;
//       socket.username = session.username;
//       return next();
//     }
//   }
//   const username = socket.handshake.auth.username;
//   if (!username) {
//     return next(new Error("invalid username"));
//   }
//   socket.sessionID = randomId();
//   socket.userID = randomId();
//   socket.username = username;
//   next();
// });

// Add this
// Listen for when the client connects via socket.io-client
io.on("connection", async (socket) => {
  console.log(`User connected ${socket.id}`);

  // console.log(socket)
  // console.log(io.sockets['sockets']);
  // console.log("after join room")
  socket.on("updateUsernames", (data) => {
   
    const obj = JSON.parse(data);
    const name = obj.nickname;
    const userid = obj._id
    if (connectedUsers.indexOf(name) == -1) {
      connectedUsers.push({name,userid});
      console.log(connectedUsers);
      usernameMapping.set(name, socket.id);
      idMapping.set(socket.id, {name,userid});
      // console.log(usernameMapping.get(name))
      // console.log(idMapping.get(socket.id))
    } else {
      console.log("no update");
    }
    let onlineObj = [];
    connectedUsers.forEach((element) => {
     
      newObj = { _id: usernameMapping.get(element.name), nickname: element.name,id:element.userid };
      onlineObj.push(newObj);
    });

    socket.broadcast.emit("online_users", onlineObj);

    socket.emit("online_users", onlineObj);
  });
  // const onlineUsers = await User.find({status: "Online"}).select({nickname: 1});
  // console.log(onlineUsers)

  socket.on("join_room", (data) => {
    // console.log("data from join room",data)
    const { username, room } = data; // Data sent from client when join_room event emitted
    socket.join(room);
    chatRoom = room;
    allUsers.push({ id: socket.id, username, room });
    chatRoomUsers = allUsers.filter((user) => user.room === room);
    console.log(chatRoomUsers);
    console.log("-----------chatroomuser-------", chatRoomUsers);
    socket.broadcast.to(room).emit("chatroom_users", chatRoomUsers);
    //socket.to(room).emit("chatroom_users", chatRoomUsers);
    socket.emit("chatroom_users", chatRoomUsers);
    let __createdtime__ = Date.now(); // Current timestamp
    // Send message to all users currently in the room, apart from the user that just joined
    socket.to(room).emit("receive_message", {
      message: `${username} has joined the chat room`,
      username: CHAT_BOT,
      __createdtime__,
    }); // Join the user to a socket room
  });
  socket.on("join_directroom", (data) => {
    // console.log("data from join room",data)
    const { username, directroom } = data; // Data sent from client when join_room event emitted
    socket.join(directroom);
    chatRoom = directroom;
    allUsers.push({ id: socket.id, username, directroom });
    chatRoomUsers = allUsers.filter((user) => user.room === directroom);
    console.log(chatRoomUsers);
    console.log("-----------chatroomuser-------", chatRoomUsers);
    socket.broadcast.to(directroom).emit("chatroom_users", chatRoomUsers);
    //socket.to(room).emit("chatroom_users", chatRoomUsers);
    socket.emit("chatroom_users", chatRoomUsers);
    let __createdtime__ = Date.now(); // Current timestamp
    // Send message to all users currently in the room, apart from the user that just joined
    socket.to(directroom).emit("receive_message", {
      message: `${username} has joined the chat room`,
      username: CHAT_BOT,
      __createdtime__,
    }); // Join the user to a socket room
  });



  // socket.on("user_join_dm",(sender,receiver) =>{
  //   console.log("socket of" ,idMapping.get(socket.id))
  //   const target = usernameMapping.get(receiver)
  //   console.log(sender,receiver)
  //   console.log("joining",target)
  //   console.log(receiver)
  //   socket.join(receiver)
  //   // io.in(target).emit("send_dm","test")
  //   // io.in(socket.id).emit("send_dm","test")
  // });

  // socket.on("send_dm", (data) => {
  //   console.log(data);
  //   console.log("in send dm user:", socket.id);
  //   const { message, username, room, __createdtime__ } = data;
  //   target_room = usernameMapping.get(room);
  //   console.log(1,message);
  //   console.log(2,target_room,room);
  //   console.log(3,username)
  //   new_data = {
  //     message:message,
  //     room:target_room,
  //     username:idMapping.get(username),
  //     __createdtime__:__createdtime__
  //   }
  //   //send to sender'sroom the user is joining
  //   io.in(room).emit("echo_dm",new_data);
  //   //send to receiver
  //   io.in(target_room).emit("receive_dm",new_data); // Send to all users in room, including sender
  //   // harperSaveMessage(message, username, room, __createdtime__) // Save message in db
  //   //   .then((response) => console.log(response))
  //   //   .catch((err) => console.log(err));
  // });


  socket.on("changeUser",()=>{
    socket.emit("clear")
  })

  socket.on("send_message", (data) => {
    const { message, username, room, __createdtime__ } = data;
    console.log(message);
    console.log(username);
    console.log(room);
    io.in(room).emit("receive_message", data);
    io.in(room).emit("echo_dm", data); // Send to all users in room, including sender
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
    chatRoomUsers = allUsers.filter((user) => user.room === room);
    console.log(chatRoomUsers);
    console.log("-----------chatroomuser-------", chatRoomUsers);
    socket.broadcast.to(room).emit("chatroom_users", chatRoomUsers);
    //socket.to(room).emit("chatroom_users", chatRoomUsers);
    socket.emit("chatroom_users", chatRoomUsers);
    socket.to(room).emit("receive_message", {
      username: CHAT_BOT,
      message: `${username} has left the chat`,
      __createdtime__,
    });
    console.log(`${username} has left the chat`);
  });

  socket.on("logout", (name) => {
    console.log("logout");
    const targetUser = name;
    const targetIdx = connectedUsers.indexOf(targetUser);
    console.log(targetIdx);
    connectedUsers.splice(targetIdx, 1);
    console.log(connectedUsers);
    idMapping.delete(usernameMapping.get(targetUser));
    usernameMapping.delete(targetUser);
    let onlineObj = [];
    connectedUsers.forEach((element) => {
      newObj = { _id: socket.id, nickname: element };
      onlineObj.push(newObj);
    });
    socket.broadcast.emit("online_users", onlineObj);
    socket.emit("online_users", onlineObj);
  });

  socket.on("disconnect", async () => {
    console.log("User disconnected from the chat", socket.id);
    const targetUser = idMapping.get(socket.id);
    const targetIdx = connectedUsers.indexOf(targetUser);
    connectedUsers.splice(targetIdx, 1);
    idMapping.delete(socket.id);
    usernameMapping.delete(targetUser);
    let onlineObj = [];
    connectedUsers.forEach((element) => {
      newObj = { _id: socket.id, nickname: element };
      onlineObj.push(newObj);
    });
    socket.broadcast.emit("online_users", onlineObj);
    socket.emit("online_users", onlineObj);
    if (targetUser) {
      socket.to(chatRoom).emit("receive_message", {
        message: `${targetUser} has disconnected from the chat.`,
      });
    }
  });

  
});

server.listen(4000, () => "Server is running on port 3000");
