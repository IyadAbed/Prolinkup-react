import { useState } from 'react'
import SignupC from '../component/SignupC'
import SignupP from '../component/SignupP'
import LogoWT from '../image/LogoWT.png'
import { Link } from 'react-router-dom'


function Signup() {
  const [SignUp, setSignUp] = useState(<SignupC />)
  const SignupPro = ()=>{
    setSignUp(<SignupP />)
  }
  const SignupCustomer = ()=>{
    setSignUp(<SignupC />)
  }
  return (
    <>
    <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
  <div className="w-full p-6 bg-white border-t-4 border-gray-600 rounded-md shadow-md border-top lg:max-w-lg">
    <div className='flex justify-center'><img className='h-16' src={LogoWT} alt="" /></div>
    <h1 className="text-3xl font-semibold text-center text-gray-700">
      Singup
    </h1>
      <div className='flex justify-between items-center'>
      <button className='btn' onClick={SignupPro}>SignUp As a pro</button>
      <p>OR:</p>
      <button className='btn' onClick={SignupCustomer}>SignUp As Dreamer</button>
      </div>
      {SignUp}
  </div>
</div>
    </>
  )
}

export default Signup