import { Link } from "react-router-dom";

export default function NavbarMenu({ scroll,handleActive,isMenuActive }) {
  return (
    <>
      <div className="w-full nav-bar">
        <ul className="flex w-full justify-between align-center md:justify-around md:mx-auto">
          <div>
            <li className="mr-12">
              <Link to='/'>
              <img
                className="logo-nav min-w-full"
                src="https://res.cloudinary.com/djqzi4hgo/image/upload/v1668359304/vue%20portfolio/logo/alm-logo_tzv32d.png"
                alt="logo aloma"
              />
              </Link>
              
            </li>
          </div>
          <div className=" hidden md:flex w-2/4 justify-around mx-auto md:mx-0 md:justify-end">
            <li className="mr-6 ">
              <button
                onClick={() => scroll("projects")}
                className="text-black hover:text-white px-3"
              >
                Projects
              </button>
            </li>
            <li className="mr-6">
              <button
                onClick={() => scroll("about")}
                className="text-black hover:text-white px-3"
              >
                About
              </button>
            </li>
            <li className="mr-6">
              <button
                onClick={() => scroll("contact")}
                className="text-black hover:text-white px-3"
              >
                Contact
              </button>
            </li>
          </div>
          {/* burger menu */}
          <div className=" flex md:hidden flex-col w-3/4 relative">
            <div className="block my-auto ml-auto ">
              <button
                onClick={handleActive}
                className={`${isMenuActive? 'active-menu':''} flex items-center my-auto px-3 py-2 rounded text-black  hover:text-white hover:border-white`}
              >
                <svg className="fill-current h-6 w-6" viewBox="0 0 20 20">
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
            <nav className="flex items-center justify-between flex-wrap right-0 ">
              {isMenuActive ? (
                <div className="rounded px-6 pb-4 absolute active-menu menu-dropdown transition-all w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                  <div className=" lg:flex-grow">
                    <button
                       onClick={() => scroll("projects")}
                      className="w-full text-start block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4"
                    >
                      Projects
                    </button>
                    <button
                       onClick={() => scroll("about")}
                      className="w-full text-start block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4"
                    >
                      About
                    </button>
                    <button
                       onClick={() => scroll("contact")}
                      className="w-full text-start block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white"
                    >
                      Contact
                    </button>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </nav>
          </div>
        </ul>
      </div>
    </>
  );
}
