import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar';

export default function Signup() {

  const [cred, setcred] = useState({ name: "", email: "", password: "", location: "" })

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/createuser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: cred.name, email: cred.email, password: cred.password, location: cred.location }),
      });

      const json = await response.json();
      console.log(json);

      if (json.success) {
        alert("User created successfully");
      } else {
        alert("Failed to create user. Please check server logs for more details.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Failed to fetch. Please check the console for more details.");
    }
  };

  const changer = (event) => {
    setcred({ ...cred, [event.target.name]: event.target.value })
  }
  return (
    <>
      <Navbar />
      <div className='container'>
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" name='name' value={cred.name} onChange={changer} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" name='email' value={cred.email} onChange={changer} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" name='password' value={cred.password} onChange={changer} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Location</label>
            <input type="text" className="form-control" name='location' value={cred.location} onChange={changer} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to="/Login" className='m-3 btn btn-danger'>Already a user ?</Link>
        </form>
      </div>
    </>
  )
}
