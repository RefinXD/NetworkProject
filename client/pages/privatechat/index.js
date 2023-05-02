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
        <h2>Private Chat</h2>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ flexBasis: "25%" }}>
            <SideBar />
          </div>
          <div style={{ flexBasis: "75%" }}>
          {/* <PrivateChat sender={""} target={""} /> */}
          </div>
        </div>
      </AppWrapper>
    </>
  );
};

export default Page;
