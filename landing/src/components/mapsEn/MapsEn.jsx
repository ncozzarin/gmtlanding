import React from "react";
import riveMap from '../../assets/rive-map.svg';
import rousseauMap from '../../assets/rousseau-map.svg';



export default function Maps() {
  return (
    <div className="bg-neutral-100 p-12 rounded-r-xl rounded-tr-xl drop-shadow-xl w-full rounded-b-xl">
        <h2 className="font-bold text-center pt-12 md:text-4xl text-xl text-blue-700 ">OUR AGENCIES</h2>
        <hr class="border-2 mt-6 m-auto border-yellow-500 w-1/12  drop-shadow-xl"/>
        <div className="flex  justify-center space-x-40 mt-8">
            <div>
            <a className="hover:drop-shadow-xl" href="https://goo.gl/maps/dRh1ze8od6NdbY637">
                <img src={rousseauMap} alt="" />
            </a>
            <h2 className="font-bold text-center pt-12 md:text-l text-xl text-blue-700 ">ROUSSEAU</h2>
            </div>
            <div>
        <a className="hover:drop-shadow-xl" href="https://goo.gl/maps/47Z45ywsp5zysSoe6" >
            <img src={riveMap} alt="" />
        </a>
        <h2 className="font-bold text-center pt-12 md:text-l text-xl text-blue-700">RIVE</h2>

        </div>
        </div>
    </div>
  );
}