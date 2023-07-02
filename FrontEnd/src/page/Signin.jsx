import { useContext, useState } from "react";
import LogoWT from "../image/LogoWT.png";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

function Signin() {

  const navigate = useNavigate()
  let { auth, setAuth, refresh } = useContext(AuthContext);
  let { user, setUser, userRefresh } = useContext(UserContext);
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
        navigate("/home")
      }
    } else {
      setErrors(errors);
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
            <a
              href="#"
              className="text-xs text-gray-600 hover:underline hover:text-blue-600"
            >
              Forget Password?
            </a>
            <div>
              <button type="submit" className="btn btn-block">
                Login
              </button>
            </div>
            {serverDataErrors.emailError && (
              <div
          class="bg-red-100 border-t-4 border-red-500 rounded-b text-red-900 px-4 py-3 shadow-md"
          role="alert"
        >
          <div class="flex">
            <div class="py-1">
              <svg
                class="fill-current h-6 w-6 text-red-500 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
              </svg>
            </div>
            <div>
              <p class="font-bold">{serverDataErrors.emailError}</p>
              <p class="text-sm">
                Make sure you know how these changes affect you.
              </p>
            </div>
          </div>
        </div>
                      )}
                      {serverDataErrors.passwordError && (
                        <div
          class="bg-red-100 border-t-4 border-red-500 rounded-b text-red-900 px-4 py-3 shadow-md"
          role="alert"
        >
          <div class="flex">
            <div class="py-1">
              <svg
                class="fill-current h-6 w-6 text-red-500 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
              </svg>
            </div>
            <div>
              <p class="font-bold">{serverDataErrors.passwordError}</p>
              <p class="text-sm">
                Make sure you know how these changes affect you.
              </p>
            </div>
          </div>
        </div>
                      )}
          </form>
        </div>
      </div>
    </>
  );
}

export default Signin;
