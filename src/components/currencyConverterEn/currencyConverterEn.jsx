import React from "react";
import { useState } from "react";
import ChangeCardEn from "../changeCardEn/ChangeCardEn";



export default function CurrencyConverterEn() {
  const [date,setDate] = useState(new Date().toLocaleTimeString())

  return (
    <div className=" w-full rounded-b-xl">
        <h2 className="font-bold text-center lg:pt-12 pt-8 lg:text-4xl text-xl text-blue-700 ">TODAY’S EXCHANGE RATE</h2>
        <hr class="border-2 mt-6 m-auto border-yellow-500 w-1/12  drop-shadow-xl"/>
        <h3 className="lg:px-12 px-4 lg:pt-12 pt-4 m-auto font-light text-center lg:text-2xl text-base items-center leading-snug text-neutral-500 ">GMT Change, leader in the foreign exchange market at
Geneva, with certainly one of the best exchange rates for sale and purchase, This rate is subject to change at any time.</h3>
        <p className="px-12 lg:py-4 py-2 m-auto font-light text-center lg:text-xl text-base items-center leading-snug text-neutral-500 ">Last update: {date} </p>
        <ChangeCardEn></ChangeCardEn>
    </div>
  );
}