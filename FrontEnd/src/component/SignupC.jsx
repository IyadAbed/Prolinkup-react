import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { UserContext } from "../Context/UserContext";
import axios from "axios";
export default function SignupC() {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  let { auth, setAuth, refresh } = useContext(AuthContext);
  let { user, setUser, userRefresh } = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      fullName: newUser.name,
      password: newUser.password,
      email: newUser.email,
      user_type: "customer",
    };
    const res = await axios.post("http://localhost:5000/addUser", userData);
    localStorage.setItem('token', res.data.Tok)
    setAuth(true)
    userRefresh()
    refresh()
  };
  return (
    <>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="label">
            <span className="text-base label-text">UserName</span>
          </label>
          <input
            name="name"
            onChange={handleChange}
            type="text"
            placeholder="UserName"
            className="w-full input input-bordered"
          />
        </div>
        <div>
          <label className="label">
            <span className="text-base label-text">Email</span>
          </label>
          <input
            name="email"
            onChange={handleChange}
            type="text"
            placeholder="Email Address"
            className="w-full input input-bordered"
          />
        </div>
        <div>
          <label className="label">
            <span className="text-base label-text">Password</span>
          </label>
          <input
            name="password"
            onChange={handleChange}
            type="password"
            placeholder="Enter Password"
            className="w-full input input-bordered"
          />
        </div>
        <Link
          to="/SignIn"
          className="text-xs text-gray-600 hover:underline hover:text-blue-600"
        >
          Already have an account?
        </Link>
        <div>
          <button className="btn btn-block">SignUp</button>
        </div>
        <p className="text-center">Or sign up with :</p>
        <div className="flex space-x-1">
          <button className="btn btn-outline w-1/2">Facebook</button>
          <button className="btn btn-outline w-1/2">Google</button>
        </div>
      </form>
    </>
  );
}
