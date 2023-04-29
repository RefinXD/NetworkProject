import styles from "./styles.module.css";
// import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/router'
import { useState } from 'react'; // Add this
// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:4000'); // Add this -- our server will run on port 4000, so we connect to it from here

const Home = () => {
//   const navigate = useNavigate();

  const router = useRouter();
  const [username, setUsername] = useState(''); // Add this
  const [room, setRoom] = useState('');

  const joinRoom = () => {
    if (room !== "" && username !== "") {
      socket.emit("join_room", { username, room });
    //   navigate('/chat', { replace: true }); // Add this
      router.push('/chat')
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>{`<>DevRooms</>`}</h1>

        <input
          className={styles.input}
          placeholder="Username..."
          onChange={(e) => setUsername(e.target.value)}
        />

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
          onClick={joinRoom} // Add this
        >
          Join Room
        </button>
      </div>
    </div>
  );
};

export default Home;
