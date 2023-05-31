import Cards from '../components/carousel/Cards';
import CurrencyConverter from '../components/currencyConverter/CurrencyConverter';
import Navbar from '../components/header/NavBar';
import Maps from '../components/maps/Maps';
import GoldBanner from '../assets/gold-banner.webp';
import MoneyGram from '../components/moneyGram/moneyGram';
import Footer from '../components/footer/Footer';
import { useEffect, useState } from 'react';


function FrenchComponent() {
  const [currentDay, setCurrentDate] = useState(new Date().getUTCDay());

  useEffect(() => {
    setInterval(() => {
      setCurrentDate(new Date().getUTCDay());
    }, 8000);
  }, []);
  return (
    <><div className='w-9/12 m-auto'>
      <Navbar></Navbar>
      <div>
        <Cards></Cards>
      </div>
      <div id="company" className='lg:h-screen'>
      <h2 className="font-bold text-center lg:text-4xl text-xl pt-16 text-blue-700">GMT CHANGE</h2>
      <hr className="border-2 mt-6 m-auto border-yellow-500 w-1/12  drop-shadow-xl" />
      <h3  className="px-3 pt-2 m-auto font-light text-center text-2xl items-center leading-snug text-neutral-500 ">Avec plus de 25 ans d'expérience, GMT SA est leader sur le marché du change monétaire en devises étrangères, de transferts d'argent ainsi que l'achat et la vente de métaux précieux. </h3>
      <h3  className="px-3 py-0 m-auto font-light text-center text-2xl items-center leading-snug text-neutral-500 ">Déterminés à offrir des taux compétitifs et à fournir un service de qualité supérieure, notre objectif est de satisfaire pleinement nos clients et de leur offrir une expérience agréable lors de leurs transactions avec nous. </h3>
      <h3  className="px-3 py-0 m-auto font-light text-center text-2xl items-center leading-snug text-neutral-500 ">Tous nos efforts sont déployés pour rester à la pointe du marché dans le but de continuer à offrir des taux de change avantageux, adaptés aux besoins de chacun.</h3>
      <div className='pt-16'>
        <Maps></Maps>
      </div>
      </div>
      <div className='pt-16 h-screen' id="change">
        <CurrencyConverter></CurrencyConverter>
        <h2 className="font-bold text-center lg:text-4xl text-xl pt-16 text-blue-700">HORAIRES D'OUVERTURE</h2>
          <hr className="border-2 mt-6 m-auto border-yellow-500 w-1/12 max-w-{20px} drop-shadow-xl" />
          <hr className="border-1 mt-6 m-auto border-neutral-500/50 lg:w-3/6" />
          <div className="grid grid-cols-2 lg:w-3/6 m-auto">
            <h3  className={`text-${(currentDay !== 0 && currentDay !== 6) ? 'blue-700' : 'neutral-500'}  lg:px-3 py-2 m-auto font-${(currentDay !== 0 && currentDay !== 6) ? 'bold' : 'light'} text-center lg:text-2xl text-base items-center leading-snug`}>Lundi - Vendredi</h3>
            <h3  className={`text-${(currentDay !== 0 && currentDay !== 6) ? 'blue-700' : 'neutral-500'} lg:px-3 py-2 m-auto font-${(currentDay !== 0 && currentDay !== 6 ) ? 'bold' : 'light'} text-center text-2xl lg:text-2xl text-base items-center leading-snug`}>8:30am - 19pm</h3>
          </div>
          <hr className="border-1 mt-6 m-auto border-neutral-500/50 lg:w-3/6" />
          <div className="grid grid-cols-2 lg:w-3/6 m-auto">
            <h3  className={`text-${currentDay === 6  ? 'blue-700' : 'neutral-500'}  lg:px-3 py-2 m-auto font-${(currentDay === 6) ? 'bold' : 'light'} text-center lg:text-2xl text-base items-center leading-snug`}>Samedi</h3>
            <h3  className={`text-${(currentDay  === 6 ) ? 'blue-700' : 'neutral-500'} lg:px-3 py-2 m-auto font-${(currentDay === 6) ? 'bold' : 'light'}  text-center lg:text-2xl text-base items-center leading-snug `}>8:30am - 18pm</h3>
          </div>
          <hr className="border-1 mt-6 m-auto border-neutral-500/50 lg:w-3/6" />
          <div className="grid grid-cols-2 lg:w-3/6 m-auto ">
            <h3  className={`text-${currentDay === 0 ? 'red-500' : 'neutral-500'} lg:px-3 py-2 m-auto font-${(currentDay === 0) ? 'bold' : 'light'}  text-center lg:text-2xl text-base items-center leading-snug`}>Dimanche</h3>
            <h3  className={`text-${(currentDay === 0) ? 'red-500' : 'neutral-500'} lg:px-3 py-2 m-auto font-${(currentDay === 0) ? 'bold' : 'light'}  text-center lg:text-2xl text-base items-center leading-snug `}>Fermé</h3>
          </div>
          <hr className="border-1 mt-6 m-auto border-neutral-500/50 lg:w-3/6" />
      </div>
      <div id="gold" className='lg:pt-48 pt-52 lg:pb-20 pb-18'>
      <div className="relative ">
      <img className=' rounded-r-xl rounded-tr-xl w-full	rounded-b-xl' alt="or avec un text" src={GoldBanner}></img>
            <h2 className="text-white absolute bottom-[70%] lg:bottom-[60%] left-[50%] text-center translate-x-[-50%] lg:text-6xl text-sm lg:w-11/12 w-full text font-bold">Bénéficiez des meilleurs prix pour l'achat et la vente de métaux précieux.</h2>
            <h3 className="text-white text-center absolute lg:text-3xl text-xs lg:bottom-[30%] bottom-[10%] left-[50%] lg:w-11/12 w-full translate-x-[-50%]">Nous fournissons principalement de l'or, pièces et lingots, mais aussi toutes sortes de métaux précieux.</h3>
        </div>
        </div>
      <div className='lg:h-screen' id="transfer">
        <MoneyGram></MoneyGram>
      </div>
      <Footer></Footer>
    </div>

    </>
  );
}

export default FrenchComponent;