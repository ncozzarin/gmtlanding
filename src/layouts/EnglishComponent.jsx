import CardsEn from '../components/carouselEn/CardsEn';
import MapsEn from '../components/mapsEn/MapsEn';
import GoldBanner from '../assets/gold-banner.webp';
import CurrencyConverterEn from '../components/currencyConverterEn/currencyConverterEn';
import MoneyGramEn from '../components/moneyGramEn/moneyGramEn';
import FooterEn from '../components/footerEn/FooterEn';
import NavBarEn from '../components/headerEn/NavBarEn';
import { useEffect, useState } from 'react';


function EnglishComponent() {
  const [currentDay, setCurrentDate] = useState(new Date().getUTCDay());

  useEffect(() => {
    setInterval(() => {
      setCurrentDate(new Date().getUTCDay());
    }, 8000);
  }, []);

  return (
    <><div className='w-9/12 m-auto'>
      <NavBarEn></NavBarEn>
      <div>
        <CardsEn></CardsEn>
      </div>
      <div className='lg:h-screen' id="company">
      <h2 className="font-bold text-center lg:text-4xl text-xl pt-16 text-blue-700 ">GMT CHANGE</h2>
      <hr className="border-2 mt-6 m-auto border-yellow-500 w-1/12  drop-shadow-xl" />
      <h3  className="px-3 py-2 m-auto font-light text-center text-2xl items-center leading-snug text-neutral-500 ">Change - Precious metals - Money transfers</h3>
      <div  className='pt-16'>
        <MapsEn></MapsEn>
      </div>
      </div>
      <div id="change" className='pt-16 h-screen'>
        <CurrencyConverterEn></CurrencyConverterEn>
          <h2 className="font-bold text-center lg:text-4xl text-xl pt-16 text-blue-700 ">OPENING HOURS</h2>
          <hr className="border-2 mt-6 m-auto border-yellow-500 w-1/12 max-w-{20px} drop-shadow-xl" />
          <hr className="border-1 mt-6 m-auto border-neutral-500/50 lg:w-3/6" />
          <div className="grid grid-cols-2 lg:w-3/6 m-auto ">
            <h3  className={`text-${(currentDay !== 0 && currentDay !== 6) ? 'blue-700' : 'neutral-500'} lg:px-3 py-2 m-auto font-${(currentDay !== 0 && currentDay !== 6) ? 'bold' : 'light'} text-center lg:text-2xl text-base items-center leading-snug`}>Monday - Friday</h3>
            <h3  className={`text-${(currentDay !== 0 && currentDay !== 6) ? 'blue-700' : 'neutral-500'} lg:px-3 py-2 m-auto font-${(currentDay !== 0 && currentDay !== 6 ) ? 'bold' : 'light'} text-center text-2xl lg:text-2xl text-base items-center leading-snug `}>8am - 10pm</h3>
          </div>
          <hr className="border-1 mt-6 m-auto border-neutral-500/50 lg:w-3/6" />
          <div className="grid grid-cols-2 lg:w-3/6 m-auto ">
            <h3  className={`text-${currentDay === 6  ? 'blue-700' : 'neutral-500'} lg:px-3 py-2 m-auto font-${(currentDay === 6) ? 'bold' : 'light'} text-center lg:text-2xl text-base items-center leading-snug`}>Saturday</h3>
            <h3  className={`text-${(currentDay  === 6 ) ? 'blue-700' : 'neutral-500'} lg:px-3 py-2 m-auto font-${(currentDay === 6) ? 'bold' : 'light'}  text-center lg:text-2xl text-base items-center leading-snug `}>8am - 10pm</h3>
          </div>
          <hr className="border-1 mt-6 m-auto border-neutral-500/50 lg:w-3/6" />
          <div className="grid grid-cols-2 lg:w-3/6 m-auto ">
            <h3  className={`text-${currentDay === 0 ? 'red-500' : 'neutral-500'} lg:px-3 py-2 m-auto font-${(currentDay === 0) ? 'bold' : 'light'}  text-center lg:text-2xl text-base items-center leading-snug`}>Sunday</h3>
            <h3  className={`text-${(currentDay === 0) ? 'red-500' : 'neutral-500'} lg:px-3 py-2 m-auto font-${(currentDay === 0) ? 'bold' : 'light'}  text-center lg:text-2xl text-base items-center leading-snug `}>Closed</h3>
          </div>
          <hr className="border-1 mt-6 m-auto border-neutral-500/50 lg:w-3/6" />
      </div>
      <div id="gold" className='lg:pt-48 pt-18 pb-20 '>
        
      </div>
      <div className="relative">
      <img className=' rounded-r-xl rounded-tr-xl w-full	rounded-b-xl' alt="gold background with text" src={GoldBanner}></img>
            <h2 className="text-white absolute bottom-[60%] left-[50%] text-center translate-x-[-50%] lg:text-6xl text-base lg:w-11/12 w-full text font-bold  ">BEST PRICES FOR PRECIOUS METALS</h2>
            <h3 className="text-white text-center absolute lg:text-3xl text-sm lg:bottom-[30%] bottom-[10%] left-[50%] lg:w-11/12 w-full translate-x-[-50%] ">Sale and purchase of precious metals mainly supplier of gold, we also buzy and/or sell other precious metals</h3>
        </div>
      <div id="transfer" className='lg:h-screen'>
      <MoneyGramEn></MoneyGramEn>
      </div>
      <FooterEn></FooterEn>
      </div></>
  );
}

export default EnglishComponent;