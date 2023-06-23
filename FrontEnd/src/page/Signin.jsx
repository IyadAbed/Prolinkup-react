import { useContext, useState } from "react";
import LogoWT from "../image/LogoWT.png";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import { UserContext } from "../Context/UserContext";

function Signin() {
  let { auth, setAuth, refresh } = useContext(AuthContext);
  let { user, setUser, userRefresh } = useContext(UserContext);
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const userData = {
    //   fullName: newUser.name,
    //   password: newUser.password,
    //   email: newUser.email,
    //   user_type: "customer",
    // };
    const res = await axios.post("http://localhost:5000/log", userInfo);
    console.log(res.data)
    if(res.data.error == "email not found"){
      console.error('email issue');
    }else if (res.data.error == "Invallid password"){
      console.error('pass issue');
    }else{
    localStorage.setItem('token', res.data.Tok)
    setAuth(true)
    userRefresh()
    refresh()
  }
  };

  return (
    <>
      <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
        <div className="w-full p-6 bg-white border-t-4 border-gray-600 rounded-md shadow-md border-top lg:max-w-lg">
          <div className="flex justify-center">
            <img className="h-16" src={LogoWT} alt="" />
          </div>
          <h1 className="text-3xl font-semibold text-center text-gray-700">
            LogIn
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="label">
                <span className="text-base label-text">Email</span>
              </label>
              <input
                onChange={handleChange}
                name='email'
                type="email"
                placeholder="Email Address"
                className="w-full input input-bordered"
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                onChange={handleChange}
                name='password'
                type="password"
                placeholder="Enter Password"
                className="w-full input input-bordered"
              />
            </div>
            <a
              href="#"
              className="text-xs text-gray-600 hover:underline hover:text-blue-600"
            >
              Forget Password?
            </a>
            <div>
              <button type="submit" className="btn btn-block">Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signin;
