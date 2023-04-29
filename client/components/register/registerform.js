import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import { createUser } from "../../services/userService";
import './styles.module.css';
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
      router.push('./home')
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
      console.log("before function")
      const response = await createUser(userData)
      console.log("create user",response)
      setIsSuccess(true);
    } catch (error) {
      setIsError(true);
    }

    setIsLoading(false);
  };

  return (
    <>
    <div className="registerContainer">
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>

        <p>Please create an account</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="nickname"
              name="nickname"
              value={nickname}
              onChange={onChange}
              placeholder="Enter Your Nickname"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={username}
              onChange={onChange}
              placeholder="Enter Your Username"
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
              placeholder="Enter Your Password"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password2"
              name="password2"
              value={password2}
              onChange={onChange}
              placeholder="Confirm Your Password"
              required
            />
          </div>
        
          <div className="form-group">
                <button type="submit" className="btn btn-block">Submit</button>
            </div>
          
        </form>
            </section>
            </div>
        </>
    );
}