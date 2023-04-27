import { Link } from "react-router-dom";

export function Projects({projectList}) {
  return (
    <>
    {projectList ? <> 
      {projectList.map((el) => (
        <div
        className="container-card mb-9"
          key={el.id}
        >
          <div className={"hidden lg:block project-lg-display relative bg-"+el.name.shortName}>
          {el.technologies[0].logo? <img
            className="absolute project-main-tech "
            src={el.technologies[0].logo}
            alt="main tech"
          /> :<></>}
            <div className="text-project p-9">
              <h4 className="text-3xl text-white font-bold">{el.name.fullName}</h4>
              {el.description.littleDescription.split("//").map((sentence,index) => (
                <p className="text-white" key={index}>{sentence}</p>
              ))}
             {el.website ? 
          //   <div className="w-full pt-4 justify-between flex gap-5">
          //    <Link to={`/${el.name.shortName}`} className="link-single-project text-white font-bold py-2 px-4 rounded w-2/4 text-center">
          //     Read more
          //   </Link>
          //   <a href={el.website} target="_blank" rel="noreferrer" className="link-web bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-2/4 text-center">
          //     Visit website
          //   </a > 
          // </div>
          <a href={el.website} target="_blank" rel="noreferrer" className="link-web bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-center">
          Visit website
        </a >
          : <></>
          }
            </div>
          </div>
          <div className="rounded w-full project-card relative tools-section lg:hidden">
          {el.technologies[0].logo? <img
            className="absolute project-main-tech "
            src={el.technologies[0].logo}
            alt="main tech"
          /> :<></>}
          <img
            className="w-full mx-auto"
            src={el.images.portrait}
            alt={el.name.shortName + 'logo'}
          />
          <div className="">
          <div className="w-full py-4">
            <div className="font-bold text-xl mb-2">{el.name.fullName}</div>
            <div className="text-gray-700 text-base">
              {el.description.littleDescription.split("//").map((sentence,index) => (
                <p key={index}>{sentence}</p>
              ))}
            </div>
          </div>
          {el.website ? 
            <div className="w-full pt-4 justify-between flex gap-5">
            <Link to={el.website} className="link-single-project text-white font-bold py-2 px-4 rounded w-2/4 text-center">
              Read more
            </Link>
            <a href={el.website} target="_blank" rel="noreferrer" className="link-web bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-2/4 text-center">
              Visit website
            </a >
          </div>
          : <></>
          }
          </div>
        </div>
        </div>
      ))} </>
        : <p>Loading...</p>}
    </>
  );
}
