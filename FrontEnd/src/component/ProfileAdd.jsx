import { BiEdit } from "react-icons/bi";

import { useState, useEffect, Fragment, useRef, useContext } from "react";
import Select from "react-select";
import axios from "axios";
import { Button } from "@material-tailwind/react";
import MyProject from "./MyProject";
import { UserContext } from "../Context/UserContext";
import skillsData from "./skillsData"
import { useNavigate } from "react-router-dom";

export default function Profileadd() {

  const navigate = useNavigate()
  const options = skillsData.map(skill => ({
    value: skill.value,
    label: skill.label
  }));

  const { user, userRefresh } = useContext(UserContext);

  const [file, setFile] = useState(null);
  const [skills, setSkills] = useState([]);

  
  const [newProject, setNewProject] = useState({
    name: "",
    description: "",
    skillsNeeded: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    // Extract selected skill values
    const newSkills = skills.map((item) => item.value);
    setNewProject((prev) => ({
      ...prev,
      skillsNeeded: newSkills,
    }));
  }, [skills]);

  // const formData = new FormData();
  // formData.append("owner", user._id);
  // formData.append("name", newProject.name);
  // formData.append("description", newProject.description);
  // formData.append("image", file);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("owner", user._id);
      formData.append("name", newProject.name);
      formData.append("description", newProject.description);
      formData.append("image", file);
      newProject.skillsNeeded.forEach((skill) => {
        formData.append("skillsNeeded[]", skill); // Append each skill as a separate field
      }); // Use the skillsNeeded property from newProject object
  
      const response = await axios.post(
        "http://localhost:5000/createProject",
        formData
      );
      const { projectId } = response.data;
      console.log("Project ID:", projectId);
      userRefresh();
      navigate(`/details/${projectId}`)
    } catch (error) {
      console.log(error);
    }
  };

  

  return (
    <>
      <h1 className=" text-4xl text-center text-black">My Project's</h1>
      <br />
      <hr />
      <br />
      <MyProject />
      <br />
      <hr />
      <br />
      <h1 className=" text-4xl text-center text-black">Add Project's</h1>
      <br />
      <hr />

      <section className="max-w-2xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-20">
        <h1 className="text-xl font-bold text-black capitalize dark:text-white">
          Add new project
        </h1>
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="small_size"
            >
              image
            </label>
            <input
              required
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
              className="block w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 focus:ring-[#70ACC7]"
              type="file"
              multiple=""
            />

            <div>
              <label
                className="text-black dark:text-gray-200"
                htmlFor="username"
              >
                Project Name:
              </label>
              <input
                name="name"
                onChange={handleChange}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-[#70ACC7] dark:focus:border-[#70ACC7] focus:outline-none focus:ring-[#70ACC7]"
              />
            </div>

            <div>
              <label
                className="text-black dark:text-gray-200"
                htmlFor="emailAddress"
              >
                Field of project
              </label>
              <select
                id="fieldType"
                className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-[#70ACC7] dark:focus:border-[#70ACC7] focus:outline-none focus:ring-[#70ACC7]"
              >
                <option value="">Select Size</option>
                <option value="11-a-side">Web development</option>
                <option value="7-a-side">Cloud</option>
                <option value="5-a-side">AI</option>
              </select>
            </div>

            <div>
              <label
                className="text-black dark:text-gray-200"
                htmlFor="fieldType"
              >
                Skill's needed:
              </label>
              <br />
              <Select
                onChange={(e) => {
                  setSkills(e);
                }}
                defaultValue={[options[0], options[3]]}
                isMulti
                name="skills"
                options={options}
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </div>

            <div>
              <label
                className="text-black dark:text-gray-200"
                htmlFor="textarea"
              >
                Details:
              </label>
              <textarea
                id="textarea"
                className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-[#70ACC7] dark:focus:border-[#70ACC7] focus:outline-none focus:ring-[#70ACC7]"
              ></textarea>
            </div>
            <div>
              <label
                className="text-black dark:text-gray-200"
                htmlFor="textarea"
              >
                Description:
              </label>
              <textarea
                onChange={handleChange}
                name="description"
                id="textarea"
                className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-[#70ACC7] dark:focus:border-[#70ACC7] focus:outline-none focus:ring-[#70ACC7]"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <Button
              type="submit"
              className="bg-[#70ACC7] hover:bg-[#cbefff] -100 hover:text-black"
            >
              <span>Next</span>
            </Button>
          </div>
        </form>
      </section>
    </>
  );
}
