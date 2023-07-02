import React, { useContext } from "react";
import RequestCard from "./RequestCard";
import { UserContext } from "../Context/UserContext";

function Request() {
  const { user } = useContext(UserContext);
  const requests = user.projectTodo;
  const status = requests.map(({status})=>{
    return status
  })

  return (
    <>
      <div className="mx-auto container py-8">
        <div className="flex flex-wrap items-center lg:justify-between justify-center">
          {requests.map(({ project, messages }) => {
            return (<>
            <RequestCard 
            name= {project.name} 
            description= {project.description} 
            message= {messages.message} 
            imageUrl= {project.imageUrl}
            projectId= {project._id}
            userId= {user._id}
            status= {status}
            />
            </>);
          })}
          
        </div>
      </div>
    </>
  );
}

export default Request;
