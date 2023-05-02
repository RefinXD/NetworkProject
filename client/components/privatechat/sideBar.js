import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import socket from "../../utils/Utils";
import { AppContext } from "../../context/state";
import { useContext } from "react";
import { useRouter } from "next/router";

const SideBar = () => {
  const [availableUser, SetAvailableUser] = useState([]);
  //console.log("roomAnduser",socket,"  ",nicknameTitle,"    ",usernameTitle);
  const userDetail = JSON.parse(localStorage.getItem("user"));


  const router = useRouter();
  // function test(sender,receiver){
  //   SetCurrentChatUser(receiver)
  //   setTarget(receiver);
  //   console.log(userDetail)
  //   let user = userDetail.nickname;
  //   socket.emit("changeUser");
  //   socket.emit("user_join_dm",sender,receiver)
  // }
  useEffect(() => {
    
    socket.emit("updateUsernames",userDetail)
    console.log("asdasdsadasd",userDetail)
    socket.on("online_users", (data) => {

        console.log("ewqrwer",data)
        SetAvailableUser([])
        SetAvailableUser(data);
    });
  }

, []);

async function startChat() {
 
  if(userDetail.id > user.id){
    const uniqueroom = userDetail.id + user.id
  }else{
    const uniqueroom =   user.id + userDetail.id
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
          // <div key={user._id}>{user.nickname} <button onClick={test.bind(this,userDetail.nickname,user.nickname)}>chat</button>
          // </div>
          <div key={user.id}>{user.nickname} 
          <button onClick={startChat}>chat</button>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default SideBar;
