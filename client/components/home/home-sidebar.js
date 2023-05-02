import styles from "./styles.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

const RoomAndUsers = ({ socket, nicknameTitle, usernameTitle }) => {
  const [roomUsers, setRoomUsers] = useState([]);
  //console.log("roomAnduser",socket,"  ",nicknameTitle,"    ",usernameTitle);
  const router = useRouter();

  useEffect(() => {
    socket.emit("test", roomUsers);

    socket.on("online_users", (data) => {
      console.log("km;")
      setRoomUsers(data);
    });
  });

  //console.log("roomuser",roomUsers);
  // const leaveRoom = () => {
  //   const __createdtime__ = Date.now();
  //   socket.emit('leave_room', { username, room, __createdtime__ });
  //   router.push('/')
  // };
  const handleLogout = async () => {
    const swal = await Swal.fire({
      title: "",
      text: "Are you sure you want to log out ?",
      icon: "warning",
      showCancelButton: true,
      focusCancel: true,
      cancelButtonText: "Cancel",
      confirmButtonText: "Yes",
    });
    if (swal.isConfirmed) {
      await router.push("/login");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("token_expires");
      socket.emit("logout", nicknameTitle);
    }
  };
  return (
    <div className={styles.roomAndUsersColumn}>
      <h1 className={styles.usernameTitle}>{usernameTitle}</h1>
      <h2 className={styles.nicknameTitle}>{nicknameTitle}</h2>

      <ul className={styles.ListofOnlineUser}>
        {roomUsers.map((user) => (
          <li key={user.id}>{user.nickname}</li>
        ))}
      </ul>

      <button className={styles.logoutButton} onClick={handleLogout}>
        logout
      </button>
    </div>
  );
};

export default RoomAndUsers;
