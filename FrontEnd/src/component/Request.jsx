import React, { useContext } from "react";
import RequestCard from "./RequestCard";
import { UserContext } from "../Context/UserContext";

function Request() {
  const { user, userRefresh } = useContext(UserContext);
  const requests = user.projectTodo;

  return (
    <>
      <div className="mx-auto container py-8">
        <div className="flex flex-wrap items-center lg:justify-between justify-center">
          {requests? (
            <>
            {requests.map(({ project, messages, status, price }) => {
              return (<>
              <RequestCard 
              name= {project.name} 
              description= {project.description} 
              message= {messages.map(({message})=> message)} 
              imageUrl= {project.imageUrl}
              projectId= {project._id}
              userId= {user._id}
              status= {status}
              refresh= {userRefresh}
              price={price}
              />
              </>);
            })}
            </>
          ) : (<>
          <div className="flex justify-center items-center">
            <h1> You have no request's </h1>
          </div>
          </>)}
          
        </div>
      </div>
    </>
  );
}

export default Request;
