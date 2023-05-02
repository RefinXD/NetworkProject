import styles from "./styles.module.css";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import RoomAndUsersColumn from "./home-sidebar"; // Add this
import socket from "../../utils/Utils";
import RoomComponent from "./room-component";
import Room from "./room";
import NavBar from "../layout/navBar";

import { createRoom, getAllRoomWithName } from "../../services/roomService";

const Home = () => {
  const router = useRouter();
  const [userDetail, setUserDetail] = useState({});
  const [rooms, setRooms] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [roomSearch, setRoomSearch] = useState({
    name: "",
  });
  useEffect(() => {
    const userDetail = localStorage.getItem("user");
    searchRoom();
    socket.connect();
    socket.emit("updateUsernames", userDetail);
    //console.log(userDetail);
    if (userDetail) {
      setUserDetail(JSON.parse(userDetail));
      setIsLoggedIn(true);
    }
  }, []);

  const onSearch = (event) => {
    setRoomSearch({ name: event.target.value });
  };

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
    await createRoom({ roomname: newRoom.title });
    searchRoom();
    socket.emit("test", rooms);
  }

  async function searchRoom(event) {
    if (roomSearch.title !== "") {
      const res = await getAllRoomWithName({ roomname: roomSearch.name });
      let roomList = [];
      res.data.forEach((element) => {
        roomList.push({ title: element.roomname });
      });
      setRooms(roomList);
      console.log(res.data);
    }
  }
  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} />
      <div className={styles.container}>
        <div className={styles.sidebarContainer}>
          <RoomAndUsersColumn
            socket={socket}
            nicknameTitle={userDetail.nickname}
            usernameTitle={userDetail.username}
          />
        </div>
        <div className={styles.formContainer}>
          <h1>{`ChitChat`}</h1>
          <h2>HELLO !! {userDetail.nickname}</h2>
          <input
            className={styles.messageInput}
            name="search"
            onChange={onSearch}
            value={roomSearch.name}
            placeholder="search room"
          />
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

          <button className={styles.addButton} onClick={searchRoom}>
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
