import styles from "./styles.module.css";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import RoomAndUsersColumn from "./home-sidebar"; // Add this
import socket from "../../utils/Utils";
import RoomComponent from "./room-component";
import Room from "./room";
import {createRoom} from "../../services/roomService";
const Home = () => {
  const router = useRouter();
  const [userDetail, setUserDetail] = useState({});
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const userDetail = localStorage.getItem("user");
    if (userDetail) {
      setUserDetail(JSON.parse(userDetail));
    }
  }, []);

  function joinRoom(title) {
    console.log("listroom", title);
    if (title !== "" && userDetail.nickname !== "") {
      console.log("test2", title);

      router.push({
        pathname: `/chat`,
        query: { username: userDetail.nickname, room: title },
      });
    }
  }
  async function addRoom(newRoom) {
    console.log("newroom", newRoom.title);
    await createRoom(newRoom.title);
    setRooms((prevRooms) => {
      return [...prevRooms, newRoom];
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.sidebarContainer}>
        <RoomAndUsersColumn
          socket={socket}
          nicknameTitle={userDetail.nickname}
          usernameTitle={userDetail.username}
        />
      </div>

      <div className={styles.formContainer}>
        <h1>{`<>DevRooms</>`}</h1>
        <h2>{userDetail.nickname}</h2>

        <div>
          <RoomComponent onAdd={addRoom} />
          {rooms.map((roomItem, index) => {
            return (
              <Room
                key={index}
                id={index}
                title={roomItem.title}
                onJoin={joinRoom}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
