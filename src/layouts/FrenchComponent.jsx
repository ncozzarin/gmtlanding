import Cards from '../components/carousel/Cards';
import CurrencyConverter from '../components/currencyConverter/CurrencyConverter';
import Navbar from '../components/header/NavBar';
import Maps from '../components/maps/Maps';
import GoldBanner from '../assets/gold-banner.webp';
import MoneyGram from '../components/moneyGram/moneyGram';
import Footer from '../components/footer/Footer';
import { useEffect, useState } from 'react';
import Modal from '../components/modal/Modal';


function FrenchComponent() {
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
      <Navbar></Navbar>
      <div>
        <Cards></Cards>
      </div>
      <Modal 
      title="Privacy Policy" 
      text = {["Chez GMT SA,  nous prenons très au sérieux la protection des données de nos clients. Nous savons que vos informations personnelles sont extrêmement importantes, c'est pourquoi nous avons mis en place des mesures de sécurité robustes pour protéger vos données contre tout accès non autorisé. Nous nous engageons à respecter votre vie privée et à traiter vos données avec la plus grande confidentialité.","En tant que client de GMT SA, vous pouvez être assuré que toutes les informations que vous nous fournissez sont stockées en toute sécurité. Nous ne divulguons jamais vos informations à des tiers, sauf si cela est requis par la loi ou si vous nous en donnez la permission expresse.Si vous avez des questions ou des préoccupations concernant la sécurité de vos informations, n'hésitez pas à nous contacter pour en discuter."]}
      showModalProp={showPp} setShowModal={handlePpChange} />
      <Modal title="Licensing" text={["GMT.SA est affilié à ARIF ( Association Romande des Intermédiaires Financiers) qui remplit les obligations légales de surveillance et de contrôle envers notre activité. ARIF est un organisme d’autorégulation reconnu par le gouvernement fédéral qui est soumis à la surveillance de l’Autorité fédérale de surveillance des marchés financiers FINMA."]} showModalProp={showLicensing} setShowModal={handleShowLicensingChange} />
      <Modal title="Contact" text={["à votre disposition pour tout renseignement, vous pouvez nous joindre pendant les heures de bureau par téléphone au 022.738.87.77 (Bureau de changeà la Rue Rousseau 30 ) et au 022.310.93.63 (Bureau de change en Cours de Rive 4)"]} showModalProp={showContact} setShowModal={handlesetShowContact} />
      <Modal title="FAQ" 
      text={["Dois-je présenter une pièce d'identité pour effectuer une transaction de change d'argent ? Pour des montants inférieurs à Frs 5000.- il n'y a pas besoin de pièce d'identité. Il suffit simplement de vous rendre sur place avec le montant que vous souhaitez changer. A partir de Frs 5'000.- vous devez vous identifier auprès de nos guichets en présentant une pièce d'identité en version originale et en cours de validité."," Dois-je prouver d'où proviennent les fonds pour pouvoir effectuer une transaction de change d'argent ? Pour les montants supérieurs à Frs 15'000.- vous devez indiquez l'origine des fonds lors de votre identification auprès de nos guichets de vente.","Comment puis-je bloquer le taux ? Il vous suffit de remplir notre formulaire en cliquant ici. Une fois que vous aurez cliquer sur 'valider' le taux sera bloqué pour vous pendant 3h et vous pourrez vous rendre dans l'une de nos agence.","Est-ce qu'une fois que le taux est bloqué je peux quand même bénéficier d'un autre taux ? Le taux que vous avez bloqué vous est réservé durant 3h, passé ce délais  vous pourrez à nouveau bloquer un taux. Mais si vous souhaitez ne plus utiliser le premier taux bloquée, vous n'avez qu'à le débloquer pour fixer un autre taux. ","Dois-je présenter un papier d'identité pour acheter des métaux précieux ? Il n'y a pas besoin de présenter de pièce d'identité pour les achats inférieurs à Frs 15'000.- Ce seuil dépassé, vous devez vous identifier auprès de nos guichets en présentant une pièce d'identité en version originale et en cours de validité.","Lors que j'achète un métal précieux est-ce que je peux l'obtenir tout de suite ? Cela dépendera du stock. Pour vous renseigner vous pouvez appeler l'une de nos agences, à Rousseau : 022.738.87.77 ou à Rive : 022.310.93.63 ou bien vous rendre directement sur place.","Dois-je présenter une pièce d'identité pour effetuer un transfert avec Money Gram ? Oui, vous devez vous identifier auprès de nos guichets en présentant une pièce d'identité en version originale et en cours de validité."]} showModalProp={showFaq} setShowModal={handlesetShowFaqChange} />
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
      <Footer setPp={setShowPp} setLicensing={setShowLicensing} setContact={setShowContact} setFaq={setShowFaq} ></Footer>
    </div>

    </>
  );
}

export default FrenchComponent;