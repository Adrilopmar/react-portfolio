import { Link } from "react-router-dom";
import data from "../data/infoProjects.json";
export function Projects() {
  return (
    <>
      {data.map((el) => (
        <div
          key={el.id}
          className="max-w-sm rounded  mx-auto project-card relative tools-section"
        >
          {el.technologies[0].logo? <img
            className="absolute project-main-tech"
            src={el.technologies[0].logo}
            alt="main tech"
          /> :<></>}

          <img
            className=" w-full"
            src={el.images.cover}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{el.name.full_name}</div>
            <div className="text-gray-700 text-base">
              {el.description.short_description.split("//").map((sentence,index) => (
                <p key={index}>{sentence}</p>
              ))}
            </div>
          </div>
          <div className="px-6 pt-4 justify-between flex gap-5">
            <Link to={el.website} className=" link-web text-white font-bold py-2 px-4 rounded w-2/4 text-center">
              Read more
            </Link>
            <a href={el.website} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-2/4 text-center">
              Visit website
            </a >
          </div>
        </div>
      ))}
    </>
  );
}
