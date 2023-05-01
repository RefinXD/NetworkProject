import React from "react";
import styles from "./styles.module.css";
function Room(props) {
  function handleClick() {
    props.onJoin(props.title);
  }

  return (
    
    <div >
      <span className={styles.roomName}>{props.title}</span>
      
      <button className={styles.joinButton} onClick={handleClick}>JOIN</button>
      </div>
  );
}

export default Room;
