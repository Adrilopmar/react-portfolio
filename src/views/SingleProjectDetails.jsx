import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProjects } from '../services/config.projects.js';
export function SingleProjectDetails() {
  const [image,setImage] = useState(null)
  const [project,setProject] = useState(null)
  const {projectName} = useParams()

  useEffect(()=>{
    getSingleProject()
  },[])
  const getSingleProject= async ()=>{
      const ProjectList = await getProjects()
      const project = ProjectList.filter(el=> el.name.shortName === projectName)[0]
      setProject( project)
      setImage('https://res.cloudinary.com/djqzi4hgo/image/upload/v1682001181/todoApp/screenshots/dashboard_hb3kgw.png')
  }
  const handleSource = (e)=> setImage(e.target.src);

  return (
    <>
      {project ? 
      <div className="mx-5 md:w-4/5 md:mx-auto ">
        <section className=" lg:flex lg:flex-wrap lg:mx-auto lg:w-4/5 lg:justify-between xl:w-3/4">
          <div className=" flex flex-col lg:w-2/4 ">
            <h2 className="text-5xl">
              <strong>{project.name.fullName}</strong>
            </h2>
            <div className="w-3/4  mt-12 gap-5 grid grid-cols-5">
             {project.technologies.map(el=><img className='logo-tech-details' src={el.logo} alt="" srcset="" /> )}
            </div>
          </div>
          <div className=" mx-auto lg:w-2/4 ">
            <div className=" my-20 mx-auto lg:my-0 lg:mx-0 lg:ml-auto">
              <img  src={image} alt="" srcset="" />
              <div className="grid grid-cols-6 gap-3 mt-3">
              <img onMouseOver={handleSource} src="https://res.cloudinary.com/djqzi4hgo/image/upload/v1682001181/todoApp/screenshots/dashboard_hb3kgw.png" alt="" srcset="" />
              <img onMouseOver={handleSource} src="https://res.cloudinary.com/djqzi4hgo/image/upload/v1681989190/todoApp/screenshots/task-success_bdfaj4.png" alt="" srcset="" />
              <img onMouseOver={handleSource} src="https://res.cloudinary.com/djqzi4hgo/image/upload/v1681990131/todoApp/screenshots/archoved-tasks_fiq2wf.png" alt="" srcset="" />
              <img onMouseOver={handleSource} src="https://res.cloudinary.com/djqzi4hgo/image/upload/v1681989655/todoApp/screenshots/dark-dashboard_sgxyxw.png" alt="" srcset="" />
              <img onMouseOver={handleSource} src="https://res.cloudinary.com/djqzi4hgo/image/upload/v1681989535/todoApp/screenshots/task-dashboard-light_jskiiq.png" alt="" srcset="" />
              <img onMouseOver={handleSource} src="https://res.cloudinary.com/djqzi4hgo/image/upload/v1681989400/todoApp/screenshots/task-error_gfmpta.png" alt="" srcset="" />
              </div>
            </div>
          </div>
          <h2 className="text-5xl mt-12">
              <strong>About this project</strong>
            </h2>
          <div className="mt-9 md:ml-9 text-black">{project.description.longDescription}</div>
          <h2 className="text-5xl mt-12">
              <strong>Backlog</strong>
            </h2>
          <div>
            {project.backlog.map(el => 
              <>
              <div className="md:ml-9">
              <h3 className='text-2xl font-semibold mt-9'>{el.title}</h3>
              <p className='text-black mt-2'>{el.description}</p>
                </div> 
              </>
            )}</div>

        </section>
      </div>
      : <></>}

    </>
  );
}