import React from "react";
import { useState } from "react";
import ChangeCardEn from "../changeCardEn/ChangeCardEn";



export default function CurrencyConverterEn() {
  const [date,setDate] = useState(new Date().toLocaleTimeString())

  return (
    <div className=" w-full rounded-b-xl">
        <h2 className="font-bold text-center lg:pt-12 pt-8 lg:text-4xl text-xl text-blue-700 ">TODAY’S EXCHANGE RATE</h2>
        <hr className="border-2 mt-6 m-auto border-yellow-500 w-1/12  drop-shadow-xl"/>
        <h3 className="lg:px-12 px-2 lg:pt-12 pt-4 m-auto font-light text-center lg:text-2xl text-base items-center leading-snug text-neutral-500 ">If you are looking for the best place to exchange your currency, you have come to the right place.</h3>
        <h3 className="lg:px-12 px-2 lg:pt-2 pt-4 m-auto font-light text-center lg:text-2xl text-base items-center leading-snug text-neutral-500 ">With competitive exchange rates and a team of experienced professionals at your disposal, we are here to help you get the best rate for your money. Whether you are a traveler visiting Geneva, a businessman, a cross-border commuter working in Geneva or simply someone who needs to exchange money for personal reasons, we are here to help. Convinced that you will not find a better place to change your money than with us, we invite you to use our services now or to contact us for more information.
</h3>
        <h3 className="lg:px-12 px-2 lg:pt-2 pt-4 lg:pb-12 pb-4 m-auto font-light text-center lg:text-2xl text-base items-center leading-snug text-neutral-500 ">Set & Lock Rate. Since the rate is subject to change at any time, you can lock in the rate with us when it looks good to you. Then go to one of our branches to make the change. Your preferred rate is preserved for 3 hours from the time of fixing. Last update: {date}</h3>
        <ChangeCardEn></ChangeCardEn>
    </div>
  );
}