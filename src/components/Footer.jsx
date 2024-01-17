import { MdOutlineEmail } from "react-icons/md";
import { IoLogoFacebook } from "react-icons/io";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiDatabricks } from "react-icons/si";

const Footer = () => {
  const isTablet = window.innerWidth <= 768;
  return (
    <footer className="py-16">
      <div className="container">
        <header className="flex items-center justify-center gap-4 mb-8 md:justify-between med:gap-0">
          <a
            href=""
            className="flex items-center gap-4 text-5xl font-medium logo"
          >
            <SiDatabricks className="text-primary" /> Secured
          </a>
          <a href="#">
            <FaArrowCircleUp
              size={45}
              className="text-primary hover:cursor-pointer"
            />
          </a>
        </header>
        <nav className="grid justify-center text-center md:grid-cols-5 md:text-left">
          <ul className={isTablet && "flow-content--s"}>
            <header className="my-2 md:mb-4">
              <h3 className="font-medium uppercase">navigation</h3>
            </header>
            <li>
              <a href="" className="duration-300 hover:text-primary">
                Home
              </a>
            </li>
            <li>
              <a href="" className="duration-300 hover:text-primary">
                Data
              </a>
            </li>
            <li>
              <a href="" className="duration-300 hover:text-primary">
                Cloud
              </a>
            </li>
          </ul>
          <ul className={isTablet && "flow-content--s"}>
            <header className="my-2 md:mb-4">
              <h3 className="font-medium uppercase">my account</h3>
            </header>
            <li>
              <a href="" className="duration-300 hover:text-primary">
                Login
              </a>
            </li>
            <li>
              <a href="" className="duration-300 hover:text-primary">
                My Data
              </a>
            </li>
            <li>
              <a href="" className="duration-300 hover:text-primary">
                Cloud Security
              </a>
            </li>
          </ul>
          <ul className={isTablet && "flow-content--s"}>
            <header className="my-2 md:mb-4">
              <h3 className="font-medium uppercase">information</h3>
            </header>
            <li>
              <a href="" className="duration-300 hover:text-primary">
                Membership
              </a>
            </li>
            <li>
              <a href="" className="duration-300 hover:text-primary">
                Data Protocols
              </a>
            </li>
            <li>
              <a href="" className="duration-300 hover:text-primary">
                Cloud Protocols
              </a>
            </li>
          </ul>
          <ul className={isTablet && "flow-content--s"}>
            <header className="my-2 md:mb-4">
              <h3 className="font-medium uppercase">Legal</h3>
            </header>
            <li>
              <a href="" className="duration-300 hover:text-primary">
                Policies
              </a>
            </li>
            <li>
              <a href="" className="duration-300 hover:text-primary">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="" className="duration-300 hover:text-primary">
                Securities
              </a>
            </li>
          </ul>
          <ul className="">
            <header className="my-2 md:mb-4">
              <h3 className="font-medium uppercase">join our team</h3>
            </header>
            <form
              action=""
              className="relative w-full px-4 py-2 mb-4 border-2 border-gray-300 rounded-md"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full outline-none placeholder:text-zinc-500 placeholder:text-sm"
              />
              <MdOutlineEmail className="absolute text-gray-500 top-[50%] right-5 translate-y-[-50%]" />
            </form>
            <ul className="flex items-center justify-center gap-4 socials-wrapper md:justify-start">
              <li>
                <a href="">
                  <FaInstagramSquare size={35} />
                </a>
              </li>
              <li>
                <a href="">
                  <FaFacebook size={35} />
                </a>
              </li>
              <li>
                <a href="">
                  <FaLinkedin size={35} />
                </a>
              </li>
              <li>
                <a href="">
                  <FaGithubSquare size={35} />
                </a>
              </li>
            </ul>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
