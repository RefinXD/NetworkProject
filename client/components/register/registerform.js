import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import { createUser } from "../../services/userService";
import styles from "./styles.module.css";
import { useRouter } from "next/router";

export default function Register() {
  const [formData, setFormData] = useState({
    nickname: "",
    username: "",
    password: "",
    password2: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  //   const navigate = useNavigate();
  const router = useRouter();

  const { nickname, username, password, password2 } = formData;

  useEffect(() => {
    if (isError) {
      toast.error("Registration failed");
    }

    if (isSuccess) {
      toast.success("Registration successful");
      router.push("./login");
    }
  }, [isError, isSuccess]);

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoading(true);
    setIsError(false);
    setIsSuccess(false);

    try {
      const userData = {
        nickname,
        username,
        password,
      };
      // console.log("before function");
      const response = await createUser(userData);
      console.log("create user", response);
      setIsSuccess(true);
    } catch (error) {
      setIsError(true);
    }

    setIsLoading(false);
  };
  const handleRegister = async(e) =>{
    e.preventDefault();
    router.push('/register')
  }

  const handleLogin = async(e) =>{
    e.preventDefault();
    router.push('/login')
  }
  return (
    <>
      <div className= {styles.registerContainer}>
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
            <li
              onClick={handleLogin}
              style={{
                listStyle: "none",
                marginRight: "20px",
                cursor: "pointer",
              }}
            >
              <FaSignInAlt />
              <span style={{ marginLeft: "5px" }}>Login</span>
            </li>
            <li onClick={handleRegister} style={{ cursor: "pointer" }}>
              <FaUser />
              <span style={{ marginLeft: "5px" }}>Register</span>
            </li>
          </ul>
        </div>

        <div className="heading" style={{ textAlign: 'center', marginTop: '50px' }}>
              <h1>
                    <FaUser /> Register
                </h1>

                <p>Please create an account</p>
          </div>
        <section className={styles.form}>
          <form onSubmit={onSubmit}>
            <div className={styles.formGroup}>
              <input
                type="text"
                className={styles.formControl}
                id="nickname"
                name="nickname"
                value={nickname}
                onChange={onChange}
                placeholder="Enter Your Nickname"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <input
                type="text"
                className={styles.formControl}
                id="username"
                name="username"
                value={username}
                onChange={onChange}
                placeholder="Enter Your Username"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <input
                type="password"
                className={styles.formControl}
                id="password"
                name="password"
                value={password}
                onChange={onChange}
                placeholder="Enter Your Password"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <input
                type="password"
                className={styles.formControl}
                id="password2"
                name="password2"
                value={password2}
                onChange={onChange}
                placeholder="Confirm Your Password"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <button type="submit" className= {styles.btnBlock}>
                Submit
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}
