import CardsEn from '../components/carouselEn/CardsEn';
import CurrencyConverter from '../components/currencyConverter/CurrencyConverter';
import Navbar from '../components/header/NavBar';
import Maps from '../components/maps/Maps';
import GoldBanner from '../assets/content-gold.svg';
import MoneyGram from '../components/moneyGram/moneyGram';
import Footer from '../components/footer/Footer';


function EnglishComponent() {
  return (
    <><div className='w-9/12 m-auto'>
      <Navbar></Navbar>
      <div>
        <CardsEn></CardsEn>
      </div>
      <h2 className="font-bold text-center md:text-4xl text-xl pt-16 text-blue-700 ">GMT CHANGE</h2>
      <hr class="border-2 mt-6 m-auto border-yellow-500 w-1/12  drop-shadow-xl" />
      <h3 className="px-3 py-2 m-auto font-light text-center text-2xl items-center leading-snug text-neutral-500 ">Change - Precious metals - Money transfers</h3>
      <div className='pt-16'>
        <Maps></Maps>
      </div>
      <div className='pt-16'>
        <CurrencyConverter></CurrencyConverter>
      </div>
      <div className='pt-48 pb-20 '>
        <img className=' rounded-r-xl rounded-tr-xl w-full	rounded-b-xl' src={GoldBanner}></img>
      </div>
      <MoneyGram></MoneyGram>
      <Footer></Footer>
    </div><div>
        
      </div></>
  );
}

export default EnglishComponent;