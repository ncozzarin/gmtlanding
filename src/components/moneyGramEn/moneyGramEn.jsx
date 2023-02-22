import React from "react";
import MGLogo from '../../assets/moneygram-logo.svg';



export default function MoneyGramEn() {
  return (
    <div className="pt-12 rounded-r-xl rounded-tr-xl drop-shadow-xl w-full rounded-b-xl">

        <div className="flex drop-shadow-xl justify-center mt-8">
            <a href="https://goo.gl/maps/dRh1ze8od6NdbY637">
                <img src={MGLogo} alt="Money gram logo" />
            </a>
        </div>
        <h2 className="font-bold text-center  lg:text-4xl text-base pt-16 text-red-500 ">WAYS TO SEND AND RECEIVE MONEY </h2>
        <h2 className="font-bold text-center lg:text-4xl text-base pt-2 text-red-500 ">IN SWITZERLAND WITH MONEYGRAM</h2>
        <p className="font-light text-center lg:text-2xl text-base pt-8 text-neutral-500 lg:px-36">With so many options to transfer money internationally - through bank accounts, mobile wallets, at thousands of locations and online - MoneyGram lets you find your way.</p>
        <div className="lg:flex-row flex-column w-full drop-shadow-xl justify-center lg:space-x-16 space-y-4  lg:mt-8 mt-4">
            <div className="lg:w-1/2 font-bold text-left bg-red-500 lg:px-12 px-4 lg:py-8 py-4 rounded-r-xl rounded-tr-xl drop-shadow-xl w-full rounded-b-xl ">
                <h2 className="font-bold text-left lg:text-xl text-base lg:pt-2 text-white ">USER-FRIENDLY SERVICE</h2>
                <p className="lg:pt-8 pt-4 font-normal text-white lg:text-xl text-sm">"The service is very user-friendly to set up. Plus, it's secure and easy to use going forward. The fees are fair, and they give a better exchange rate than most. By far, it's the best money transfer service I have ever used!"</p>
            </div>
            <div className="lg:w-1/2 font-bold text-left bg-red-500 lg:px-12 px-4 lg:py-8 py-4 rounded-r-xl rounded-tr-xl drop-shadow-xl w-full rounded-b-xl">
            <h2 className="font-bold text-left lg:text-xl text-base pt-2 text-white ">QUICK CONFIRMATION</h2>
            <p className="lg:pt-8 pt-4 font-normal text-white lg:text-xl text-sm">"I love using MoneyGram to send money to my family abroad. It makes my transactions easy, and I receive confirmation from my receivers quickly. I love knowing that I can simply do this in my pajamas at home. Thanks MoneyGram!"</p>

            </div>
        </div>
    </div>
  );
}