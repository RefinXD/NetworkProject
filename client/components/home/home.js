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
  const [results, setResults] = useState({});

  useEffect(() => {
    const userDetail = localStorage.getItem("user");
    socket.connect();
    socket.emit("updateUsernames", userDetail);
    console.log(userDetail);
    socket.on("available_rooms", (data) => {
      let roomList = [];

      data.forEach((element) => {
        roomList.push({ title: element.roomname });
      });
      setRooms(roomList);
    });
    if (userDetail) {
      setUserDetail(JSON.parse(userDetail));
      setIsLoggedIn(true);
    }
  }, []);

  const handleSearch = async () => {
    const response = await getAllRoomWithName(roomSearch.name);
    setResults(response.data);
    console.log(results)
  };

  const onSearch = (event) => {
    setRoomSearch({ name: event.target.value });
    handleSearch();
    // console.log(roomSearch.name);
    // const res = await getAllRoomWithName(roomSearch.name);
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
    console.log("newroom", newRoom.title);
    await createRoom({ roomname: newRoom.title });
    setRooms((prevRooms) => {
      return [...prevRooms, newRoom];
    });
    socket.emit("test", rooms);
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
        </div>
      </div>
    </>
  );
};

export default Home;
