import React from "react";
import styles from "./styles.module.css";
function Room(props) {
  function handleClick() {
    props.onJoin(props.title);
  }

  return (
    <div className={styles.room}>
      <span>{props.title}</span>
      <button onClick={handleClick}>JOIN</button>
    </div>
  );
}

export default Room;
