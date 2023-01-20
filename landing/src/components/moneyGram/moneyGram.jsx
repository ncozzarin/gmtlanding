import React from "react";
import MGLogo from '../../assets/moneygram-logo.svg';



export default function MoneyGram() {
  return (
    <div className="p-12 rounded-r-xl rounded-tr-xl drop-shadow-xl w-full rounded-b-xl">

        <div className="flex drop-shadow-xl justify-center mt-8">
            <a href="https://goo.gl/maps/dRh1ze8od6NdbY637">
                <img src={MGLogo} alt="" />
            </a>
        </div>
        <h2 className="font-bold text-center md:text-4xl text-xl pt-16 text-red-500 ">WAYS TO SEND AND RECEIVE MONEY </h2>
        <h2 className="font-bold text-center md:text-4xl text-xl pt-2 text-red-500 ">IN SWITZERLAND WITH MONEYGRAM</h2>
        <p className="font-light text-center md:text-2xl text-xl pt-8 text-neutral-500 px-36">With so many options to transfer money internationally - through bank accounts, mobile wallets, at thousands of locations and online - MoneyGram lets you find your way.</p>
        <div className="flex w-full drop-shadow-xl justify-center px-2 space-x-16 mt-8">
            <div className="w-1/2 font-bold text-left bg-red-500 px-12 py-8 rounded-r-xl rounded-tr-xl drop-shadow-xl w-full rounded-b-xl ">
                <h2 className="font-bold text-left md:text-xl pt-2 text-white ">USER-FRIENDLY SERVICE</h2>
                <p className="pt-8 font-normal text-white text-xl">"The service is very user-friendly to set up. Plus, it's secure and easy to use going forward. The fees are fair, and they give a better exchange rate than most. By far, it's the best money transfer service I have ever used!"</p>
            </div>
            <div className="w-1/2 font-bold text-left bg-red-500 px-12 py-8 rounded-r-xl rounded-tr-xl drop-shadow-xl w-full rounded-b-xl">
            <h2 className="font-bold text-left md:text-xl pt-2 text-white ">QUICK CONFIRMATION</h2>
            <p className="pt-8 font-normal text-white text-xl">"I love using MoneyGram to send money to my family abroad. It makes my transactions easy, and I receive confirmation from my receivers quickly. I love knowing that I can simply do this in my pajamas at home. Thanks MoneyGram!"</p>

            </div>
        </div>
    </div>
  );
}