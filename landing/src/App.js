import './App.css';
import Cards from './components/carousel/Cards';
import CurrencyConverter from './components/currencyConverter/CurrencyConverter';
import Navbar from './components/header/NavBar';
import Maps from './components/maps/Maps';
import GoldBanner from './assets/content-gold.svg';


function App() {
  return (
<div className='w-9/12 m-auto'>
  <Navbar></Navbar>
  <div>
    <Cards></Cards>
  </div>
  <h2 className="font-bold text-center md:text-4xl text-xl pt-16 text-blue-700 ">GMT CHANGE</h2>
  <hr class="border-2 mt-6 m-auto border-yellow-500 w-1/12  drop-shadow-xl"/>
  <h3 className="px-3 py-2 m-auto font-light text-center text-2xl items-center leading-snug text-neutral-500 ">Change - Métaux précieux - Transfert de fonds</h3>
  <div className='pt-16'>
    <Maps></Maps>
  </div>
  <div className='pt-16'>
    <CurrencyConverter></CurrencyConverter>
  </div>
  <div className='pt-48 pb-20 '>
    <img className=' rounded-r-xl rounded-tr-xl w-full	rounded-b-xl' src={GoldBanner}></img>
  </div>
</div>
  );
}

export default App;
