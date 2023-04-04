import { Link } from "react-router-dom";


export default function NavbarMenu({scroll}) {
  return (
    <>
      <ul className="flex w-full nav-bar">
        <div>
          <li className="mr-12">
            <img
              className="logo-nav"
              src="https://res.cloudinary.com/djqzi4hgo/image/upload/v1668359304/vue%20portfolio/logo/alm-logo_tzv32d.png"
              alt="logo aloma"
            />
          </li>
        </div>
        <div className="flex w-2/4 justify-around mx-auto">
          {/* <li className="mr-6">
            <Link className="text-black hover:text-white desktop-link">
              Home
            </Link>
          </li> */}
          <li className="mr-6">
            <button onClick={()=> scroll('projects')} className="text-black hover:text-white desktop-link">
              Projects
            </button>
          </li>
          <li className="mr-6">
            <button onClick={()=> scroll('about')} className="text-black hover:text-white desktop-link">
              About
            </button>
          </li>
        </div>
      </ul>
    </>
  );
}
