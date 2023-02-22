import React from "react";
import gmtLogo from '../../assets/gmt-logo.svg';
import { Link } from "react-router-dom";



export default function NavBarEn({ fixed }) {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  return (
    <>
      <nav className="relative h-32 flex flex-wrap items-center justify-between px-2 py-3 mb-3 mr-2">
        <div className="w-full  flex flex-wrap items-center justify-between">
          <div>
          <a href="#company">
            <img
              className="  w-32 h-24 leading-relaxed inline-block whitespace-nowrap uppercase"
              src={gmtLogo}
              alt="Money gram logo"
            >
            </img>
            </a>
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
              type="button"
              aria-labelledby="more options"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <i className="fas fa-bars">a</i>
            </button>
          </div>
          <div >
          <ul className="lg:flex hidden flex-col lg:flex-row list-none lg:ml-auto">
          
            <li className="nav-item">
                <a
                  className="px-3 py-2 flex font-sans items-center text-s hover:underline decoration-yellow-500 font-semibold decoration-2 hover:border-spacing-4  underline-offset-8 uppercase hover:font-bold  hover:text-blue-700 leading-snug text-neutral-500 "
                  href="#change"
                >
                  <span className="">EXCHANGE</span>
                </a>
            </li>
            <li className="nav-item">
                <a
                  className="px-3 py-2 flex font-sans items-center text-s hover:underline decoration-yellow-500 font-semibold decoration-2 hover:border-spacing-4  underline-offset-8 uppercase hover:font-bold  hover:text-blue-700 leading-snug text-neutral-500 "
                  href="#gold"
                >
                  <span className="">GOLD</span>
                </a>
            </li>
            <li className="nav-item">
                <a
                  className="px-3 py-2 flex font-sans items-center text-s hover:underline decoration-yellow-500 font-semibold decoration-2 hover:border-spacing-4  underline-offset-8 uppercase hover:font-bold  hover:text-blue-700 leading-snug text-neutral-500 "
                  href="#transfer"
                >
                  <span className="">MONEY TRANSFER</span>
                </a>
            </li>
            <li className="nav-item">
                <a
                  className="px-3 py-2 flex font-sans items-center text-s hover:underline decoration-yellow-500 font-semibold decoration-2 hover:border-spacing-4  underline-offset-8 uppercase hover:font-bold  hover:text-blue-700 leading-snug text-neutral-500  "
                  href="#company"
                >
                  <span className="">COMPANY</span>
                </a>
            </li>
          </ul>
          </div>
          <div className=" text-neutral-500  space-x-3.5 flex" >
          <Link to="/en">
            <h3 className="  font-bold ">EN</h3>
          </Link>
          <Link to="/fr">
            <h3 className="  hover:font-bold ">FR</h3>
            </Link>
          </div>
          <section className=" flex lg:hidden">
          <div
            className=" space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-neutral-500"></span>
            <span className="block h-0.5 w-8 animate-pulse  bg-neutral-500"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-neutral-500"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 border-neutral-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
            <li className="nav-item">
                <a
                  className="px-3 py-2 flex font-sans items-center text-s hover:underline decoration-yellow-500 font-semibold decoration-2 hover:border-spacing-4  underline-offset-8 uppercase hover:font-bold  hover:text-blue-700 leading-snug text-neutral-500 "
                  href="#change"
                >
                  <span className="">EXCHANGE</span>
                </a>
            </li>
            <li className="nav-item">
                <a
                  className="px-3 py-2 flex font-sans items-center text-s hover:underline decoration-yellow-500 font-semibold decoration-2 hover:border-spacing-4  underline-offset-8 uppercase hover:font-bold  hover:text-blue-700 leading-snug text-neutral-500 "
                  href="#gold"
                >
                  <span className="">GOLD</span>
                </a>
            </li>
            <li className="nav-item">
                <a
                  className="px-3 py-2 flex font-sans items-center text-s hover:underline decoration-yellow-500 font-semibold decoration-2 hover:border-spacing-4  underline-offset-8 uppercase hover:font-bold  hover:text-blue-700 leading-snug text-neutral-500 "
                  href="#transfer"
                >
                  <span className="">MONEY TRANSFER</span>
                </a>
            </li>
            <li className="nav-item">
                <a
                  className="px-3 py-2 flex font-sans items-center text-s hover:underline decoration-yellow-500 font-semibold decoration-2 hover:border-spacing-4  underline-offset-8 uppercase hover:font-bold  hover:text-blue-700 leading-snug text-neutral-500  "
                  href="#company"
                >
                  <span className="">COMPANY</span>
                </a>
            </li>
            </ul>
          </div>
        </section>
        </div>
        
        
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </>
  );
}