import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../../ApiUrl/AxiosInstance";
import { admin_end } from "../../../ApiUrl/ApiUrl";
import { useForm } from "react-hook-form";
import "../Admin/AdminLog.css"

const AdminLog = () => {
    const [errorMessage, setErrorMessage] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navitocreate=useNavigate();

  const submitHandler = async (data) => {
    setErrorMessage(""); 

    try {
      const response = await axiosInstance.get(admin_end);
      const admin = response.data.find((admin) => admin.email === data.email);

      if (!admin) {
        setErrorMessage("Admin not found");
        alert("admin not founded contact who create this")
      } else {
        console.log("Admin authenticated successfully");
        navitocreate("/addbook")
        
      }
    } catch (error) {
      console.error("Error fetching admin data:", error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="log-bodyss">
      <div className="wrapperrr">
        <div className="form-container sign-in">
          <form onSubmit={handleSubmit(submitHandler)} className="logform">
            <h2 className="htwoss">Admin Only</h2>
            <div className="form-groupss">
              <div className="input-iconss">
                <input
                className="input-two"
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email"
                  {...register("email", {
                    required: { value: true, message: "Email is required" },
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
                className="input-two"
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
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <div className="forget-pass">
              <a href="/forgot-password">Forgot password?</a>
            </div>
            <button type="submit" className=" btnsss">
              Login
            </button>
            <div className="link">
              <p>
                Not an admin register as user!
                <Link to={"/reg"}> Go To Registration</Link>
                
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLog;
