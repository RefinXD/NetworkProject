import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRouter } from "next/router";

const RoomAndUsers = ({ socket, nicknameTitle, usernameTitle }) => {
  const [roomUsers, setRoomUsers] = useState([]);
  // console.log("roomAnduser",username,"  ",room,"    ",socket);
  const router = useRouter();

  useEffect(() => {
    socket.on("online_users", (data) => {
      console.log(data);
      setRoomUsers(data);
    });

    return () => socket.off("online_users");
  }, [socket]);

  // const leaveRoom = () => {
  //   const __createdtime__ = Date.now();
  //   socket.emit('leave_room', { username, room, __createdtime__ });
  //   router.push('/')
  // };

  return (
    <div className={styles.roomAndUsersColumn}>

<h1 className={styles.usernameTitle}>{usernameTitle}</h1>
<h2 className={styles.nicknameTitle}>{nicknameTitle}</h2>

      <div>
        {roomUsers.length > 0 && <h5 className={styles.ListofOnlineUser}>Users:</h5>}
        <ul className={styles.usersList}>
          {roomUsers.map((user) => (
            <li
              style={{
                fontWeight: `${user.username === username ? "bold" : "normal"}`,
              }}
              key={user.id}
            >
              {user.username}
            </li>
          ))}
        </ul>
      </div>

      {/* <button className='btn btn-outline' onClick={leaveRoom}>
        Leave
      </button> */}
    </div>
  );
};

export default RoomAndUsers;
