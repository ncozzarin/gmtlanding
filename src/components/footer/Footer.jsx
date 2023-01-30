import React from "react";
import gmtLogo from '../../assets/gmt-logo-n.svg';



export default function Footer() {
  return (
    <div className="flex w-full pl-16 pr-32  py-8 h-36 bg-blue-700  rounded-tr-xl drop-shadow-xl w-full mt-36">
        <div className="absolute bottom-8 top-8 left-16">
            <a href="">
                <img
                    className=" w-32 "
                    src={gmtLogo}
                >
                </img>
            </a>
        </div>
        <div className="mx-auto flex-column justify-center space-x-8">
            <div className="mx-auto flex justify-center space-x-8">
                <p className="text-white font-light text-xl">À PROPOS</p>
                <p className="text-white font-light text-xl">SERVICE</p>
                <p className="text-white font-light text-xl">MARQUE</p>
                <p className="text-white font-light text-xl">AIDE</p>
            </div>
            <div className="mx-auto mt-8 flex justify-center space-x-8">
                <p className="text-white font-light text-l">© 2022 GMT™. All Rights Reserved.</p>
            </div>
        </div>
    </div>
  );
}