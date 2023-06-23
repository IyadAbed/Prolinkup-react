// import { useState, useEffect } from 'react';
// import jwtDecode from 'jwt-decode';
// import axios from 'axios';

export default function ProfileSettings() {
  return (
    <>
    <>
    {/* component */}
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-20">
    <h1 className="text-xl font-bold text-black capitalize dark:text-white">
      Account settings
    </h1>
    <form className="text-black">
      <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
        <div>
          <label className="text-black dark:text-gray-200" htmlFor="username">
            Username
          </label>
          <input
          id="username"
            className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
        <div>
          <label className="text-black dark:text-gray-200" htmlFor="emailAddress">
            Email Address
          </label>
          <input
          id="emailAddress"
          type="email"
            className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
        <div>
          <label className="text-black dark:text-gray-200" htmlFor="password">
            Password
          </label>
          <input
          value="*********"
            id="password"
            type="password"
            className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
  
        <div>
          <label  className="text-black dark:text-gray-200" htmlFor="citySelect">
            Select
          </label>
          <select
            id="citySelect"
            className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            value={location}
          >
            <option value="Amman">Amman</option>
            <option value="Zarqa">Zarqa</option>
            <option value="Irbid">Irbid</option>
            <option value="Aqaba">Aqaba</option>
            <option value="Jerash">Jerash</option>
            <option value="Madaba">Madaba</option>
          </select>
        </div>
  
        <input
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="multiple_files"
          type="file"
          multiple=""
        />
      </div>
  
      <div className="flex justify-end mt-6">
      <button type="submit" className="px-6 py-2 leading-5 text-black transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-green-700 focus:outline-none focus:bg-gray-600">
      Update
    </button>
      </div>
    </form>
  </section>
  
   
  </>
  


    </>

  );
}
