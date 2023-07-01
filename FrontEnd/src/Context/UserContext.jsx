import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState("");
  const [projectInfo, setProjectInfo] = useState("")
  const userRefresh = () => {
  if(localStorage.getItem("token")) { axios.get(`http://localhost:5000/getUser`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }).then((response) => {
      if (response.data) {
        console.log(response.data);
        setUser(response.data);
      }
    }).catch((error) => { console.error(error); });}
  }
  useEffect(()=>{
    console.log(user._id)
    axios
      .get(`http://localhost:5000/projects/${user?._id}`)
      .then((res) => {
        if (res.data) {
          console.log(res.data);
          setProjectInfo(res.data);
        }
      })
      .catch((e) => {
        return e.message;
      });
  ;
  },[user._id, user.projects])
  useEffect(() => {
    userRefresh()
  },[])
  

  return (
    <>
      {" "}
      <UserContext.Provider value={{ projectInfo, user, setUser, userRefresh }}>
        {children}
      </UserContext.Provider>
    </>
  );
}
