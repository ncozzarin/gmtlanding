import React from "react";
import riveMap from '../../assets/rive-map.png';
import rousseauMap from '../../assets/rousseau-map.png';



export default function Maps() {
  return (
    <div className="bg-neutral-100 p-12 rounded-r-xl rounded-tr-xl drop-shadow-xl w-full rounded-b-xl">
        <h2 className="font-bold text-center lg:pt-12 pt-4 md:text-4xl text-xl text-blue-700 pt-1">NOS AGENCES</h2>
        <hr class="border-2 mt-6 m-auto border-yellow-500 w-1/12  drop-shadow-xl"/>
        <div className="lg:flex-row flex-col  align-center justify-center lg:space-x-40 pt-8">
            <div>
            <a className="hover:drop-shadow-xl " aria-label="Map to rousseau agency" href="https://goo.gl/maps/dRh1ze8od6NdbY637">
                <img src={rousseauMap} alt="map rousseau" className="rounded-r-xl rounded-tr-xl w-full lg:w-96 h-80 m-0 rounded-b-xl object-cover" />
            </a>
            <h2 className="font-bold text-center pt-8 md:text-l text-xl text-blue-700  ">RUE ROUSSEAU 30</h2>
            </div>
          <div>
            <a className="hover:drop-shadow-xl" href="https://goo.gl/maps/47Z45ywsp5zysSoe6" >
              <img src={riveMap} alt="map to rive" className="rounded-r-xl rounded-tr-xl w-full lg:w-96 pt-8 lg:pt-0 h-80 rounded-b-xl object-cover"/>
            </a>
            <h2 className="font-bold text-center pt-12 md:text-l text-xl text-blue-700" alt="map to rive" aria-label="Map to rive agency">COURS DE RIVE 4</h2>
          </div>
        </div>
    </div>
  );
}