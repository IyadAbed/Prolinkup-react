import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Nav from "./component/Nav";
import Home from "./page/Home";
import Footer from "./component/Footer";
import About from "./page/About";
import Contact from "./page/Contact";
import Chat from "./page/Chat";
import StartDream from "./page/StartDream";
import Signup from "./page/Signup";
import Signin from "./page/Signin";
import DreamCreation from "./component/DreamCreation";
import Matching from "./component/Matching";
import Dashboard from "./page/Dashboard";
import UserProfile from "./page/UserProfile";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import Page404 from "./page/page404";


function App() {
  const {auth} = useContext(AuthContext)
  return (
    <>
      <BrowserRouter>
        {auth ? (
          <>
          <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Chat" element={<Chat />} />
          <Route path="StartDream" element={<StartDream />}>
            <Route index element={<DreamCreation />}/>
            <Route path="DreamCreation" element={<DreamCreation />} />
            <Route path="Matching" element={<Matching />} />
          </Route>
          <Route path="Signup" element={<Page404 />} />
          <Route path="Signin" element={<Page404 />} />
          <Route path="Dashboard" element={<Dashboard/>} />
          <Route path="profile" element= {<UserProfile />}/>
          <Route path="*" element= {<Page404 />}/>
        </Routes>
        <Footer />
          </>
        ):(
          <>
                    <Nav />
        <Routes>
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Chat" element={<Page404 />} />
          <Route path="StartDream" element={<StartDream />}>
            <Route index element={<DreamCreation />}/>
            <Route path="DreamCreation" element={<DreamCreation />} />
            <Route path="Matching" element={<Matching />} />
          </Route>
          <Route path="Signup" element={<Signup/>} />
          <Route path="Signin" element={<Signin/>} />
          <Route path="Dashboard" element={<Page404 />} />
          <Route path="profile" element= {<Page404 />}/>
          <Route path="*" element= {<Page404 />}/>
        </Routes>
        <Footer />
          </>
        )
      }
      </BrowserRouter>
    </>
  );
}

export default App;
