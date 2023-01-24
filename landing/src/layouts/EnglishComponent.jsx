import CardsEn from '../components/carouselEn/CardsEn';
import MapsEn from '../components/mapsEn/MapsEn';
import GoldBanner from '../assets/gold-banner.svg';
import CurrencyConverterEn from '../components/currencyConverterEn/currencyConverterEn';
import MoneyGramEn from '../components/moneyGramEn/moneyGramEn';
import FooterEn from '../components/footerEn/FooterEn';
import NavBarEn from '../components/headerEn/NavBarEn';


function EnglishComponent() {
  return (
    <><div className='w-9/12 m-auto'>
      <NavBarEn></NavBarEn>
      <div>
        <CardsEn></CardsEn>
      </div>
      <h2 className="font-bold text-center md:text-4xl text-xl pt-16 text-blue-700 ">GMT CHANGE</h2>
      <hr class="border-2 mt-6 m-auto border-yellow-500 w-1/12  drop-shadow-xl" />
      <h3 className="px-3 py-2 m-auto font-light text-center text-2xl items-center leading-snug text-neutral-500 ">Change - Precious metals - Money transfers</h3>
      <div className='pt-16'>
        <MapsEn></MapsEn>
      </div>
      <div className='pt-16'>
        <CurrencyConverterEn></CurrencyConverterEn>
      </div>
      <div className='pt-48 pb-20 '>
        <img className=' rounded-r-xl rounded-tr-xl w-full	rounded-b-xl' src={GoldBanner}></img>
      </div>
      <MoneyGramEn></MoneyGramEn>
      <FooterEn></FooterEn>
    </div><div>
        
      </div></>
  );
}

export default EnglishComponent;