import SignupC from '../component/SignupC'
import LogoWT from '../image/LogoWT.png'


function Signup() {
  return (
    <>
    <div className="relative flex flex-col items-center justify-center my-8">
  <div className="w-full p-6 bg-white border-t-4 border-gray-600 rounded-md shadow-md border-top lg:max-w-lg">
    <div className='flex justify-center'><img className='h-16' src={LogoWT} alt="" /></div>
    <h1 className="text-3xl font-semibold text-center text-gray-700">
      SingUp
    </h1>
      <SignupC />
  </div>
</div>
    </>
  )
}

export default Signup