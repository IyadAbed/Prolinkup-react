import { Link } from 'react-router-dom'
import LogoWT from '../image/LogoWT.png'

function Signup() {
  return (
    <>
    <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
  <div className="w-full p-6 bg-white border-t-4 border-gray-600 rounded-md shadow-md border-top lg:max-w-lg">
    <div className='flex justify-center'><img className='h-16' src={LogoWT} alt="" /></div>
    <h1 className="text-3xl font-semibold text-center text-gray-700">
      Singup
    </h1>
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
        href="#"
        className="text-xs text-gray-600 hover:underline hover:text-blue-600"
      >
        Already have an account?
      </Link>
      <div>
        <button className="btn btn-block">SignUp</button>
      </div>
      <p className='text-center'>Or sign up with :</p>
      <div className='flex space-x-1'>
        <button className="btn w-1/2">Facebook</button>
        <button className="btn w-1/2">Google</button>
      </div>
    </form>
  </div>
</div>
    </>
  )
}

export default Signup