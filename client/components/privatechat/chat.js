import styles from "./styles.module.css";
import RoomAndUsersColumn from "./room-and-users"; // Add this
import SendMessage from "./send-message";
import MessagesReceived from "./messages";
import socket from "../../utils/Utils"; // Add this
import SideBar from "./sideBar";
import { AppContext } from "../../context/state";
import { useContext } from "react";
const PrivateChat = ({ nickname, room }) => {
  // Add this -- our server will run on port 4000, so we connect to it from here
  
  console.log("Chat page    ", nickname, "    ", room);
  const {target, setTarget} = useContext(AppContext)
  return (
    <div
      className={styles.chatContainer}
      style={{ backgroundColor: "#E6E3D8" }}
    >
      <RoomAndUsersColumn socket={socket} username={nickname} room={target} />

      <div>
        <MessagesReceived socket={socket} />
        <SendMessage socket={socket} username={socket.id} room={target} />
      </div>
    </div>
  );
};

export default PrivateChat;
