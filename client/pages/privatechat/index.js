import NavBar from "../../components/layout/navBar";
import PrivateChat from "../../components/privatechat/chat";
import SideBar from "../../components/privatechat/sideBar";
import AppWrapper from "../../context/state";
import socket from "../../utils/Utils";

const Page = () => {
  return (
    <>
      <AppWrapper>
        <NavBar />
        <h1>Private Chat</h1>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ flexBasis: "25%" }}>
            <SideBar />
          </div>
          <div style={{ flexBasis: "75%" }}>
            <PrivateChat sender={socket.id} target={""} />
          </div>
        </div>
      </AppWrapper>
    </>
  );
};

export default Page;
