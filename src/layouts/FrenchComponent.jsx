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
      <hr class="border-2 mt-6 m-auto border-yellow-500 w-1/12  drop-shadow-xl" />
      <h3 className="px-3 py-2 m-auto font-light text-center text-2xl items-center leading-snug text-neutral-500 ">Change - Métaux précieux - Transfert de fonds</h3>
      <div className='pt-16'>
        <Maps></Maps>
      </div>
      </div>
      <div className='pt-16 h-screen' id="change">
        <CurrencyConverter></CurrencyConverter>
        <h2 className="font-bold text-center lg:text-4xl text-xl pt-16 text-blue-700">HORAIRES D'OUVERTURE</h2>
          <hr class="border-2 mt-6 m-auto border-yellow-500 w-1/12 max-w-{20px} drop-shadow-xl" />
          <hr class="border-1 mt-6 m-auto border-neutral-500/50 lg:w-3/6" />
          <div class="grid grid-cols-2 lg:w-3/6 m-auto">
            <h3  className={`text-${(currentDay !== 0 && currentDay !== 6) ? 'blue-700' : 'neutral-500'}  lg:px-3 py-2 m-auto font-${(currentDay !== 0 && currentDay !== 6) ? 'bold' : 'light'} text-center lg:text-2xl text-base items-center leading-snug`}>Lundi - Vendredi</h3>
            <h3  className={`text-${(currentDay !== 0 && currentDay !== 6) ? 'blue-700' : 'neutral-500'} lg:px-3 py-2 m-auto font-${(currentDay !== 0 && currentDay !== 6 ) ? 'bold' : 'light'} text-center text-2xl lg:text-2xl text-base items-center leading-snug`}>8am - 10pm</h3>
          </div>
          <hr class="border-1 mt-6 m-auto border-neutral-500/50 lg:w-3/6" />
          <div class="grid grid-cols-2 lg:w-3/6 m-auto">
            <h3  className={`text-${currentDay === 6  ? 'blue-700' : 'neutral-500'}  lg:px-3 py-2 m-auto font-${(currentDay === 6) ? 'bold' : 'light'} text-center lg:text-2xl text-base items-center leading-snug`}>Samedi</h3>
            <h3  className={`text-${(currentDay  === 6 ) ? 'blue-700' : 'neutral-500'} lg:px-3 py-2 m-auto font-${(currentDay === 6) ? 'bold' : 'light'}  text-center lg:text-2xl text-base items-center leading-snug `}>8am - 10pm</h3>
          </div>
          <hr class="border-1 mt-6 m-auto border-neutral-500/50 lg:w-3/6" />
          <div class="grid grid-cols-2 w-3/6 m-auto ">
            <h3  className={`text-${currentDay === 0 ? 'red-500' : 'neutral-500'} lg:px-3 py-2 m-auto font-${(currentDay === 0) ? 'bold' : 'light'}  text-center lg:text-2xl text-base items-center leading-snug`}>Dimanche</h3>
            <h3  className={`text-${(currentDay === 0) ? 'red-500' : 'neutral-500'} lg:px-3 py-2 m-auto font-${(currentDay === 0) ? 'bold' : 'light'}  text-center lg:text-2xl text-base items-center leading-snug `}>Fermé</h3>
          </div>
          <hr class="border-1 mt-6 m-auto border-neutral-500/50 lg:w-3/6" />
      </div>
      <div id="gold" className='lg:pt-48 pt-64 pb-20'>
      <div className="relative ">
      <img className=' rounded-r-xl rounded-tr-xl w-full	rounded-b-xl' alt="or avec un text" src={GoldBanner}></img>
            <h2 className="text-white absolute bottom-[60%] left-[50%] text-center translate-x-[-50%] lg:text-6xl text-base lg:w-11/12 w-full text font-bold">Meilleurs prix POUR LES métaux précieux</h2>
            <h3 className="text-white text-center absolute lg:text-3xl text-sm lg:bottom-[30%] bottom-[10%] left-[50%] lg:w-11/12 w-full translate-x-[-50%]">Vente et achat de métaux précieux fournisseur principalement d’or, nous achetons et/ou vendons aussi d’autres métaux précieux.</h3>
        </div>
        </div>
      <div className='lg:h-screen' id="transfert">
        <MoneyGram></MoneyGram>
      </div>
      <Footer></Footer>
    </div><div>
        
      </div></>
  );
}

export default FrenchComponent;