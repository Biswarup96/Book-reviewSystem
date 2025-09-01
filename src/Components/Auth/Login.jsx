import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { stu_end } from "../../ApiUrl/ApiUrl";
import "../Auth/Login.css";

import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../ApiUrl/AxiosInstance";
import TitleTypeOne from "../../UI/TitleTypeOne/TitleTypeOne";

const Login = () => {
  let navigate = useNavigate();
  let regnavigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = async (data) => {
    setErrorMessage("");
    try {
      const response = await axiosInstance.get(stu_end);
      const user = response.data.find((user) => user.email === data.email);

      if (!user) {
        setErrorMessage("User not found");
        alert("user not exists", data.email);
        regnavigate("/");
      } else {
        console.log("User found:", user);
        sessionStorage.setItem("user_id", user.id);

        navigate("/");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };
  return (
    <div className="log-body">
      <div className="wrapper">
        <div className="form-container sign-in">
          <form onSubmit={handleSubmit(submitHandler)} className="logform">
            <TitleTypeOne
              
              Title={"Log-In"}
              className={"popularbooks-title"}
            />
            <div className="form-group">
              <div className="input-icon">
                <input
                  className="input1"
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email"
                  {...register("email", {
                    required: { value: true, message: "Enter your email" },
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email format",
                    },
                  })}
                />
                {errors.email && (
                  <p className="error-message">{errors.email.message}</p>
                )}
              </div>
            </div>
            <div className="form-group">
              <div className="input-icon">
                <input
                  className="input1"
                  type="password"
                  placeholder="Enter your password"
                  aria-label="Password"
                  {...register("password", {
                    required: { value: true, message: "Password is required" },
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      message:
                        "Password must include uppercase, lowercase, number, and special character",
                    },
                  })}
                />
              </div>
              {errors.password && (
                <p className="error-message">{errors.password.message}</p>
              )}
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}{" "}
            <div className="forget-pass">
              <a href="/forgot-password">Forgot password?</a>
            </div>
            <button type="submit" className="btnsss">
              Login
            </button>
            <div className="link">
              <p className="para">
                Don't have an account? <Link to={"/reg"}>Registration</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
