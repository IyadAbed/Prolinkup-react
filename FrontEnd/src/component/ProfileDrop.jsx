import React, { useContext } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext';
import { UserContext } from '../Context/UserContext';

function ProfileDrop() {
  const {user} = useContext(UserContext)
  const navigate = useNavigate()
  const { setAuth } = useContext(AuthContext);
  const handleLogOut = () => {
    localStorage.clear();
    setAuth(false);
    navigate("/");
  };
  return (
    <div className="hs-dropdown relative inline-flex">
    <button
      id="hs-dropdown-custom-trigger"
      type="button"
      className="hs-dropdown-toggle py-1 pl-1 pr-3 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-[#70ACC7] transition-all text-sm dark:bg-gray-800 dark:hover:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
    >
      {user.imageUrl ? <img
        className="w-8 h-8 rounded-full"
        src={`${user.imageUrl}`}
        alt="Maria"
      /> : <img className='w-8 h-8 rounded-full'
        src='https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg'
        alt='image'/>
    }
      <span className="text-gray-600 font-medium truncate max-w-[7.5rem] dark:text-gray-400">
        {user.name}
      </span>
      <svg
        className="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600"
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
        />
      </svg>
    </button>
    <div
      className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700"
      aria-labelledby="hs-dropdown-custom-trigger"
    >
      <Link
        to='/profile'
        className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
        href="#"
      >
        Profile
      </Link>
      <a
        onClick={handleLogOut}
        className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
        href="#"
      >
        Logout
      </a>
    </div>
  </div>
  )
}

export default ProfileDrop