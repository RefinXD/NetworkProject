import React from "react";

function Room(props) {
  function handleClick() {
    props.onJoin(props.title);
  }

  return (
    <div className="room">
      <span>{props.title}</span>
      <button onClick={handleClick}>JOIN</button>
    </div>
  );
}

export default Room;
