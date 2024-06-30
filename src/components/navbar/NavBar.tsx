import { Link, LinkProps, useNavigate } from "react-router-dom";
import DropDown from "../ui/DropDown";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, ChevronLeftIcon } from "@heroicons/react/20/solid";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const ServicesMenu = [
  { label: "Weekend School", link: "/weekend-school" },
  { label: "Nikkah", link: "/nikkah" },
  { label: "Counseling", link: "/counseling" },
  { label: "Social Relief", link: "/social-relief" },
];

export default function NavBar() {
  const navigate = useNavigate();
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
          <Menu>
            <MenuButton className="md:hidden">
              <Bars3Icon className="size-6" />
            </MenuButton>
            <MenuItems
              transition
              anchor="bottom start"
              className=" w-52 bg-white px-4 py-2 shadow-lg rounded-lg md:hidden origin-top-right transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
            >
              <MenuItem>
                {({ close }) => (
                  <NavLink
                    to="/"
                    onClick={(e) => {
                      e.preventDefault();
                      close();
                      navigate("/");
                    }}
                  >
                    Home
                  </NavLink>
                )}
              </MenuItem>
              <MenuItem>
                {({ close }) => (
                  <Disclosure as="div" onClick={(e) => e.preventDefault()}>
                    {({ open }) => (
                      <>
                        <DisclosureButton className="px-3 py-2 rounded-md text-base font-medium hover:bg-teal-600 hover:text-white transition duration-150 ease-in-out md:inline-block md:mt-0 md:ml-4 w-full text-left flex justify-between items-center">
                          Services
                          {open ? (
                            <ChevronDownIcon className="size-6 " />
                          ) : (
                            <ChevronLeftIcon className="size-6" />
                          )}
                        </DisclosureButton>
                        <DisclosurePanel className="pl-4">
                          {ServicesMenu.map((item) => (
                            <NavLink
                              to={item.link}
                              key={item.label}
                              onClick={(e) => {
                                e.preventDefault();
                                close();
                                navigate(item.link);
                              }}
                            >
                              {item.label}
                            </NavLink>
                          ))}
                        </DisclosurePanel>
                      </>
                    )}
                  </Disclosure>
                )}
              </MenuItem>
              <MenuItem>
                {({ close }) => (
                  <NavLink
                    to="/expansion"
                    onClick={(e) => {
                      e.preventDefault();
                      close();
                      navigate("/expansion");
                    }}
                  >
                    Donate
                  </NavLink>
                )}
              </MenuItem>
              <MenuItem>
                {({ close }) => (
                  <NavLink
                    to="/expansion"
                    onClick={(e) => {
                      e.preventDefault();
                      close();
                      navigate("/expansion");
                    }}
                  >
                    Expansion
                  </NavLink>
                )}
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
        <div className="hidden md:block flex-1" />
        <div
          className={`hidden md:flex md:items-center md:justify-end mt-4 md:mt-0`}
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

interface NavLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

function NavLink({ children, className = "", ...props }: NavLinkProps) {
  return (
    <Link
      className={`block px-3 py-2 rounded-md text-base hover:bg-teal-600 hover:text-white transition duration-150 ease-in-out md:inline-block md:mt-0 md:ml-4 font-bold ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
