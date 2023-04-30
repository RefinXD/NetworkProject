import styles from "./styles.module.css";
import { useRouter } from 'next/router'
import { useState ,useEffect} from 'react';
import socket from '../../utils/Utils';
const Home = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [userDetail,setUserDetail] = useState({});
  const [room, setRoom] = useState('');

  useEffect(() => {
    const userDetail = localStorage.getItem('user');
    if (userDetail) {
      setUserDetail(JSON.parse(userDetail));
    }
  }, []);

  const joinRoom = () => {
    if (room !== "" && userDetail.nickname !== "") {
      console.log('test2', room)
      socket.emit("test","lmao")
      setRoom(room); // set the value of the room state variable
      router.push({
        pathname: `/chat`,
        query: { username: userDetail.nickname, room: room},
      });
          }
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>{`<>DevRooms</>`}</h1>
        <h2>{userDetail.nickname}</h2>
        <select
          className={styles.input}
          onChange={(e) => setRoom(e.target.value)}
        >
          <option>-- Select Room --</option>
          <option value="javascript">JavaScript</option>
          <option value="node">Node</option>
          <option value="express">Express</option>
          <option value="react">React</option>
        </select>

        <button
          className="btn btn-secondary"
          style={{ width: "100%" }}
          onClick={joinRoom}
        >
          Join Room
        </button>
      </div>
    </div>
  );
};

export default Home;
