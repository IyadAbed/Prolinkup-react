import { BrowserRouter, Route, Routes } from "react-router-dom";
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


function App() {
  return (
    <>
      <BrowserRouter>
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
          <Route path="Signup" element={<Signup/>} />
          <Route path="Signin" element={<Signin/>} />
          <Route path="Dashboard" element={<Dashboard/>} />
          <Route path="profile" element= {<UserProfile />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
