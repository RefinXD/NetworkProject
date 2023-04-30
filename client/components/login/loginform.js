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
    <div className="header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#333', padding: '20px', color: '#fff',flexflow: 'row'}}>
      <div className="projectName" style={{ fontSize: '2rem'}}>
        Chit Chat
      </div>
  <ul style={{ display: 'flex', alignItems: 'center', listStyle: 'none', margin: 0}}>
    <li onClick={handleLogin} style={{ listStyle: 'none', marginRight: '20px', cursor: 'pointer'}}>  
      <FaSignInAlt />
      <span style={{ marginLeft: '5px'}}>Login</span>
    </li>
    <li onClick={handleRegister} style={{ cursor: 'pointer'}}>
      <FaUser />
      <span style={{ marginLeft: '5px'}}>Register</span>
    </li>
  </ul> 
</div>

  
    <div className="heading" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>
        <FaSignInAlt /> Login
      </h1>
      <p>Please login to get support</p>
    </div>
    <div className="form" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <form onSubmit={onSubmit} style={{ width: '100%', maxWidth: '400px' }}>
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
            style={{ width: '100%', padding: '10px', marginTop: '10px' }}
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
            style={{ width: '100%', padding: '10px', marginTop: '10px' }}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px', marginTop: '20px' }}>Submit</button>
        </div>
        <div style={{ alignSelf: 'center', fontSize: '0.8rem', marginTop: '0.5rem' }}>
          <label style={{ color: 'gray' }}>Don&apos;t have an account? </label>
          <span onClick={handleRegister} style={{ color: '#007bff', cursor: 'pointer' }}>Register here</span>
        </div>
      </form>
    </div>
  </>
  
  );
}

export default Login;