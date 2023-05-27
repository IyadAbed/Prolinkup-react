import React from 'react'
import { Link } from 'react-router-dom'
export default function SignupC() {
  return (
    <>
        <form className="space-y-4">
      <div>
        <label className="label">
          <span className="text-base label-text">UserName</span>
        </label>
        <input
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
          type="password"
          placeholder="Enter Password"
          className="w-full input input-bordered"
        />
      </div>
      <Link to='/SignIn'
        className="text-xs text-gray-600 hover:underline hover:text-blue-600"
      >
        Already have an account?
      </Link>
      <div>
        <button className="btn btn-block">SignUp</button>
      </div>
      <p className='text-center'>Or sign up with :</p>
      <div className='flex space-x-1'>
        <button className="btn btn-outline w-1/2">Facebook</button>
        <button className="btn btn-outline w-1/2">Google</button>
      </div>
    </form>
    </>
  )
}


