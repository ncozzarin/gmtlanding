import React from "react";
import gmtLogo from '../../assets/gmt-logo-n.svg';



export default function FooterEn() {
  return (
    <div className="flex w-full lg:pl-16 pl-4 lg:pr-32 py-8 h-36 bg-blue-700  rounded-tr-xl drop-shadow-xl w-full lg:mt-36 mt-12">
        <div className="absolute bottom-8 top-8 lg:left-16 left-8">
            <a href="#noid">
                <img
                    className="  lg:w-32 lg:h-24 w-16 h-16  "
                    src={gmtLogo}
                    alt="gmt logo"
                >
                </img>
            </a>
        </div>
        <div className="mx-auto flex-column justify-center lg:space-x-8 space-x-2">
            <div className="mx-auto flex justify-center lg:space-x-8 space-x-2">
                <p className="text-white font-light lg:text-xl text-xs">ABOUT</p>
                <p className="text-white font-light lg:text-xl text-xs">PRIVACY POLICY</p>
                <p className="text-white font-light lg:text-xl text-xs">LICENSING</p>
                <p className="text-white font-light lg:text-xl text-xs">CONTACT</p>
            </div>
            <div className="mx-auto mt-8 flex justify-center lg:space-x-8 space-x-2">
                <p className="text-white font-light lg:text-l text-xs">© 2022 GMT™. All Rights Reserved.</p>
            </div>
        </div>
    </div>
  );
}