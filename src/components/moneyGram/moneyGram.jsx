import React from "react";
import MGLogo from '../../assets/moneygram-logo.svg';



export default function MoneyGram() {
  return (
    <div className="pt-12 rounded-r-xl rounded-tr-xl drop-shadow-xl w-full rounded-b-xl">

        <div className="flex drop-shadow-xl justify-center mt-8">
            <a href="https://goo.gl/maps/dRh1ze8od6NdbY637">
                <img src={MGLogo} alt="logo moneygram" />
            </a>
        </div>
        <h2 className="font-bold text-center md:text-4xl text-xl pt-16 text-red-500 ">MOYENS D'ENVOYER ET DE RECEVOIR DE L'ARGENT</h2>
        <h2 className="font-bold text-center md:text-4xl text-xl pt-2 text-red-500 ">EN SUISSE AVEC MONEYGRAM</h2>
        <p className="font-light text-center md:text-2xl text-xl pt-8 text-neutral-500 px-36">Avec autant d’options pour transférer de l’argent à l’international - par le biais de comptes bancaires, portefeuilles mobiles, à des milliers d’endroits et en ligne - MoneyGram vous permet de trouver votre chemin.</p>
        <div className="flex w-full drop-shadow-xl justify-center space-x-16 mt-8">
            <div className="w-1/2 font-bold text-left bg-red-500 px-12 py-8 rounded-r-xl rounded-tr-xl drop-shadow-xl w-full rounded-b-xl ">
                <h2 className="font-bold text-left md:text-xl pt-2 text-white ">SERVICE ACCESSIBLE</h2>
                <p className="pt-8 font-normal text-white text-xl">"Le service est très "user friendly" à configurer. De plus, il est sécurisé et facile à utiliser à l’avenir. Les frais sont justes, et ils donnent un meilleur taux de change que la plupart. De loin, c’est le meilleur service de transfert d’argent que j’ai jamais utilisé!"</p>
            </div>
            <div className="w-1/2 font-bold text-left bg-red-500 px-12 py-8 rounded-r-xl rounded-tr-xl drop-shadow-xl w-full rounded-b-xl">
            <h2 className="font-bold text-left md:text-xl pt-2 text-white ">CONFIRMATION RAPIDE</h2>
            <p className="pt-8 font-normal text-white text-xl">" J’adore utiliser MoneyGram pour envoyer de l’argent à ma famille à l’étranger. Cela facilite mes transactions et je reçois rapidement la confirmation de mes destinataires. J’adore savoir que je peux simplement le faire en pyjama à la maison. Merci MoneyGram!"</p>

            </div>
        </div>
    </div>
  );
}