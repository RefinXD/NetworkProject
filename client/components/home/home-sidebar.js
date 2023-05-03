import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { getFriendsNameById } from "../../services/userService";

const RoomAndUsers = ({ socket, nicknameTitle, usernameTitle }) => {
  const [roomUsers, setRoomUsers] = useState([]);
  const [followings, setFollowings] = useState([]);

  //console.log("roomAnduser",socket,"  ",nicknameTitle,"    ",usernameTitle);
  const router = useRouter();

  useEffect(() => {
    socket.emit("test", roomUsers);
    socket.on("online_users", (data) => {
      console.log(data)
      setRoomUsers(data);
    });
  });



  async function handleGetFriend(event) {
    try {
      const userDetail = JSON.parse(localStorage.getItem("user"));
      console.log("detail of user",userDetail);
      const friend = await getFriendsNameById(userDetail._id);
      console.log("all friend", friend.data);
      setFollowings(friend.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    handleGetFriend(); // move the function call inside useEffect
  }, []); // add an empty dependency array to only run once on mount
  


  return (
    <div className={styles.roomAndUsersColumn}>
      <h2 className={styles.nicknameTitle}>Hello, {nicknameTitle}</h2>
      <h3 className={styles.usernameTitle}>@{usernameTitle}</h3>
      <div>
          <h5>Online user</h5>
          <ul className={styles.ListofOnlineUser}>
            {roomUsers.map((user) => (
              <li key={user._id}>{user.nickname}</li>
            ))}
          </ul>
      </div>
      <div>
      <h5>Friends</h5>
      <ul className={styles.ListofFollowingUser}>
        {followings.map((following) => {
          const isActive = roomUsers.some((user) => user.nickname === following);
          const statusClass = isActive ? styles.active : styles.inactive;
          {/* console.log("eeeeee",following) */}
          return (
            <li key={following} className={statusClass} >
              {following}
            </li>
          );
        })}
      </ul>
      {/* <ul className={styles.ListofFollowingUser}>
        {followings.map((following) => {
          const isActive = roomUsers.some((user) => user.nickname === following.nickname);
          const statusClass = isActive ? styles.active : styles.inactive;
          console.log(following)
          return (
            <li key={following.id} className={styles.statusClass} >
              {following.nickname}
            </li>
          );
        })}
      </ul> */}
    </div>
    </div>
  );
};

export default RoomAndUsers;