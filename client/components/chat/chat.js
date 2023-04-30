import styles from './styles.module.css';
import RoomAndUsersColumn from './room-and-users'; // Add this
import SendMessage from './send-message';
import MessagesReceived from './messages';
import socket from '../../utils/Utils'; // Add this


const Chat = ({ nickname, room}) => { // Add this -- our server will run on port 4000, so we connect to it from here
  socket.emit("join_room", { username:nickname, room });
  console.log("Chat page    ",nickname,"    ",room )
  return (
    <div className={styles.chatContainer} style={{backgroundColor: '#E6E3D8'}}  >
      
      <RoomAndUsersColumn socket={socket} username={nickname} room={room} />

      <div>
        <MessagesReceived socket={socket} />
        <SendMessage socket={socket} username={nickname} room={room} />
      </div>
    </div>
  );
};

export default Chat;