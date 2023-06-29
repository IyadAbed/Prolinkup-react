import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { UserContext } from "../Context/UserContext";
import { Select, Option } from "@material-tailwind/react";
import axios from "axios";
export default function SignupC() {
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState();
  // console.log(serverError);

  const validateForm = () => {
    const errors = {};

    // Perform validation checks
    if (!newUser.name) {
      errors.name = "First name is required";
    }
    if (!newUser.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+.\S+/.test(newUser.email)) {
      errors.email = "Must be example@test.com";
    }

    if (!newUser.password) {
      errors.password = "password is required";
    } else if (newUser.password.length < 6) {
      errors.password = "Password must contain at least 6 characters";
    } else if (!/^[a-zA-Z0-9!@#$%^&]+$/.test(newUser.password)) {
      errors.password =
        "The password must contain English letters, numbers and special characters";
    } else if (!/\d/.test(newUser.password)) {
      errors.password = "Password must contain at least one number";
    } else if (!/[!@#$%^&]/.test(newUser.password)) {
      errors.password =
        "Password must contain at least one special character (!@#$%^&*).";
    }

    // if (newUser.password !== newUser.re_password) {
    //   errors.re_password = "passwords are not match";
    // }
    return errors;
  };

  const [selectedValue, setSelectedValue] = useState("");

  console.log(selectedValue)

  const handleSelectChange = (event) => {
    setSelectedValue(event);
  };

  const options = [
    { value: "html", label: "HTML" },
    { value: "css", label: "CSS" },
    { value: "javascript", label: "JavaScript" },
    { value: "react", label: "React" },
    { value: "nodejs", label: "Node.js" },
    { value: "expressjs", label: "Express.js" },
    // Add more web development skills as needed
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleOptionChange = (option) => {
    const selectedValues = selectedOptions.map(
      (selectedOption) => selectedOption
    );

    if (selectedValues.includes(option.value)) {
      setSelectedOptions(
        selectedOptions.filter(
          (selectedOption) => selectedOption !== option.value
        )
      );
    } else {
      setSelectedOptions([...selectedOptions, option.value]);
    }
  };

  const toggleDropdown = () => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getSelectedOptionLabels = () => {
    return selectedOptions.map((value) => {
      const option = options.find((option) => option.value === value);
      return option ? option.label : "";
    });
  };

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    experience: "",
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
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      const userData = {
        fullName: newUser.name,
        password: newUser.password,
        email: newUser.email,
        experience: newUser.experience,
        skills: selectedOptions,
        major: selectedValue
      };
      const res = await axios.post("http://localhost:5000/addUser", userData);
      if (res.data.error == "this email is already exists") {
        setServerError(res.data.error);
      } else {
        localStorage.setItem("token", res.data.Tok);
        setAuth(true);
        userRefresh();
        refresh();
      }
    } else {
      setErrors(errors);
    }
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
          <div>
            {errors.name && (
              <span className=" text-red-600">{errors.name}</span>
            )}
          </div>
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
          <div>
            {errors.email && (
              <span className=" text-red-600">{errors.email}</span>
            )}
          </div>
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
          <div>
            {errors.password && (
              <span className=" text-red-600">{errors.password}</span>
            )}
          </div>
        </div>
        <div>
          <label className="label">
            <span className="text-base label-text">Experience</span>
          </label>
          <input
            name="experience"
            onChange={handleChange}
            type="number"
            placeholder="Year's of experience"
            className="w-full input input-bordered"
          />
        </div>
        {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <div className="w-full">
          <Select
            label="Select Major"
            onChange={handleSelectChange}
            value={selectedValue}
          >
            <Option value="fullstack">FullStack</Option>
            <Option value="frontend">FrontEnd</Option>
            <Option value="backend">BackEnd</Option>
          </Select>
        </div>
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            Skills: {getSelectedOptionLabels().join(", ")}
          </button>
          {isOpen && (
            <div className="absolute right-0 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
              {options.map((option) => (
                <div
                  key={option.value}
                  onClick={() => handleOptionChange(option)}
                  className={`px-4 py-2 cursor-pointer hover:bg-blue-500 hover:text-white ${
                    selectedOptions.includes(option.value)
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  {option.label}
                </div>
              ))}
            </div>
          )}
        </div>
        {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <Link
          to="/SignIn"
          className="text-xs text-gray-600 hover:underline hover:text-blue-600"
        >
          Already have an account?
        </Link>
        <div>
          <button type="submit" className="btn btn-block">
            SignUp
          </button>
        </div>
        {serverError && (
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
                <p class="font-bold">{serverError}</p>
                <p class="text-sm">
                  Make sure you know how these changes affect you.
                </p>
              </div>
            </div>
          </div>
        )}
        <p className="text-center">Or sign up with :</p>
        <div className="flex space-x-1">
          <button className="btn btn-outline w-1/2">Facebook</button>
          <button className="btn btn-outline w-1/2">Google</button>
        </div>
      </form>
    </>
  );
}
