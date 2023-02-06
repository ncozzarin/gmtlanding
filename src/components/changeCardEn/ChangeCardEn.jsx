import { useEffect, useState } from "react";
import CurrencySelector from "../currencySelector/CurrencySelector";
import MoneyInput from "../MoneyImput/MoneyImput";

const currency  = [
  {
    id: 1,
    name: 'USD',
    avatar:'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg',
  },
  {
    id: 2,
    name: 'CHF',
    avatar:'https://cdn.britannica.com/43/4543-004-C0D5C6F4/Flag-Switzerland.jpg',
  },
  {
    id: 3,
    name: 'EUR',
    avatar:'https://m.media-amazon.com/images/I/614JLqsvMoL._AC_SL1500_.jpg',
  },
  {
    id: 4,
    name: 'GBP',
    avatar:'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg',
  },
  {
    id: 5,
    name: 'JPY',
    avatar:'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/800px-Flag_of_Japan.svg.png',
  },
  {
    id: 6,
    name: 'CAD',
    avatar:'https://www.worldatlas.com/img/flag/ca-flag.jpg',
  },
]

export default function ChangeCardEn() {

  // const getData = async () => await fetchData();
  const [currencyOption1, setCurrencyOption1] = useState(currency[1]);
  const [currencyOption2, setCurrencyOption2] = useState(currency[2]);
  const [value1, setValue1] = useState(1);
  const [value2, setValue2] = useState(0);

   // currencies options for both selectors
   const [options1, setOptions1] = useState(currency);
   const [options2, setOptions2] = useState(currency);

  const [rates, setRates] = useState(null);

  useEffect(() => {
    fetch('https://api-prod.ischange.li/v1/isscreen/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: 'screen_user_29',
        password: 'vR4M7UKj2hL*#yrD1vFAtfQW',
        cid: '00000029'
      })
    })
      .then(res => res.json())
      .then(
        (result) => {
          fetch('https://api-prod.ischange.li/v1/isscreen/rates', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${result.status.data.token}`
            },
            body: JSON.stringify({
              cid: '00000029',
              checksum: result.status.data.checksum,
              curr_list: 'EUR, USD , JPY, GBP, CAD'
            })
          })
            .then(res => res.json())
            .then(
              (result) => {
                setRates(result.status.data.rates)
                console.log(result.status.data.rates)
              },
              (error) => {
                console.log({error});
              }
            );
        },
        (error) => {
          console.log(error);
        }
      );

  }, []);

  useEffect(()=>{
    setOptions2(currency.filter(o => o.id !== currencyOption1.id));
    setOptions1(currency.filter(o => o.id !== currencyOption2.id));
    if(rates){
    changeCalculation1(value1);
  }
  }, [rates, currencyOption1, currencyOption2]);


  const changeCalculation1 = value => {
    if(currencyOption1.name === 'CHF'){
      const index = rates.findIndex(obj => obj.curr_code === currencyOption2.name);
      if(value >= 1000 && currencyOption2.name === 'EUR'){
        setValue2(value/rates[index].taux_VC)
      } else {
        setValue2(value/rates[index].taux_VA)
      }
    } else {
      if(currencyOption2.name === 'CHF'){
        const index = rates.findIndex(obj => obj.curr_code === currencyOption1.name);
        setValue2(rates[index].taux_AA*value)
      } else {
      const INDEXa = rates.findIndex(obj => obj.curr_code === currencyOption1.name);
      const indexV = rates.findIndex(obj => obj.curr_code === currencyOption2.name);
      setValue2((rates[INDEXa].taux_AC*value)/rates[indexV].taux_VA)
    }
    }
  }

  const changeCalculation2 = value => {
    if(currencyOption1.name === currencyOption2.name){
      setValue2(value);
      setValue1(value);
    } else {
      setValue1(value/2);
      setValue2(value);
    }
  }

  const swapFC = () => {
    const temp1 = currencyOption2;
    const temp2 = currencyOption1;
    console.log(temp1)
    console.log(temp2)

    setCurrencyOption1(temp1);
    setCurrencyOption2(temp2);
    setValue1(value2);
    setValue2(value1);
  }

    return (
      <><div className="bg-neutral-100 pt-8 pb-20 pr-20 pl-20 rounded-r-xl rounded-tr-xl w-full shadow-lg  text-left	 rounded-b-xl">

          <h2 class="font-bold text-left pb-12 md:text-l text-xl text-blue-700 pt-4">Convert {currencyOption1.name} to {currencyOption2.name}</h2>
          <div class="flex sm:items-end justify-center sm:flex-row flex-col ">
            <div className="sm:w-1/4 sm:pb-0 pb-4 focus:border-blue-700">
              <MoneyInput disabled={false} onChange={e => {setValue1(e.target.value); changeCalculation1(e.target.value)}} value={value1}></MoneyInput>
            </div>
            <div className="sm:pl-8 sm:pb-0 hover:drop-shadow-xl pb-12">
              <CurrencySelector selectCurrency={setCurrencyOption1} swap={currencyOption1} options={options1} ></CurrencySelector>
            </div>
            <button onClick={swapFC} aria-labelledby="change currency" className="inline-flex hover:drop-shadow-xl items-center self-center justify-center w-10 h-10 mx-2 text-pink-100 transition-colors duration-150 bg-blue-600 rounded-full focus:shadow-outline hover:bg-blue-800">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>

            </button>
            <div className="sm:pr-8 hover:drop-shadow-xl sm:pt-0 pt-4">
              <CurrencySelector selectCurrency={setCurrencyOption2} swap={currencyOption2} options={options2}></CurrencySelector>
            </div>
            <div className="sm:w-1/4 sm:pt-0 pt-4">
              <MoneyInput value={value2} disabled onChange={e => changeCalculation2(e.target.value)}></MoneyInput>
            </div>
          </div>
      </div>
      </>

    )
  }