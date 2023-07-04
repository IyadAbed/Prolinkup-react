import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../Context/UserContext';
import ChatWidget1 from './ChatRe';

const ChatComponent1 = () => {
  const { user } = useContext(UserContext);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [messageSpecialist, setMessageSpecialist] = useState([])
  // if(selectedProject){
  //   console.log(selectedProject.owner);
  //   console.log(user._id);
  // }

  // Fetch projects from the server
  useEffect(() => {
    axios
      .get(`http://localhost:5000/projectTodo/${user?._id}`)
      .then((res) => {
        if (res.data) {
          const filteredData = res.data.filter(({ status }) => {
            return status === 'accepted';
          }).map(({ project }) => {
            return project;
          });
          console.log(filteredData);
          setProjects(filteredData);
        }
      })
      .catch((e) => {
        return e.message;
      });
  }, [user]);

  // Fetch chat messages for the selected project
  useEffect(() => {
    if (selectedProject) {
      console.log('fffff');
      const ow = (selectedProject.owner);
      const us = (user._id);
      axios
        .get(`http://localhost:5000/chatss/${ow}/${us}`)
        .then((res) => {
          console.log('fffff');
          if (res.data) {
            console.log('ffffffffffffff');
            console.log("form",res.data);
            setChatMessages(res.data.messages);
            setRefresh(!refresh)
          }
          console.log("form",res.data);
          console.log('fffff');
        })
        .catch((e) => {
          return console.log(e.message);;
        });
    }
  }, [selectedProject]);

  useEffect(() => {
    if (selectedProject) {
      console.log(selectedProject);
      axios
        .get(`http://localhost:5000/chatss/${user._id}/${selectedProject.owner}`)
        .then((res) => {
          if (res.data) {
            setMessageSpecialist(res.data.messages);
          }
        })
        .catch((e) => {
          return e.message;
        });
    }
  }, [selectedProject]);

  // Handle project selection
  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };

  // Handle sending a chat message
  const handleSendMessage = (message) => {
    const newMessage = {
      sender: user._id,
      recipient: selectedProject.owner, // Owner is the recipient
      content: message,
    };

    axios
      .post('http://localhost:5000/chats', newMessage)
      .then((res) => {
        if (res.data) {
          setChatMessages(res.data.messages);
        }
      })
      .catch((e) => {
        return e.message;
      });
  };

  return (
    <div className="flex">
      {/* Left side: Project List */}
      <div className="w-1/4 bg-gray-200 p-4">
        <h2 className="text-xl font-bold mb-4">Projects</h2>
        <ul>
          {projects.map((project) => (
            <li
              key={project._id}
              onClick={() => handleProjectSelect(project)}
              className={`cursor-pointer mb-2 p-2 rounded-md ${
                selectedProject && selectedProject._id === project._id
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-black'
              }`}
            >
              {project.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Right side: Chat */}
      <div className="w-3/4 p-4">
        {selectedProject ? (
          <div>
            <h2 className="text-xl font-bold mb-4">
              Chat with {selectedProject.owner.name}
            </h2>
            {/* Implement chat UI and functionality here */}
            {/* You can use a library like react-chat-widget for chat UI */}
            {/* Example: */}
            <ChatWidget1
              messages={chatMessages}
              onSendMessage={handleSendMessage}
              otherMessage={messageSpecialist}
            />
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-bold mb-4">No project selected</h2>
            <p>Select a project to begin chatting with the owner.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatComponent1;