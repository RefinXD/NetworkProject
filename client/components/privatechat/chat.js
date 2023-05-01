import styles from "./styles.module.css";
import RoomAndUsersColumn from "./room-and-users"; // Add this
import SendMessage from "./send-message";
import MessagesReceived from "./messages";
import socket from "../../utils/Utils"; // Add this

const Chat = ({ nickname, room }) => {
  // Add this -- our server will run on port 4000, so we connect to it from here
  socket.on("users", (users) => {
    users.forEach((user) => {
      user.self = user.userID === socket.id;
      initReactiveProperties(user);
    });
    // put the current user first, and then sort by username
    this.users = users.sort((a, b) => {
      if (a.self) return -1;
      if (b.self) return 1;
      if (a.username < b.username) return -1;
      return a.username > b.username ? 1 : 0;
    });
  });

  socket.on("user connected", (user) => {
    initReactiveProperties(user);
    this.users.push(user);
  });
  
  console.log("Chat page    ", nickname, "    ", room);
  return (
    <div
      className={styles.chatContainer}
      style={{ backgroundColor: "#E6E3D8" }}
    >
      <RoomAndUsersColumn socket={socket} username={nickname} room={room} />

      <div>
        <MessagesReceived socket={socket} />
        <SendMessage socket={socket} username={nickname} room={room} />
      </div>
    </div>
  );
};

export default Chat;
