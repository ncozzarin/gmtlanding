import React from "react";
import ChangeCard from "../changeCard/ChangeCard";



export default function CurrencyConverter() {
  return (
    <div className=" w-full rounded-b-xl">
        <h2 className="font-bold text-center pt-12 md:text-4xl text-xl text-blue-700 pt-1">TAUX DE CHANGE DU JOUR</h2>
        <hr class="border-2 mt-6 m-auto border-yellow-500 w-1/12  drop-shadow-xl"/>
        <h3 className="px-12 py-12 m-auto font-light text-center text-2xl items-center leading-snug text-neutral-500 ">GMT Change, leader sur le marché du change à 
Genève, avec certainement un des meilleurs taux de change à la vente et à l’achat, Ce taux est susceptible d’être modifié à tout moment.</h3>
        <ChangeCard></ChangeCard>
    </div>
  );
}