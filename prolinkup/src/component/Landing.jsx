import { Link } from "react-router-dom";
import La from "../image/la.jpg";
function Landing() {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content max-w-full w-full gap-0 justify-center text-center">
          <div className=" w-full bg-white bg-opacity-40 py-4">
            <h1 className="text-5xl font-bold font-mono">Welcome to PROLINKUP</h1>
            <div className="flex justify-center">
            <p className="py-6 max-w-lg font-mono text-xl">
              <span> Is There</span> <span>An Idea Or </span><span>Project In Your</span><span> Mind Don’t </span><span>Let It Stop </span><span>there
              Describe</span><span>It To us</span><span> And We Will</span><span> Link You With</span><span> Specialist TO</span><span> Grow It</span><span>
              So Let’s</span><span> Make your</span><span> Dream </span><span>Become true</span>
            </p>
            </div>
            <Link to="/SignUp" className="btn font-mono">
              Start your dream
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
