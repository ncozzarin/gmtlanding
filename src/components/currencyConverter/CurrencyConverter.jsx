import React from "react";
import { useState } from "react";
import ChangeCard from "../changeCard/ChangeCard";



export default function CurrencyConverter() {
  const [date,setDate] = useState(new Date().toLocaleTimeString())
  return (
    <div className=" w-full rounded-b-xl">
        <h2 className="font-bold text-center lg:pt-12 pt-8 lg:text-4xl text-xl text-blue-700 ">TAUX DE CHANGE DU JOUR</h2>
        <hr class="border-2 mt-6 m-auto border-yellow-500 w-1/12  drop-shadow-xl"/>
        <h3 className="lg:px-12 px-2 lg:pt-12 pt-4 m-auto font-light text-center lg:text-2xl text-base items-center leading-snug text-neutral-500 ">GMT Change, leader sur le marché du change à 
Genève, avec certainement un des meilleurs taux de change à la vente et à l’achat, Ce taux est susceptible d’être modifié à tout moment.</h3>
        <p className="px-12 lg:py-4 py-2 m-auto font-light text-center lg:text-xl text-base items-center leading-snug text-neutral-500  ">Derniere mise a jour: {date} </p>
        <ChangeCard></ChangeCard>
    </div>
  );
}