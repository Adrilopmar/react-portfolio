import { Link } from "react-router-dom";

export default function NavbarMenu() {
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
          <li className="mr-6">
            <Link className="text-black hover:text-white desktop-link">
              Home
            </Link>
          </li>
          <li className="mr-6">
            <Link className="text-black hover:text-white desktop-link">
              Projects
            </Link>
          </li>
          <li className="mr-6">
            <Link className="text-black hover:text-white desktop-link">
              About
            </Link>
          </li>
        </div>
      </ul>
    </>
  );
}
