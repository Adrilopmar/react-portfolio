import { Link } from "react-router-dom";


export default function NavbarMenu({scroll}) {
  return (
    <>
    <div className="w-full nav-bar" > 
      <ul className="flex w-full md:justify-around md:mx-auto">
        <div>
          <li className="mr-12">
            <img
              className="logo-nav"
              src="https://res.cloudinary.com/djqzi4hgo/image/upload/v1668359304/vue%20portfolio/logo/alm-logo_tzv32d.png"
              alt="logo aloma"
            />
          </li>
        </div>
        <div className="flex w-2/4 justify-around mx-auto md:mx-0 md:justify-end">
          <li className="mr-6 ">
            <button onClick={()=> scroll('projects')} className="text-black hover:text-white desktop-link px-3">
              Projects
            </button>
          </li>
          <li className="mr-6">
            <button onClick={()=> scroll('about')} className="text-black hover:text-white desktop-link px-3">
              About
            </button>
          </li>
          <li className="mr-6">
            <button onClick={()=> scroll('contact')} className="text-black hover:text-white desktop-link px-3">
              Contact
            </button>
          </li>
        </div>
      </ul>
      </div>
    </>
  );
}
