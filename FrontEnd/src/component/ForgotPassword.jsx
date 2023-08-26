import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'


function ForgotPassword() {
    const [email, setEmail] = useState()
    console.log(email);
    const navigate = useNavigate()

    // axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('ffffffff');
        axios.post('http://localhost:5000/forgot-password', {email})
        .then(res => {
          console.log(res);
          console.log('ffffffff');
          if(res.data.Status === "Success") {
              console.log('ffffffff');
                navigate('/Signin')
            }
        }).catch(err => console.log(err))
    }

    return(
        <div className="flex justify-center items-center bg-secondary h-full">
      <div className="bg-white p-3 rounded w-25">
        <h4>Forgot Password</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Send
          </button>
          </form>
        
      </div>
    </div>
    )
}

export default ForgotPassword;