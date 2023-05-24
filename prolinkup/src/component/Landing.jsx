import { Link } from 'react-router-dom';
import La from '../image/la.jpg'
function Landing() {
    return (
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Welcome to PROLINKUP</h1>
      <p className="py-6">Is There An Idea Or Project In Your Mind 
Don’t Let It Stop there Describe It To us 
And We Will Link You With Specialist TO Grow It 
So Let’s Make your Dream Become true</p>
      <Link to='/SignUp' className="btn btn-primary">Start your dream</Link>
    </div>
  </div>
</div>
    );
}

export default Landing;
