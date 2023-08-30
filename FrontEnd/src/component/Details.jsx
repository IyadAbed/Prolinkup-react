import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SpecialistCard from "./SpecialistCard";
import {MdReportGmailerrorred} from "react-icons/md"

const Details = () => {
  const [loader, setLoader] = useState(false);
  const { id } = useParams();

  const [projectInfo, setProjectInfo] = useState("");
  const [isPaid, setIsPaid] = useState();
  const [reGet, setReGet] = useState(true);

  const [usersMatch, setUsersMatch] = useState([]);

  const [usersMatc, setUsersMatc] = useState([]);


  useEffect(() => {
    setLoader(true);
    axios
      .get(`http://localhost:5000/projectss/${id}`)
      .then((res) => {
        if (res.data) {
          setIsPaid(res.data.projects.payment.isPaid);
          setProjectInfo(res.data.projects);
          setUsersMatch(res.data.matchingUsers);
        }
        setLoader(false);
        const specialist = projectInfo.specialists.map(({ specialist }) => {
          return setUsersMatc(specialist);
        });
      })
      .catch((e) => {
        return e.message;
      });
  }, [reGet]);
  
  return (
    <>
      {loader ? (
        <>
          <div className="flex justify-center items-center h-screen">
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
            <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
              {/* <!-- Description Div --> */}

              <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
                <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4">
                  {projectInfo.name}
                </h2>

                <p className=" font-normal text-base leading-6 text-gray-600 mt-7">
                  {projectInfo.description}
                </p>
                <p className=" font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 ">
                  $ 790.89
                </p>
              </div>

              {/* <!-- Preview Images Div For larger Screen--> */}

              <div className=" w-full sm:w-96 md:w-8/12  lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
                <div className=" w-full  bg-gray-100 flex justify-center items-center">
                  {projectInfo.imageUrl ? (
                    <img src={projectInfo.imageUrl} alt="Wooden Chair Previw" />
                  ) : (
                    <img
                      src="https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17-1536x922.jpg"
                      alt="Wooden Chair Previw"
                    />
                  )}
                </div>
              </div>
            </div>
            {projectInfo.status === "finished" ? (
              <>
                <div className="mx-auto container py-8">
                  <h3 class="text-3xl font-bold dark:text-white text-center my-10">
                    Specialist work in your project
                  </h3>
                  <div className="flex flex-wrap items-center lg:justify-between justify-center">
                    {/* Card 1 */}
                    {usersMatc?.map(
                      ({ name, major, imageUrl, skills, _id }) => {
                        return (
                          <SpecialistCard
                            major={major}
                            name={name}
                            imageUrl={imageUrl}
                            skills={skills}
                            projectId={id}
                            isPaid={isPaid}
                            userId={_id}
                            setReGet={setReGet}
                            reGet={reGet}
                            report = {<MdReportGmailerrorred />}
                          />
                        );
                      }
                    )}
                    
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="mx-auto container py-8">
                  <h3 class="text-3xl font-bold dark:text-white text-center my-10">
                    Specialist might work in your project
                  </h3>
                  <div className="flex flex-wrap items-center lg:justify-between justify-center">
                    {/* Card 1 */}
                    {usersMatch?.map(
                      ({ name, major, imageUrl, skills, _id }) => {
                        return (
                          <SpecialistCard
                            major={major}
                            name={name}
                            imageUrl={imageUrl}
                            skills={skills}
                            projectId={id}
                            isPaid={isPaid}
                            userId={_id}
                          />
                        );
                      }
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Details;
