import { useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
export default function Login() {
  let navigate = useNavigate();
  const [cred, setcred] = useState({ email: "", password: "" });

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify({ email: cred.email, password: cred.password }));
    try {
      const response = await fetch(
        "https://foodify-backend-lime.vercel.app/api/loginuser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: cred.email, password: cred.password }),
        }
      );

      const json = await response.json();
      console.log(json);

      if (json.success) {
        alert("User logged in successfully");
        localStorage.setItem("userEmail", cred.email);
        localStorage.setItem("authToken", json.authToken);
        console.log(localStorage.getItem("authToken"));
        navigate("/");
      } else {
        alert("Failed to to login , enter correct credentials.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Failed to fetch. Please check the console for more details.");
    }
  };

  const changer = (event) => {
    setcred({ ...cred, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={cred.email}
              onChange={changer}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={cred.password}
              onChange={changer}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <Link to="/Signup" className="m-3 btn btn-danger">
            New user ?
          </Link>
        </form>
      </div>
    </>
  );
}
