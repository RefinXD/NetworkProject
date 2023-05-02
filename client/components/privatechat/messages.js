import styles from './styles.module.css';
import { useState, useEffect, useRef } from 'react';
import socket from '../../utils/Utils';
import { AppContext } from "../../context/state";
import { useContext } from "react";


const Messages = ({ socket }) => {
  const {target, setTarget} = useContext(AppContext)
  const [messagesRecieved, setMessagesReceived] = useState([]);
  const messagesColumnRef = useRef(null); // Add this
  console.log("testtest01")
  const userDetail = JSON.parse(localStorage.getItem("user"));
  // Runs whenever a socket event is recieved from the server
  useEffect(() => {
    


    socket.on('clear',() =>{
        setMessagesReceived([])
    })
    socket.on('receive_dm', (data) => {
      console.log(data);
      console.log(target)
      if(data.username === target)
        setMessagesReceived((state) => [
          ...state,
          {
            message: data.message,
            username: data.username,
            __createdtime__: data.__createdtime__,
          },
        ]);
      }
    
    );
    socket.on('echo_dm', (data) => {
      console.log("echo")
      console.log(data);
      if(userDetail.nickname == data.username)
        setMessagesReceived((state) => [
          ...state,
          {
            message: data.message,
            username: data.username,
            __createdtime__: data.__createdtime__,
          },
        ]);
      
    });


    // Remove event listener on component unmount
    return () => socket.off('receive_dm');
  }, [socket]);

  // Add this

  // Add this
  // Scroll to the most recent message
  useEffect(() => {
    messagesColumnRef.current.scrollTop =
      messagesColumnRef.current.scrollHeight;
  }, [messagesRecieved]);

  // Add this
  function sortMessagesByDate(messages) {
    return messages.sort(
      (a, b) => parseInt(a.__createdtime__) - parseInt(b.__createdtime__)
    );
  }

  // dd/mm/yyyy, hh:mm:ss
  function formatDateFromTimestamp(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleString();
  }

  return (
    // Add ref to this div
    <div className={styles.messagesColumn} ref={messagesColumnRef}>
      {messagesRecieved.map((msg, i) => (
        <div className={styles.message} key={i}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span className={styles.msgMeta}>{msg.username}</span>
            <span className={styles.msgMeta}>
              {formatDateFromTimestamp(msg.__createdtime__)}
            </span>
          </div>
          <p className={styles.msgText}>{msg.message}</p>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Messages;