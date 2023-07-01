import React, { useState, Fragment } from "react";
import { BiEdit } from "react-icons/bi";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import axios from "axios";

function SpecialistCard({ major, name, imageUrl, skills, projectId, userId }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [requestInfo, SetRequestInfo] = useState({
    message: "",
    projectId
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    SetRequestInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(
        `http://localhost:5000/sendReq/${userId}`,
        requestInfo
      )
      .then((res)=>{
        console.log(res.data);
      })
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="mx-2 w-72 lg:mb-0 m-8">
        <div>
          {imageUrl ? (
            <img src={imageUrl} className="w-full h-44" />
          ) : (
            <>
              <img
                src="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png"
                className="w-full h-44"
              />
            </>
          )}
        </div>
        <div className=" bg-gray-100">
          <div className="flex items-center justify-between px-4 pt-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-bookmark"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" />
              </svg>
            </div>
            <div className="bg-[#70ACC7] py-1.5 px-6 rounded-full">
              <p className="text-xs text-black">{major}</p>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center">
              <h2 className="text-lg font-semibold">{name}</h2>
            </div>
            <p className="text-xs text-gray-600 mt-2">
              The Apple iPhone XS is available in 3 colors with 64GB memory.
              Shoot amazing videos
            </p>
            <div className="flex flex-wrap mt-4">
              {skills.map((skill) => {
                return (
                  <>
                    <div>
                      <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1 m-1">
                        {skill}
                      </p>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="flex items-center justify-between py-4">
              <h3 className="text-indigo-700 text-xl font-semibold">$350</h3>
              <Fragment>
                <Button
                  className="bg-[#cbefff] text-black hover:bg-[#70ACC7] -100 hover:text-white"
                  onClick={handleOpen}
                >
                  <span>Send Request</span>
                </Button>

                <Dialog open={open} handler={handleOpen}>
                  <DialogHeader style={{ marginBottom: "-120px" }}>
                    Account Settings{" "}
                  </DialogHeader>
                  <DialogBody
                    divider
                    style={{ marginTop: "30px", border: "none" }}
                  >
                    <div>
                      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md dark:bg-gray-800 mt-20">
                        <form className="text-black" onSubmit={handleSubmit}>
                          <div className="flex flex-col">
                            <div>
                              <label
                                className="text-black dark:text-gray-200"
                                htmlFor="textarea"
                              >
                                Send a description of his main task:
                              </label>
                              <textarea
                                onChange={handleChange}
                                name="message"
                                id="textarea"
                                className="block w-full px-4 py-2 mt-2 text-black bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-[#70ACC7] dark:focus:border-[#70ACC7] focus:outline-none focus:ring-[#70ACC7]"
                              ></textarea>
                            </div>
                            <br />
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
                                <span>Send</span>
                              </Button>
                            </DialogFooter>
                          </div>
                        </form>
                      </section>
                    </div>
                  </DialogBody>
                </Dialog>
              </Fragment>
            </div>
          </div>
        </div>
        {/* Card 1 Ends */}
      </div>
    </>
  );
}

export default SpecialistCard;
