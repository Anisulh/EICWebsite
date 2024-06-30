import { useState } from "react";
import { Link } from "react-router-dom";
import DropDown from "../ui/DropDown";

const ServicesMenu = [
  { label: "Weekend School", link: "/weekend-school" },
  { label: "Nikkah", link: "/nikkah" },
  { label: "Counseling", link: "/counseling" },
  { label: "Social Relief", link: "/social-relief" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-teal-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 md:py-4 flex ">
        <div className="flex justify-between items-center w-full">
          <Link to="/" className="flex items-center">
            <img
              src="/logo.svg"
              alt=""
              className="size-10 md:size-12 bg-white rounded-full"
            />
            <span className="ml-2 text-lg font-semibold hidden md:inline">
              Elmhurst Islamic Center
            </span>
          </Link>
          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none focus:ring-2 focus:ring-white rounded-lg p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:block flex-1" />
        <div
          className={`md:flex md:items-center md:justify-end ${
            isOpen ? "block" : "hidden"
          } mt-4 md:mt-0`}
        >
          <div className="flex flex-col md:flex-row md:items-center">
            <NavLink to="/">Home</NavLink>
            <DropDown label="Services" menuItems={ServicesMenu} />
            <NavLink to="/donate">Donate</NavLink>
            <NavLink to="/expansion">Expansion</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="block px-3 py-2 rounded-md text-base font-medium hover:bg-teal-600 transition duration-150 ease-in-out md:inline-block md:mt-0 md:ml-4"
    >
      {children}
    </Link>
  );
}
