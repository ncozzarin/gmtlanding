import React from "react";
import { useState } from "react";
import ChangeCard from "../changeCard/ChangeCard";



export default function CurrencyConverter() {
  const [date,setDate] = useState(new Date().toLocaleTimeString())
  return (
    <div className=" w-full rounded-b-xl">
        <h2 className="font-bold text-center lg:pt-12 pt-8 lg:text-4xl text-xl text-blue-700 ">TAUX DE CHANGE DU JOUR</h2>
        <hr className="border-2 mt-6 m-auto border-yellow-500 w-1/12  drop-shadow-xl"/>
        <h3 className="lg:px-12 px-2 lg:pt-12 pt-4 m-auto font-light text-center lg:text-2xl text-base items-center leading-snug text-neutral-500 ">Si vous cherchez le meilleur endroit pour échanger votre monnaie, vous êtes au bon endroit.</h3>
        <h3 className="lg:px-12 px-2 lg:pt-2 pt-4 m-auto font-light text-center lg:text-2xl text-base items-center leading-snug text-neutral-500 ">Avec des taux de change compétitifs et une équipe de professionnels expérimentés à votre disposition, nous sommes là pour vous aider à obtenir le meilleur taux pour votre argent. Que vous soyez un voyageur en viste sur Genève, un homme d'affaires, une frontalier travaillant sur Genève ou simplement quelqu'un qui a besoin de changer de l'argent pour des raisons personnelles, nous sommes là pour vous aider. Convaincus que vous ne trouverez pas de meilleur endroit pour changer votre argent que chez nous,  nous vous invitons à utiliser nos services dès maintenant ou à nous contacer pour en savoir plus.</h3>
        <h3 className="lg:px-12 px-2 lg:pt-2 pt-4 lg:pb-12 pb-4 m-auto font-light text-center lg:text-2xl text-base items-center leading-snug text-neutral-500 ">"Fixez & Bloquez le Taux". Le taux étant susceptible de changer à tout moment, vous pouvez fixer le taux avec nous lorsqu'il vous semble intéréssant. Rendez-vous ensuite auprès d'une de nos agences pour faire le change. Votre taux préferentiel est préservé pendant 3 heures à partir de votre fixation. Derniere mise a jour: {date}</h3>
        <ChangeCard></ChangeCard>
    </div>
  );
}