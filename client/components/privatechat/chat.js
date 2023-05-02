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
  addFriendByFriendId,
} from "../../services/userService";

const PrivateChat = ({ nickname, room }) => {
  // Add this -- our server will run on port 4000, so we connect to it from here
  console.log("Chat page    ", nickname, "    ", room);
  const { target, setTarget } = useContext(AppContext);
  const [userDetail, setUserDetail] = useState({});
  const [isFriend, setIsFriend] = useState(true);
  console.log("nickname",room);

 
    console.log("nickname2",room);

  useEffect(() => {
    const userDetail = localStorage.getItem("user");   
    // Remove event listener on component unmount
    if (userDetail) {
      setUserDetail(JSON.parse(userDetail));
    }

  }, []);

 
  

//----------------------------------------
  const checkIsFriend = async () => {
    const userFriends = await getFriendsById(userDetail._id);
    // console.log("userFriends", friendlists.data);
    const friendlist = userFriends.data;
    const res = await getUserByNickname(target);
    console.log(res.data._id);
    if (friendlist.includes(res.data._id)) {
      setIsFriend(false);
    } else {
      setIsFriend(true);
    }
  };
  const handleAddFriend = async () => {
    const res = await getUserByNickname(target);
    const addFriend = await addFriendByFriendId(userDetail._id, res.data._id);
    console.log(addFriend);
  };

  //----------------------------------------

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
            {isFriend ? (
              <button onClick={handleAddFriend}>Add Friend</button>
            ) : (
              <div>Already friend</div>
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
