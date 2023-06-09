import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import socket from "../../utils/Utils";
import { AppContext } from "../../context/state";
import { useContext } from "react";

const SideBar = () => {
  const [availableUser, SetAvailableUser] = useState([]);
  const [currentChatUser, SetCurrentChatUser] = useState("");
  const { target, setTarget } = useContext(AppContext);
  const userDetail= JSON.parse(localStorage.getItem("user"));
  //console.log("roomAnduser",socket,"  ",nicknameTitle,"    ",usernameTitle);
  function test(sender, receiver) {
    const userDetail= JSON.parse(localStorage.getItem("user"));
    SetCurrentChatUser(receiver);
    console.log("ไอสัส")
    setTarget(receiver);
    console.log(userDetail);
    socket.emit("changeUser");
    socket.emit("user_join_dm", sender, receiver);
  }
  useEffect(() => {
    const userDetail= localStorage.getItem("user");
    socket.emit("updateUsernames", userDetail);
    socket.on("online_users", (data) => {
      console.log(data);
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
          <div classname={styles.userChatList} key={user._id}>
            {user.nickname}{" "}
            <button
              className={styles.chatButton } onClick={()=>test( userDetail.nickname, user.nickname)}
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
