import styles from "./styles.module.css";
import RoomAndUsersColumn from "./room-and-users"; // Add this
import SendMessage from "./send-message";
import MessagesReceived from "./messages";
import socket from "../../utils/Utils"; // Add this
import SideBar from "./sideBar";
import { AppContext } from "../../context/state";
import { useContext } from "react";
import { useState, useEffect } from "react";
import {
  getFriendsById,
  getUserByNickname,
  addFriendById,
} from "../../services/userService";

const PrivateChat = ({ nickname, room }) => {
  // Add this -- our server will run on port 4000, so we connect to it from here
  console.log("Chat page    ", nickname, "    ", room);
  const { target, setTarget } = useContext(AppContext);
  const [userDetail, setUserDetail] = useState({});
  const [isFriend, setIsFriend] = useState(true);
  console.log(target);
  useEffect(() => {
    const userDetail = localStorage.getItem("user");
    if (userDetail) {
      setUserDetail(JSON.parse(userDetail));
    }
  }, []);
  // console.log("privatechat", userDetail._id);
  const checkIsFriend = async () => {
    const userFriends = await getFriendsById(userDetail._id);
    // console.log("userFriends", friendlists.data);
    const friendlist = userFriends.data;
    const res = await getUserByNickname(target);
    console.log(res.data._id);
    if (friendlist.includes(res.data._id)) {
      setIsFriend(true);
    } else {
      setIsFriend(false);
    }
  };
  const handleAddFriend = async () => {
    const r = await getFriendsById(userDetail._id);
    console.log(r);
    const res = await getUserByNickname(target);
    const addFriend = await addFriendById(
      userDetail._id.toString(),
      res.data._id.toString()
    );
    console.log(addFriend);
    setIsFriend(true);
  };
  useEffect(() => {}, [isFriend]);

  checkIsFriend();
  console.log(isFriend);

  return (
    <div
      // className={styles.chatContainer}
      style={{ backgroundColor: "#E6E3D8" }}
    >
      {/* <RoomAndUsersColumn socket={socket} username={nickname} room={target} /> */}

      <div className="">
        <div className={styles.chatHeader}>
          <div className={styles.chatName}>{target}</div>
          <div className={styles.addFriend}>
            {!isFriend ? (
              <button onClick={handleAddFriend}>Follow</button>
            ) : (
              <div>Following</div>
            )}
          </div>
        </div>

        <MessagesReceived socket={socket} />
        <SendMessage socket={socket} username={socket.id} room={target} />
      </div>
    </div>
  );
};

export default PrivateChat;
