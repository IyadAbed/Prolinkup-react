import { useContext, useEffect, useState } from "react";
import Select from "react-select";
import skillsData from "./skillsData";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import axios from "axios";

function DreamCreation() {
  const [file, setFile] = useState(null);
  const [skills, setSkills] = useState([]);

  const navigate = useNavigate();
  const { user, userRefresh } = useContext(UserContext);

  const options = skillsData.map((skill) => ({
    value: skill.value,
    label: skill.label,
  }));

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (localStorage.getItem("token")) {
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
        navigate(`/details/${projectId}`);
      } catch (error) {
        console.log(error);
      }
    } else {
      localStorage.setItem("newProject", JSON.stringify(newProject));
      navigate("/Signup");
    }
  };

  return (
    <>
      <section className=" py-1 bg-blueGray-50 lg:mx-16 sm:mx-0">
        <div classNameName="w-full lg:w-8/12 px-4 mx-auto mt-6">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">
                  Starting Anew Dream
                </h6>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form method="post" onSubmit={handleSubmit}>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Project Information
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        Project Name
                      </label>
                      <input
                        name="name"
                        type="text"
                        onChange={handleChange}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
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
                  </div>
                  <div className="w-full lg:w-full px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        Skill's needed
                      </label>
                      <Select
                        onChange={(e) => {
                          setSkills(e);
                        }}
                        defaultValue={[options[20]]}
                        isMulti
                        name="skills"
                        options={options}
                        className="basic-multi-select"
                        classNamePrefix="select"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-full px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        Details
                      </label>
                      <textarea
                        id="textarea"
                        className="block w-full px-4 py-1 mt-2 text-black bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-[#70ACC7] dark:focus:border-[#70ACC7] focus:outline-none focus:ring-[#70ACC7]"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <hr className="mt-6 border-b-1 border-blueGray-300" />

                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Contact Information
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        Description
                      </label>
                      <textarea
                        onChange={handleChange}
                        name="description"
                        id="textarea"
                        className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-[#70ACC7] dark:focus:border-[#70ACC7] focus:outline-none focus:ring-[#70ACC7]"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Project Image
                      </label>
                      <input
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        id="multiple_files"
                        onChange={(e) => {
                          setFile(e.target.files[0]);
                        }}
                        type="file"
                        multiple=""
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button className="btn" type="Submit">
                    Matching
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DreamCreation;
