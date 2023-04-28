import logo from './logo.svg';
import './App.css';
import { useState } from 'react'; // Add this
import Home from './pages/home';
import Register from './pages/register';

import Chat from './pages/chat';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import io from 'socket.io-client'; // Add this
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../src/components/Header";
import Login from './pages/login';

const socket = io.connect('http://localhost:4000'); // Add this -- our server will run on port 4000, so we connect to it from here

function App() {
    // States for registration
    const [nickname, setNickname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  const [room, setRoom] = useState(''); // Add this

  return (
    <><Router>
      <div className='App container'>
        <Header />
        <Routes>
          <Route
            path='/'
            element={<Home
              username={username} // Add this
              setUsername={setUsername} // Add this
              room={room} // Add this
              setRoom={setRoom} // Add this
              socket={socket} // Add this
            />} />
            
            <Route
            path='/login'
            element={<Login/>} />

          <Route
            path='/register'
            element={<Register
              nickname={nickname}
              setNickname={setNickname}
              username={username} // Add this
              setUsername={setUsername} // Add this
              />} />

          <Route
            path='/home'
            element={<Home
              username={username} // Add this
              setUsername={setUsername} // Add this
              room={room} // Add this
              setRoom={setRoom} // Add this
              socket={socket} // Add this
            />} />
          <Route
            path='/chat'
            element={<Chat username={username} room={room} socket={socket} />} />

        </Routes>
      </div>
    </Router><ToastContainer />
    </>

  );
}

export default App;