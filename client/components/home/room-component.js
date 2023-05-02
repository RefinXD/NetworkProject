import React, { useState } from "react";
import styles from "./styles.module.css";
import { getAllRoomWithName } from "../../services/roomService";

function RoomComponent(props) {
  const [room, setRoom] = useState({
    title: "",
  });


  const onChange = (e) => {
    setRoom((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };


  function submitRoom(event) {
    if (room.title !== "") {
      props.onAdd(room);
      setRoom({
        title: "",
      });
    }
    event.preventDefault();
  }
  return (
    <div className={styles.formContainer}>
      <input
        className={styles.messageInput}
        name="title"
        onChange={onChange}
        value={room.title}
        placeholder="Title"
      />
      <div className={styles.addRight}>
        <button className={styles.addButton} onClick={submitRoom}>
          Add
        </button>
      </div>
    </div>
  );
}

export default RoomComponent;
