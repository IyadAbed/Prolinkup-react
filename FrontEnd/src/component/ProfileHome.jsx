import { useState, useEffect, Fragment, useContext } from "react";
import { BiEdit } from "react-icons/bi";
import axios from "axios";
import { FaUser } from "react-icons/fa";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { UserContext } from "../Context/UserContext";

export default function Profilehome() {
  const { user, userRefresh } = useContext(UserContext);
  const id = user?._id
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [file, setFile] = useState(null);
  const [newUser, setNewUser] = useState({
    name: "",
  });
  // const [userName, serUserName] = useState('') 
  // const [userEmail, serUserEmail] = useState('') 
  // console.log(userName);
  const [refresh,setRefresh] = useState(true)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // Extract the relevant data from the decoded token
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    formData.append("name", newUser.name);
    try {
      axios
        .put(`http://localhost:5000/updateUser/${user._id}`, formData)
        .then(() => {
          userRefresh()
        });
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div
          className="custom-width"
          style={{
            maxWidth: "700px",
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
            borderColor: "red", // Specify the color you want here
          }}
        >
          <div className="bg-white shadow-xl rounded-lg p-6">
            <div className="photo-wrapper">
              {user.imageUrl ? (
              <img
                className="w-48 h-48 rounded-full mx-auto text-gray-500"
                src={`http://localhost:5000/${user.imageUrl}`}
                alt="Profile Image"
              />
              ):(
              <FaUser className="w-32 h-32 rounded-full mx-auto text-gray-500" /> 
              )
            }
            </div>

            <div className="p-6">
              <h3 className="text-center text-3xl text-gray-900 font-medium mb-4">
                {user.name}
              </h3>
              <div className="text-center text-gray-600 text-lg font-semibold mb-4">
                <p>Web Developer</p>
              </div>
              <div className="flex">
                <div className="w- ml-auto">
                  <table className="text-lg my-4">
                    <tbody>
                      <tr>
                        <td className="px-2 py-2">
                          <span style={{ fontWeight: "bold" }}>Address :</span>{" "}
                          Zarqa-1-F20
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 py-2">
                          <span style={{ fontWeight: "bold" }}>Phone :</span>{" "}
                          +977 9955221114
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 py-2">
                          <span style={{ fontWeight: "bold" }}>Email :</span>{" "}
                          {user.email}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="w-1/2 order-first">
                  <table className="text-lg my-4" id="datas">
                    <tbody>
                      <tr>
                        <td className="px-2 py-2">
                          <span style={{ fontWeight: "bold" }}>
                            First Name :
                          </span>{" "}
                          Mahmoud{" "}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 py-2">
                          <span style={{ fontWeight: "bold" }}>
                            Last Name :
                          </span>{" "}
                          Hassan{" "}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-2 py-2">
                          <span style={{ fontWeight: "bold" }}>City :</span>{" "}
                          Zarqa
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="text-center mt-6">
                <Fragment>
                  <button
                    onClick={handleOpen}
                    className="inline-flex items-center px-4 py-2 btn hover:bg-[#cbefff] -100 hover:text-black text-white text-sm font-medium rounded-md"
                  >
                    <BiEdit className="h-5 w-5 mr-2" />
                    Edit Profile
                  </button>

                  <Dialog open={open} handler={handleOpen}>
                    <DialogHeader style={{ marginBottom: "-120px" }}>
                      Account Settings{" "}
                    </DialogHeader>
                    <DialogBody
                      divider
                      style={{ marginTop: "30px", border: "none" }}
                    >
                      <div
                        style={{
                          maxHeight: "550px",
                          overflow: "auto",
                          width: "550px",
                        }}
                      >
                        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-20">
                          <form onSubmit={handleSubmit} className="text-black">
                            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                              <div>
                                <label
                                  className="text-black dark:text-gray-200"
                                  htmlFor="username"
                                >
                                  Username
                                </label>
                                <input
                                  name="name"
                                  onChange={handleChange}
                                  id="username"
                                  className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                />
                              </div>
                              <div>
                                <label
                                  className="text-black dark:text-gray-200"
                                  htmlFor="emailAddress"
                                >
                                  Email Address
                                </label>
                                <input
                                  id="emailAddress"
                                  type="email"
                                  className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                />
                              </div>
                              <div>
                                <label
                                  className="text-black dark:text-gray-200"
                                  htmlFor="password"
                                >
                                  Password
                                </label>
                                <input
                                  value="*********"
                                  id="password"
                                  type="password"
                                  className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                />
                              </div>

                              <div>
                                <label
                                  className="text-black dark:text-gray-200"
                                  htmlFor="citySelect"
                                >
                                  Select
                                </label>
                                <select
                                  id="citySelect"
                                  className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                  // value={location}
                                >
                                  <option value="Amman">Zarqa</option>
                                  <option value="Zarqa">Amman</option>
                                  <option value="Irbid">Irbid</option>
                                  <option value="Aqaba">Aqaba</option>
                                  <option value="Jerash">Jerash</option>
                                  <option value="Madaba">Madaba</option>
                                </select>
                              </div>

                              <input
                                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                id="multiple_files"
                                onChange={(e) => {
                                  setFile(e.target.files[0]);
                                  console.log(e.target.files[0]);
                                }}
                                type="file"
                                multiple=""
                              />
                            </div>

                            <div className="flex justify-end mt-6">
                              <DialogFooter>
                                <Button
                                  variant="text"
                                  color="red"
                                  onClick={handleOpen}
                                  className="mr-1"
                                >
                                  <span>Cancel</span>
                                </Button>

                                <Button
                                  className="bg-[#70ACC7] hover:bg-[#cbefff] -100 hover:text-black"
                                  type="submit"
                                  onClick={handleOpen}
                                >
                                  <span>Update</span>
                                </Button>
                              </DialogFooter>
                            </div>
                          </form>
                        </section>
                      </div>
                    </DialogBody>
                  </Dialog>
                </Fragment>

                <br />
                <br />
                <a
                  className="text-2xl text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium flex items-center justify-center"
                  href="#asd"
                  style={{ color: "#54B435" }}
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br id="asd" />
    </>
  );
}
