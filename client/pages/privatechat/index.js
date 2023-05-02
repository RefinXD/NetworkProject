import NavBar from "../../components/layout/navBar";
import PrivateChat from "../../components/privatechat/chat";
import SideBar from "../../components/privatechat/sideBar";
import AppWrapper from "../../context/state";
import socket from "../../utils/Utils";
const Page  = () => {
  return (
  <>
    <AppWrapper>
    <NavBar/>
    <h1>Private Chat</h1>
    <SideBar/>
    <PrivateChat sender = {socket.id} target = {""}/>
    </AppWrapper>
  </>
  );
}

export default Page
