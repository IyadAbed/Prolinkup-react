import React, { Fragment, useState } from 'react'
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { BiEdit } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function Projects({image,name, id}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [show, setShow] = useState(false);

  const [newUser, setNewUser] = useState({
    name: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
            <tbody className="w-full">
              <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                <Link
                to={`/details/${id}`}>
                <td className="pl-4 cursor-pointer">
                  <div className="flex items-center">
                    <div className="w-10 h-10">
                      <img
                        className="w-full h-full"
                        src={image}
                      />
                    </div>
                    <div className="pl-4">
                      <p className="font-medium">
                        {name}
                      </p>
                      <p className="text-xs leading-3 text-gray-600 pt-2">
                        Herman Group
                      </p>
                    </div>
                  </div>
                </td>
                </Link>
                <td className="pl-12">
                  <p className="text-sm font-medium leading-none text-gray-800">
                    72%
                  </p>
                  <div className="w-24 h-3 bg-gray-100 rounded-full mt-2">
                    <div className="w-20 h-3 bg-green-progress rounded-full" />
                  </div>
                </td>
                <td className="pl-12">
                  <p className="font-medium">32/47</p>
                  <p className="text-xs leading-3 text-gray-600 mt-2">
                    5 tasks pending
                  </p>
                </td>
                <td className="pl-20">
                  <p className="font-medium">$13,000</p>
                  <p className="text-xs leading-3 text-gray-600 mt-2">
                    $4,200 left
                  </p>
                </td>
                <td className="pl-20">
                  <p className="font-medium">22.12.21</p>
                  <p className="text-xs leading-3 text-gray-600 mt-2">
                    34 days
                  </p>
                </td>
                <td className="px-7 2xl:px-0">
                  {show == false ? (
                    <button
                      onClick={() => setShow(!show)}
                      className="focus:outline-none pl-7"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  ) : (
                    <button
                      onClick={() => setShow(!show)}
                      className="focus:outline-none pl-7"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                          stroke="#A1A1AA"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  )}
                  {show == true && (
                    <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 ">
                      <Fragment>
                      <div onClick={handleOpen} className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                        <p>Edit</p>
                      </div>


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
                          <form  className="text-black">
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
                                  htmlFor="password"
                                >
                                  Add Skill's
                                </label>
                                <input
                                type="text"
                                  className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                />
                              </div>


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
                      <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                        <p>Delete</p>
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            </tbody>
    </>
  )
}

export default Projects