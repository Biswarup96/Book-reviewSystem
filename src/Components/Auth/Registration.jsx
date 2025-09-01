import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { stu_end } from "../../ApiUrl/ApiUrl";
import axiosInstance from "../../ApiUrl/AxiosInstance";
import "../../Components/Auth/Registration.css";
import TitleTypeOne from "../../UI/TitleTypeOne/TitleTypeOne";
import TitleTypeTwo from "../../UI/TitleTypeTwo/TitleTypeTwo";



const Registration = () => {
  let api = stu_end;

  let navigation = useNavigate();

  const form = useForm();

  const { register, handleSubmit, formState } = form;

  const { errors } = formState;

  const submitHandler = async (e) => {
    try {
      const response = await axiosInstance.get(api);
      const existingUser = response.data.find((user) => user.email === e.email);

      if (existingUser) {
        alert("Email already exists. Please use a different email.");
        return;
      }

      // If email doesn't exist, prepare form data
      const formdata = {
        name: e.name,
        email: e.email,
        date: e.date,
        gender: e.gender,
        password: e.password,
      };

      // Send data to the server
      const postResponse = await axiosInstance.post(api, formdata);
      console.log("Registration successful:", postResponse.data);
      alert("Registration successful!");
      navigation("/log");
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred while submitting the form. Please try again.");
    }
  };
  return (
    <div className="reg-bodys">
      <div className="wrappers">
        <div className="form-containers register-forms">
          <form className="regforms" onSubmit={handleSubmit(submitHandler)}>
          <TitleTypeTwo Title={"Registration"} className="bestselltitle"/>
            <div className="form-groups">
              <div className="input-icons">
                <input
                  type="text"
                  name="name"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "enter your name",
                    },
                    minLength: {
                      value: 4,
                      message: "length should be greater than 4",
                    },
                  })}
                  required
                  placeholder="Enter your name"
                  aria-label="Name"
                />
              </div>
            </div>

            <div className="form-groups">
              <div className="input-icons">
                <input
                  type="email"
                  name="email"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "* email is required",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "*wrong pattern",
                    },
                  })}
                  required
                  placeholder="Enter your email"
                  aria-label="Email"
                />
              </div>
            </div>

            <div className="form-groups">
              <div className="input-icons">
                <input
                  type="date"
                  name="date"
                  {...register("date", {
                    required: "Date of Birth is required",
                    validate: {
                      validDate: (value) =>
                        !isNaN(new Date(value)) || "Invalid date format",
                      adult: (value) => {
                        const today = new Date();
                        const dob = new Date(value);
                        const age = today.getFullYear() - dob.getFullYear();
                        const monthDiff = today.getMonth() - dob.getMonth();
                        const dayDiff = today.getDate() - dob.getDate();

                        if (
                          age > 18 ||
                          (age === 18 &&
                            (monthDiff > 0 ||
                              (monthDiff === 0 && dayDiff >= 0)))
                        ) {
                          return true;
                        }
                        return "You must be at least 18 years old";
                      },
                    },
                  })}
                  required
                  placeholder="Enter your age"
                  aria-label="Age"
                />
                {errors.date && (
                  <p style={{ color: "red" }}>{errors.date.message}</p>
                )}
              </div>
            </div>

            <div className="form-groups">
              <div className="input-icons">
                <select
                  required
                  aria-label="Gender"
                  name="gender"
                  {...register("gender", {
                    required: "Gender is required", // Validation rule
                  })}
                >
                  <option value="">Select your gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {errors.gender && (
                  <p style={{ color: "red" }}>{errors.gender.message}</p>
                )}
              </div>
            </div>

            <div className="form-groups">
              <div className="input-icons">
                <input
                  type="password"
                  name="password"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "*password is required",
                    },
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      message: "* wrong pattern",
                    },
                  })}
                  required
                  placeholder="Enter your password"
                  aria-label="Password"
                />
                <p>{errors.password?.message}</p>
              </div>
            </div>

            <button type="submit" className="regbutton">Register</button>

            <div className="links">
              <p>
                Already have an account?{" "}
                <Link to={"/login"}>Login</Link>
                
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
