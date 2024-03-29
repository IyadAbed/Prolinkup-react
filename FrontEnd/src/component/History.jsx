import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../Context/UserContext';
import { Button } from '@material-tailwind/react';
import axios from 'axios';
import Project from "./Projects";


function History () {
  const { user } = useContext(UserContext);
  const [projectInfo, setProjectInfo] = useState([])
  useEffect(() => {
    axios
      .get(`http://localhost:5000/projectsFinished/${user?._id}`)
      .then((res) => {
        if (res.data) {
          console.log(res.data);
          setProjectInfo(res.data);
        }
      })
      .catch((e) => {
        return e.message;
      });
  }, [user._id, user.projects]);
  return (
    <>
      <h1 className=" text-4xl text-center text-black">My Project's</h1>
      <br />
      <hr />
      <br />
      <div className="w-full sm:px-0">
        <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
          <div className="sm:flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
              Projects
            </p>
            <div>
              <Button className="bg-[#70ACC7] hover:bg-[#cbefff] -100 hover:text-black">
                <span>New Project</span>
              </Button>
            </div>
          </div>
          <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 lg-max:overflow-y-auto">
            <table className="w-full whitespace-nowrap">
              <thead>
                <tr className="h-16 w-full text-sm leading-none text-gray-800">
                  <th className="font-normal text-left pl-4">Specialist's</th>
                  <th className="font-normal text-left pl-12">Progress</th>
                  <th className="font-normal text-left pl-12">Tasks</th>
                  <th className="font-normal text-left pl-20">Budget</th>
                  <th className="font-normal text-left pl-20">Deadline</th>
                </tr>
              </thead>
              {projectInfo?.map(({ name, imageUrl, _id }) => (
                <>
                  <Project name={name} image={imageUrl} id={_id} />
                </>
              ))}
            </table>
          </div>
        </div>
      </div>
      <br />
    </>
  )
}

export default History