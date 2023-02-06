import React from "react";
import gmtLogo from '../../assets/gmt-logo.svg';
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";



export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative h-32 flex flex-wrap items-center justify-between px-2 py-3 mb-3 mr-2">
        <div className="
        w-full  flex flex-wrap items-center justify-between">
          <div >
          <a href="#company">
            <img
              className=" w-32 leading-relaxed inline-block whitespace-nowrap uppercase"
              alt="Logo gmt"
              src={gmtLogo}
            >
            </img>
            </a>
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div>
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
                <a
                  className="px-3 py-2 flex font-sans items-center text-s hover:underline decoration-yellow-500 font-semibold decoration-2 hover:border-spacing-4  underline-offset-8 uppercase hover:font-bold  hover:text-blue-700 leading-snug text-neutral-500 "
                  href="#change"
                >
                  <span className="">CHANGE</span>
                </a>
            </li>
            <li className="nav-item">
                <a
                  className="px-3 py-2 flex font-sans items-center text-s hover:underline decoration-yellow-500 font-semibold decoration-2 hover:border-spacing-4  underline-offset-8 uppercase hover:font-bold  hover:text-blue-700 leading-snug text-neutral-500 "
                  href="#gold"
                >
                  <span className="">OR</span>
                </a>
            </li>
            <li className="nav-item">
                <a
                  className="px-3 py-2 flex font-sans items-center text-s hover:underline decoration-yellow-500 font-semibold decoration-2 hover:border-spacing-4  underline-offset-8 uppercase hover:font-bold  hover:text-blue-700 leading-snug text-neutral-500 "
                  href="#transfert"
                >
                  <span className="">TRANSFERT D'ARGENT</span>
                </a>
            </li>
            <li className="nav-item">
                <a
                  className="px-3 py-2 flex font-sans items-center text-s hover:underline decoration-yellow-500 font-semibold decoration-2 hover:border-spacing-4  underline-offset-8 uppercase hover:font-bold  hover:text-blue-700 leading-snug text-neutral-500  "
                  href="#company"
                >
                  <span className="">SOCIÉTÉ</span>
                </a>
            </li>
            </ul>
          </div>
          <div className=" text-neutral-500  space-x-3.5 flex" >
          <Link to="/en">
            <h3 className="  hover:font-bold ">EN</h3>
          </Link>
          <Link to="/fr">
            <h3 className="  font-bold ">FR</h3>
            </Link>
          <a href="">
            <div className="  hover:text-black ">
            <AiOutlineUser className="  hover:color-black " size={30} />
            </div>
          </a>
          </div>
        </div>
      </nav>
    </>
  );
}