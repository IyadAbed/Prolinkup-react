import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../image/Logo.png";
import { AuthContext } from "../Context/AuthContext";
import ProfileDrop from "./ProfileDrop";
export default function Nav() {
  const { auth, setAuth } = useContext(AuthContext);
  return (
    <>
      <div className="navbar bg-cyan-50 sticky top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/Home">Home</Link>
              </li>
              <li tabIndex={0}>
                <Link to="/About" className="justify-between">
                  About
                </Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
          <Link to="/Home" className=" normal-case text-xl">
            <img className=" h-9 w-32" src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li tabIndex={0}>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {auth === true ? (
            <ProfileDrop />
          ):(
            <Link to="/Signup" className="btn">
            Get started
          </Link>
          )
          }
        </div>
      </div>
    </>
  );
}
