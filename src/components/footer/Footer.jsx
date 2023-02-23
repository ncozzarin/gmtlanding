import React from "react";
import gmtLogo from '../../assets/gmt-logo-n.svg';



export default function Footer() {
  return (
    <div className="flex w-full lg:pl-16 pl-4 lg:pr-32 py-8 h-36 bg-blue-700  rounded-tr-xl drop-shadow-xl w-full lg:mt-36 mt-12">
        <div className="absolute bottom-8 lg:top-8 lg:left-16 left-8">
            <a href="#noid">
                <img
                    className="lg:w-32 lg:h-24 w-16 h-16"
                    src={gmtLogo}
                    alt="gmt logo"
                >
                </img>
            </a>
        </div>
        <div className="mx-auto flex-column justify-center lg:space-x-8 space-x-2">
            <div className="mx-auto flex justify-center lg:space-x-8 space-x-2">
                <p className="text-white font-light lg:text-xl text-xs">À PROPOS</p>
                <p className="text-white font-light lg:text-xl text-xs">SERVICE</p>
                <p className="text-white font-light lg:text-xl hidden text-xs">MARQUE</p>
                <p className="text-white font-light lg:text-xl text-xs">AIDE</p>
            </div>
            <div className="mx-auto lg:mt-8 flex lg:justify-center justify-end lg:space-x-8 space-x-8">
                <p className="text-white font-light lg:text-l text-xs">© 2022 GMT™. All Rights Reserved.</p>
            </div>
        </div>
    </div>
  );
}