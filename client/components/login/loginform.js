import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../services/userService";
import { useRouter } from "next/router";
import { Link, Router } from "react-router-dom";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const router = useRouter();

  // useEffect(() => {
  //   //redirect when logged in
  //   if (localStorage.getItem("user")) {
  //     router.push('/')
  //   }
  // });

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleRegister = async(e) =>{
    e.preventDefault();
    router.push('/register')
  }

  const handleLogin = async(e) =>{
    e.preventDefault();
    router.push('/login')
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await userLogin(username,password);
      console.log(response.data);
  
      localStorage.setItem("user", JSON.stringify(response.data));

      console.log(localStorage.getItem("user"));
      router.push('/home')

    } catch (error) {
      console.log(error);
      window.alert(error);
    }


    //save the user data in local storage
    // localStorage.setItem("user", JSON.stringify(response.data));
  };

  return (
    <>
    <header className="header">
      <div className="projectName">
        {/* <Link to="/">Chit Chat</Link> */}
      </div>
      <ul>
        <li onClick={handleLogin}>  
            <FaSignInAlt />
            Login
        </li>
        <li onClick={handleRegister}>
            <FaUser />
            Register
        </li>
      </ul>
    </header>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Please login to get support</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={username}
              onChange={onChange}
              placeholder="Enter Your username"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="Enter Your password"
              required
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block">Submit</button>
          </div>
          <div
           style={{ alignSelf: "center", fontSize: "0.8rem", marginTop: "0.5rem" }}
      >   
        <label style={{ color: "gray" }}>Don&apos;t have an account? </label>
        <div>

        </div>
      </div>
        </form>
      </section>
    </>
  );
}

export default Login;