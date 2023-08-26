import { useContext, useEffect, useState } from "react";
import LogoWT from "../image/LogoWT.png";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import { UserContext } from "../Context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

const ReactApi = import.meta.env.VITE_React
const api = import.meta.env.VITE_Api

function Signin() {
  let { auth, setAuth, refresh } = useContext(AuthContext);
  let { user, setUser, userRefresh } = useContext(UserContext);
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      // setUserGoogle(codeResponse)
      
      getGoogleLogin(codeResponse);
    },
    onError: (error) => console.log("Login Failed:", error),
  });
  
  const getGoogleLogin = async (userGoogle) => {
    if (userGoogle.length !== 0) {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${userGoogle.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${userGoogle.access_token}`,
              Accept: "application/json",
            },
          }
          );
          
          try {
            const newUserResponse = await axios.post(
              `${api}/newUserGoogle`,
              response.data
              );
              if(newUserResponse.data.Tok){
                localStorage.setItem("token", newUserResponse.data.Tok );
                userRefresh()
                window.location.href = `${ReactApi}/`;
              }else{
                console.error("error in SignIn with google")
              }
        } catch (err) {
          console.log(err);
          setpasswordp(err.response.data.message);
        }
      } catch (err) {
        console.log(err.message);
      }
    }
  };
  

  const [errors, setErrors] = useState({});
  const [serverDataErrors, setServerDataErrors] = useState({
    emailError: "",
    passwordError: "",
  });
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    
    // Perform validation checks
    
    if (!userInfo.email) {
      errors.email = "email is required";
    } else if (!/\S+@\S+\.\S+/.test(userInfo.email)) {
      errors.email = "Must be example@test.com";
    }
    if (!userInfo.password) {
      errors.password = "password is required";
    }
    return errors;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // const userData = {
        //   fullName: newUser.name,
        //   password: newUser.password,
        //   email: newUser.email,
        //   user_type: "customer",
        // };
        const res = await axios.post("http://localhost:5000/log", userInfo);
        console.log(res.data);
        if (res.data.error == "email not found") {
          setServerDataErrors({
            ...serverDataErrors,
            emailError: res.data.error,
          });
        } else if (res.data.error == "Invallid password") {
          setServerDataErrors({
            ...serverDataErrors,
            passwordError: res.data.error,
        });
      } else {
        localStorage.setItem("token", res.data.Tok);
        setAuth(true);
        userRefresh();
        refresh();
        navigate("/home");
      }
    } else {
      setErrors(errors);
    }
  };
  const[tt , setTt] = useState(null);
  useEffect( ()=>{

    setTt(JSON.parse(localStorage.getItem("newProject")))
  },[]
  )

  console.log("newproject" ,tt)
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
                name="email"
                type="email"
                placeholder="Email Address"
                className="w-full input input-bordered"
              />
              <div>
                {errors.email && (
                  <span className="text-danger">{errors.email}</span>
                )}
              </div>
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                onChange={handleChange}
                name="password"
                type="password"
                placeholder="Enter Password"
                className="w-full input input-bordered"
              />
              <div>
                {errors.password && (
                  <span className="text-danger">{errors.password}</span>
                )}
              </div>
            </div>
            <Link to="/forgot-password">Forgot Password</Link>
            <div>
              <button type="submit" className="btn btn-block">
                Login
              </button>
            </div>
            {serverDataErrors.emailError && (
              <div
                className="bg-red-100 border-t-4 border-red-500 rounded-b text-red-900 px-4 py-3 shadow-md"
                role="alert"
              >
                <div className="flex">
                  <div className="py-1">
                    <svg
                      className="fill-current h-6 w-6 text-red-500 mr-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold">{serverDataErrors.emailError}</p>
                    <p className="text-sm">
                      Make sure you know how these changes affect you.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {serverDataErrors.passwordError && (
              <div
                className="bg-red-100 border-t-4 border-red-500 rounded-b text-red-900 px-4 py-3 shadow-md"
                role="alert"
              >
                <div className="flex">
                  <div className="py-1">
                    <svg
                      className="fill-current h-6 w-6 text-red-500 mr-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold">
                      {serverDataErrors.passwordError}
                    </p>
                    <p className="text-sm">
                      Make sure you know how these changes affect you.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </form>
          <button
            id="google-sign-in"
            className="w-full bg-white max-w-xs font-bold border border-2 border-purple-500 hover:bg-purple-500 hover:text-white  shadow-sm rounded-lg py-3 text-black flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
            onClick={() => login()}
          >
            <div className="bg-gray-100 p-2 rounded-full">
              <svg className="w-4" viewBox="0 0 533.5 544.3">
                <path
                  d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                  fill="#4285f4"
                />
                <path
                  d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                  fill="#34a853"
                />
                <path
                  d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                  fill="#fbbc04"
                />
                <path
                  d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                  fill="#ea4335"
                />
              </svg>
            </div>
            <span className="ml-4">Sign-In with Google</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Signin;
