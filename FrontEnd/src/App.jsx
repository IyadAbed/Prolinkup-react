import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Nav from "./component/Nav";
import Home from "./page/Home";
import Footer from "./component/Footer";
import About from "./page/About";
import Contact from "./page/Contact";
import Signup from "./page/Signup";
import Signin from "./page/Signin";
import DreamCreation from "./component/DreamCreation";
import UserProfile from "./page/UserProfile";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./Context/AuthContext";
import Page404 from "./page/page404";
import Payment from "./page/Payment";
import Details from "./component/Details";
import ForgotPassword from "./component/ForgotPassword";
import ResetPassword from "./component/ResetPassword";
function App() {
  const { auth } = useContext(AuthContext);
  const [nave, SetNave] = useState(true)
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
      if (pathname == "/profile") {
        SetNave(false)
      }else {
        SetNave(true)
      }
    }, [pathname]);
    return null;
  };
  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
        {auth ? (
          <>
            {nave === true ? <Nav /> : null}
            <Routes>
              <Route index element={<Home />} />
              <Route path="Home" element={<Home />} />
              <Route path="About" element={<About />} />
              <Route path="Contact" element={<Contact />} />
              <Route path="StartDream" element={<DreamCreation />}/>
                {/* <Route index element={<DreamCreation />} />
                <Route path="DreamCreation" element={<DreamCreation />} />
                <Route path="Matching" element={<Matching />} />
              </Route> */}
              <Route path="Signup" element={<Page404 />} />
              <Route path="Signin" element={<Page404 />} />
              {/* <Route path="Dashboard" element={<Dashboard />} /> */}
              <Route path="profile" element={<UserProfile />} />
              <Route path="details/:id" element={<Details />} />
              <Route path="checkOut/:id" element={<Payment />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
            {nave === true ? <Footer /> : null}
          </>
        ) : (
          <>
            <Nav />
            <Routes>
              <Route index element={<Home />} />
              <Route path="Home" element={<Home />} />
              <Route path="About" element={<About />} />
              <Route path="Contact" element={<Contact />} />
              <Route path="StartDream" element={<DreamCreation />}/>
              <Route path="Signup" element={<Signup />} />
              <Route path="Signin" element={<Signin />} />
              <Route path="forgot-password" element={<ForgotPassword />}></Route>
              <Route path="reset_password/:id/:token" element={<ResetPassword />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
            <Footer />
          </>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
