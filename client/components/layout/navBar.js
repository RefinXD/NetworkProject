import React, { useState, useEffect } from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser ,FaUsers,FaRegComment} from "react-icons/fa";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

export default function NavBar() {

  const router = useRouter();
  const handleChat = async(e) =>{
    e.preventDefault();
    router.push('/privatechat')
  }

  const handleGroupChat = async(e) =>{
    e.preventDefault();
    router.push('/home')
  }

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
    }
  };

  return (
    <>
       
          <div
          className="header"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#333",
            padding: "20px",
            color: "#fff",
            flexflow: "row",
          }}
        >
          <div className="projectName" style={{ fontSize: "2rem" }}>
            Chit Chat
          </div>
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              listStyle: "none",
              margin: 0,
            }}
          >
           
            <li onClick={handleChat}  style={{
                listStyle: "none",
                marginRight: "30px",
                cursor: "pointer",
              }}>
              <FaRegComment />
              <span style={{ marginLeft: "5px" }}>Chat</span>
            </li>
            <li onClick={handleGroupChat}  style={{
                listStyle: "none",
                marginRight: "30px",
                cursor: "pointer",
              }}>
              <FaUsers />
              <span style={{ marginLeft: "5px" }}>Group Chat</span>
            </li> 
            <li
              onClick={handleLogout}
              style={{
                listStyle: "none",
                marginRight: "30px",
                cursor: "pointer",
              }}
            >
              <FaSignInAlt />
              <span style={{ marginLeft: "5px" }}>LogOut</span>
            </li>
          </ul>
        </div>
        
        
        
    </>
  );
}
