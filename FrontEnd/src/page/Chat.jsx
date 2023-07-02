import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../Context/UserContext';
import ChatWidget from '../component/ChatWidget';

const ChatComponent = () => {
  const { user } = useContext(UserContext);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedSpecialist, setSelectedSpecialist] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [Refresh,setRefrsh ]=useState(true)

  // Fetch projects from the server
  useEffect(() => {
    axios
      .get(`http://localhost:5000/projects/${user?._id}`)
      .then((res) => {
        if (res.data) {
          setProjects(res.data);
        }
      })
      .catch((e) => {
        return e.message;
      });
  }, [user]);

  // Fetch chat messages for the selected specialist
  useEffect(() => {
    if (selectedSpecialist) {
      axios
        .get(`http://localhost:5000/chatss/${selectedSpecialist._id}`)
        .then((res) => {
          if (res.data) {
            console.log(res.data.messages);
            setChatMessages(res.data.messages);
          }
        })
        .catch((e) => {
          return e.message;
        });
    }
  }, [Refresh]);

  // Handle project selection
  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    setSelectedSpecialist(null);

    // Find the associated specialists for the selected project
    const selectedProjectWithSpecialists = projects.find(
      (proj) => proj._id === project._id
    );
    if (selectedProjectWithSpecialists) {
      setSelectedProject({
        ...project,
        specialists: selectedProjectWithSpecialists.specialists,
      });
    }
  };

  // Handle specialist selection
  const handleSpecialistSelect = (specialist) => {
    setSelectedSpecialist(specialist);
  };

  // Handle sending a chat message
  const handleSendMessage = (message) => {
    const newMessage = {
      sender: user._id, // Assuming the user is the sender
      recipient: selectedSpecialist._id,
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

      {/* Right side: Specialist Dropdown and Chat */}
      <div className="w-3/4 p-4">
        {selectedProject && (
          <div>
            <h2 className="text-xl font-bold mb-4">Specialists</h2>
            <select
              value={selectedSpecialist ? selectedSpecialist._id : ''}
              onChange={(event) =>{
                handleSpecialistSelect(
                  selectedProject.specialists.find(
                    (specialist) => specialist._id === event.target.value
                  )
                  )
                  setRefrsh(!Refresh)
                }
              }
              className="mb-4"
            >
              <option value="">Select a specialist</option>
              {selectedProject.specialists.map((specialist) => (
                <option key={specialist._id} value={specialist._id}>
                  {specialist.specialist.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {selectedSpecialist ? (
          <div>
            <h2 className="text-xl font-bold mb-4">
              Chat with {selectedSpecialist.name}
            </h2>
            {/* Implement chat UI and functionality here */}
            {/* You can use a library like react-chat-widget for chat UI */}
            {/* Example: */}
            <ChatWidget
              messages={chatMessages}
              onSendMessage={handleSendMessage}
            />
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-bold mb-4">No specialist selected</h2>
            <p>Select a project and a specialist to begin chatting.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatComponent;
