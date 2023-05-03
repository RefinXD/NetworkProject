import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import socket from "../../utils/Utils";
import { AppContext } from "../../context/state";
import { useContext } from "react";

const SideBar = () => {
  const [availableUser, SetAvailableUser] = useState([]);
  const [currentChatUser, SetCurrentChatUser] = useState("");
  const { target, setTarget } = useContext(AppContext);
  //console.log("roomAnduser",socket,"  ",nicknameTitle,"    ",usernameTitle);
  const userDetail= JSON.parse(localStorage.getItem("user"));
 
  function test(sender, receiver) {
    SetCurrentChatUser(receiver);
    setTarget(receiver);
    console.log(userDetail);
    socket.emit("changeUser");
    socket.emit("user_join_dm", sender, receiver);
  }
  useEffect(() => {
    
    socket.emit("updateUsernames",userDetail)
    socket.on("online_users", (data) => {
      console.log(data);
      SetAvailableUser([]);
      SetAvailableUser(data);
    });
  }

, []);

async function startChat() {
  console.log(userDetail._id , user.id)
 
  if(userDetail._id> user.id){
    const uniqueroom =  userDetail._id + user.id
  }else{
    const uniqueroom =   user.id + userDetail._id
  } 
  await createDirectRoom({ roomname: uniqueroom});
  router.push({
    pathname: `/privatechat`,
    query: { username: userDetail.nickname, room: uniqueroom },
  });
}

  //console.log("roomuser",roomUsers);
  // const leaveRoom = () => {
  //   const __createdtime__ = Date.now();
  //   socket.emit('leave_room', { username, room, __createdtime__ });
  //   router.push('/')
  // };

  return (
    // <div className={styles.roomAndUsersColumn}>
    <div>
      {/* <h1 className={styles.usernameTitle}>{usernameTitle}</h1> */}
      {/* <h2 className={styles.nicknameTitle}>{nicknameTitle}</h2> */}
      {/* <div id="currentUser">
        Hello {userDetail.nickname}, you are currently chatting with {currentChatUser}
      </div>
       */}
      <div className={styles.ListofOnlineUser}>
        {availableUser.map((user) => (
          <div key={user._id}>
            {user.nickname}{" "}
            <button
              onClick={startChat}
            >
              chat
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
