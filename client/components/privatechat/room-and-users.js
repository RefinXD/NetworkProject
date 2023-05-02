import styles from './styles.module.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/router'

const RoomAndUsers = ({ socket, username, room }) => {
  const [roomUsers, setRoomUsers] = useState([]);
  console.log("roomAnduser",username,"  ",room,"    ",socket);
  // const navigate = useNavigate();
  const router = useRouter();

  useEffect(() => {
    socket.on('chatroom_users', (data) => {
      console.log(data);
      setRoomUsers(data);
    });

    return () => socket.off('chatroom_users');
  }, [socket]);

  return (
    <div className={styles.roomAndUsersColumn}>
      <h2 className={styles.roomTitle}>{room}</h2>

      <div>
        {roomUsers.length > 0 && <h5 className={styles.usersTitle}>Users:</h5>}
        <ul className={styles.usersList}>
          {roomUsers.map((user) => (
            <li
              style={{
                fontWeight: `${user.username === username ? 'bold' : 'normal'}`,
              }}
              key={user.id}
            >
              {user.username}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default RoomAndUsers;