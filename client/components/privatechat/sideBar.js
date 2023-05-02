import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import socket from "../../utils/Utils";

const SideBar = () => {
  const [availableUser, SetAvailableUser] = useState([]);
  const [currentChatUser, SetCurrentChatUser] = useState("");
  
  //console.log("roomAnduser",socket,"  ",nicknameTitle,"    ",usernameTitle);
  const router = useRouter();
  
  function test(username,socket_id){
    SetCurrentChatUser(username)
    console.log(availableUser)
    socket.emit("user_join_dm",socket_id)
  }
  useEffect(() => {
    const userDetail = localStorage.getItem("user");
    socket.emit("updateUsernames",userDetail)
    socket.on("online_users", (data) => {
        console.log(data)
        SetAvailableUser([])
        SetAvailableUser(data);
    });

    
    return () => socket.off("online_users");
  }, []);

  //console.log("roomuser",roomUsers);
  // const leaveRoom = () => {
  //   const __createdtime__ = Date.now();
  //   socket.emit('leave_room', { username, room, __createdtime__ });
  //   router.push('/')
  // };
  
  return (
    <div className={styles.roomAndUsersColumn}>
      {/* <h1 className={styles.usernameTitle}>{usernameTitle}</h1> */}
      {/* <h2 className={styles.nicknameTitle}>{nicknameTitle}</h2> */}

      <div className={styles.ListofOnlineUser}>
        {availableUser.map((user) => (
          <div key={user._id}>{user.nickname} <button onClick={test.bind(this,user.nickname,user._id)}>chat</button></div>
        ))}
      </div>

      <div id="currentUser">
        Currently chatting with {currentChatUser}
      </div>
    </div>
  );
};

export default SideBar;
