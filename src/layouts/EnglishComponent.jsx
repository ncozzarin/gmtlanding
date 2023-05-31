import CardsEn from '../components/carouselEn/CardsEn';
import MapsEn from '../components/mapsEn/MapsEn';
import GoldBanner from '../assets/gold-banner.webp';
import CurrencyConverterEn from '../components/currencyConverterEn/currencyConverterEn';
import MoneyGramEn from '../components/moneyGramEn/moneyGramEn';
import FooterEn from '../components/footerEn/FooterEn';
import NavBarEn from '../components/headerEn/NavBarEn';
import { useEffect, useState } from 'react';
import Modal from '../components/modal/Modal';


function EnglishComponent() {
  const [currentDay, setCurrentDate] = useState(new Date().getUTCDay());

  const [showPp, setShowPp] = useState(false);
  const [showLicensing, setShowLicensing] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showFaq, setShowFaq] = useState(false);



  function handlePpChange(newValue) {
    setShowPp(newValue);
  }

  function handleShowLicensingChange(newValue) {
    setShowLicensing(newValue);
  }

  function handlesetShowContact(newValue) {
    setShowContact(newValue);
  }

  function handlesetShowFaqChange(newValue) {
    setShowFaq(newValue);
  }

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
      <Modal 
      title="Privacy Policy" 
      text = {["At GMT SA, we take the protection of our customers' data very seriously. We know that your personal information is extremely important, which is why we have implemented robust security measures to protect your data from unauthorized access."," We are committed to respecting your privacy and treating your data with the utmost confidentiality. As a client of GMT SA, you can be assured that all information you provide to us is stored securely. We never disclose your information to third parties unless required by law or unless you give us express permission to do so. If you have any questions or concerns about the security of your information, please feel free to contact us to discuss them."]}
      showModalProp={showPp} setShowModal={handlePpChange} />
      <Modal title="Licensing" text={["GMT.SA is affiliated with ARIF (Association Romande des Intermédiaires Financiers) which fulfills the legal obligations of supervision and control towards our activity. ARIF is a self-regulatory organization recognized by the federal government and is subject to the supervision of the Swiss Financial Market Supervisory Authority FINMA."]} showModalProp={showLicensing} setShowModal={handleShowLicensingChange} />
      <Modal title="Contact" text={["We are at your disposal for any information, you can reach us during office hours by phone at 022.738.87.77 (Bureau de change at Rue Rousseau 30) and at 022.310.93.63 (Bureau de change in Cours de Rive 4)"]} showModalProp={showContact} setShowModal={handlesetShowContact} />
      <Modal title="FAQ" 
      text={["Do I need to show an ID to make a money exchange transaction ? No. For amounts less than CHF 5,000, you don't need any identification.You just have to go to the office with the amount you want to exchange. For amounts over CHF 5,000, you must identify yourself at our counters by presenting an original and valid identity document.","Do I have to prove where the funds come from in order to carry out a money exchange transaction? For amounts over CHF 15,000, you must indicate the origin of the funds when you identify yourself at our sales counters.","How can I block the rate? You just have to fill in our form by clicking here. Once you click on 'validate' the rate will be blocked for you for 3 hours and you can go to one of our branches. Once the rate is locked, can I still get another rate? The rate you have blocked is reserved for you for 3 hours, after this time you can block a rate again. But if you don't want to use the first blocked rate anymore, you just have to unblock it to set another rate.","Do I need to show identification to buy precious metals? You do not need to show any identification for purchases of less than CHF 15,000. beyond this threshold, you must identify yourself at our counters by presenting an original and valid ID.","When I buy a precious metal, can I get it right away? This will depend on the stock. For information you can call one of our agencies, in Rousseau: 022.738.87.77 or in Rive: 022.310.93.63 or you can go directly to the store.","Do I need to show identification to make a transfer with Money Gram? Yes, you need to identify yourself at our counters by presenting an original and valid ID."]} showModalProp={showFaq} setShowModal={handlesetShowFaqChange} />
      <div className='lg:h-screen' id="company">
      <h2 className="font-bold text-center lg:text-4xl text-xl pt-16 text-blue-700 ">GMT CHANGE</h2>
      <hr className="border-2 mt-6 m-auto border-yellow-500 w-1/12  drop-shadow-xl" />
      <h3  className="px-3 pt-2 m-auto font-light text-center text-2xl items-center leading-snug text-neutral-500 ">With more than 25 years of experience, GMT SA is the market leader in foreign currency exchange, money transfers and the purchase and sale of precious metals.  </h3>
      <h3  className="px-3 py-0 m-auto font-light text-center text-2xl items-center leading-snug text-neutral-500 ">Determined to offer competitive rates and provide superior service, our goal is to fully satisfy our clients and provide them with a pleasant experience when dealing with us.  </h3>
      <h3  className="px-3 py-0 m-auto font-light text-center text-2xl items-center leading-snug text-neutral-500 ">We strive to stay on top of the market in order to continue to offer great exchange rates, tailored to the needs of each individual.</h3>

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
            <h3  className={`text-${(currentDay !== 0 && currentDay !== 6) ? 'blue-700' : 'neutral-500'} lg:px-3 py-2 m-auto font-${(currentDay !== 0 && currentDay !== 6 ) ? 'bold' : 'light'} text-center text-2xl lg:text-2xl text-base items-center leading-snug `}>8:30am - 19pm</h3>
          </div>
          <hr className="border-1 mt-6 m-auto border-neutral-500/50 lg:w-3/6" />
          <div className="grid grid-cols-2 lg:w-3/6 m-auto ">
            <h3  className={`text-${currentDay === 6  ? 'blue-700' : 'neutral-500'} lg:px-3 py-2 m-auto font-${(currentDay === 6) ? 'bold' : 'light'} text-center lg:text-2xl text-base items-center leading-snug`}>Saturday</h3>
            <h3  className={`text-${(currentDay  === 6 ) ? 'blue-700' : 'neutral-500'} lg:px-3 py-2 m-auto font-${(currentDay === 6) ? 'bold' : 'light'}  text-center lg:text-2xl text-base items-center leading-snug `}>8:30am - 18pm</h3>
          </div>
          <hr className="border-1 mt-6 m-auto border-neutral-500/50 lg:w-3/6" />
          <div className="grid grid-cols-2 lg:w-3/6 m-auto ">
            <h3  className={`text-${currentDay === 0 ? 'red-500' : 'neutral-500'} lg:px-3 py-2 m-auto font-${(currentDay === 0) ? 'bold' : 'light'}  text-center lg:text-2xl text-base items-center leading-snug`}>Sunday</h3>
            <h3  className={`text-${(currentDay === 0) ? 'red-500' : 'neutral-500'} lg:px-3 py-2 m-auto font-${(currentDay === 0) ? 'bold' : 'light'}  text-center lg:text-2xl text-base items-center leading-snug `}>Closed</h3>
          </div>
          <hr className="border-1 mt-6 m-auto border-neutral-500/50 lg:w-3/6" />
      </div>
      <div id="gold" className='lg:pt-48 pt-52 mt-200 pb-20 '>
        
      </div>
      <div className="relative">
      <img className=' rounded-r-xl rounded-tr-xl w-full	rounded-b-xl' alt="gold background with text" src={GoldBanner}></img>
            <h2 className="text-white absolute bottom-[60%] left-[50%] text-center translate-x-[-50%] lg:text-6xl text-base lg:w-11/12 w-full text font-bold  ">Benefit from the best prices for buying and selling precious metals.</h2>
            <h3 className="text-white text-center absolute lg:text-3xl text-sm lg:bottom-[30%] bottom-[10%] left-[50%] lg:w-11/12 w-full translate-x-[-50%] ">We mainly supply gold, coins and bars, but also all kinds of precious metals.</h3>
        </div>
      <div id="transfer" className='lg:h-screen'>
      <MoneyGramEn></MoneyGramEn>
      </div>
      <FooterEn setPp={setShowPp} setLicensing={setShowLicensing} setContact={setShowContact} setFaq={setShowFaq} ></FooterEn>
      </div></>
  );
}

export default EnglishComponent;