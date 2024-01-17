import { useState } from "react";
import { SiDatabricks } from "react-icons/si";
import { HiBars2 } from "react-icons/hi2";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  return (
    <nav className="absolute p-6  top-0 z-[999] w-full mb-8">
      <div className="container flex items-center justify-between bg-transparent nav-wrapper">
        <a
          href=""
          className="flex items-center gap-4 text-5xl font-medium text-white logo"
        >
          <SiDatabricks className="text-primary" /> Secured
        </a>
        <ul className="items-center hidden gap-4 md:flex">
          <li>
            <Link
              to="/"
              className="font-medium text-white duration-300 hover:text-primary"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/recovery"
              className="font-medium text-white duration-300 hover:text-primary"
            >
              Recovery
            </Link>
          </li>
          <li>
            <Link
              to="/cloud"
              className="font-medium text-white duration-300 hover:text-primary"
            >
              Cloud
            </Link>
          </li>
          <li>
            <Link
              to="/contacts"
              className="font-medium text-white duration-300 hover:text-primary"
            >
              Contacts
            </Link>
          </li>
          <li>
            <a href="" className="text-sm text-white btn btn--primary">
              Sign in
            </a>
          </li>
        </ul>
        <div className="burger md:hidden" onClick={handleNav}>
          <HiBars2 className="text-3xl text-white" />
        </div>
        <div
          className={
            nav
              ? "absolute h-screen bg-black mobile-nav inset-0 z-[999] flex  justify-center items-center translate-x-[0%] duration-300"
              : "absolute h-screen bg-black mobile-nav inset-0 z-[999] flex  justify-center items-center translate-x-[-100%] duration-300"
          }
          onClick={handleNav}
        >
          <IoCloseSharp
            className="text-white text-3xl z-[999] absolute top-[5%] right-[5%]"
            onClick={handleNav}
          />
          <ul className="flex flex-col items-center gap-4">
            <li>
              <Link
                to="/"
                className="text-3xl font-medium text-white duration-300 hover:text-primary"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/recovery"
                className="text-3xl font-medium text-white duration-300 hover:text-primary"
              >
                Recovery
              </Link>
            </li>
            <li>
              <Link
                to="/cloud"
                className="text-3xl font-medium text-white duration-300 hover:text-primary"
              >
                Cloud
              </Link>
            </li>
            <li>
              <Link
                to="/contacts"
                className="text-3xl font-medium text-white duration-300 hover:text-primary"
              >
                Contacts
              </Link>
            </li>
            <li>
              <a href="" className="!text-2xl text-white btn btn--primary">
                Sign in
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
