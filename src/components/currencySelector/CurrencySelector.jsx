import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const currency  = [
  {
    id: 1,
    name: 'USD',
    avatar:'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg',
    symbol:'$'
  },
  {
    id: 2,
    name: 'CHF',
    avatar:'https://cdn.britannica.com/43/4543-004-C0D5C6F4/Flag-Switzerland.jpg',
    symbol: 'CHF',
  },
  {
    id: 3,
    name: 'EUR',
    avatar:'https://m.media-amazon.com/images/I/614JLqsvMoL._AC_SL1500_.jpg',
    symbol: '€'
  },
  {
    id: 4,
    name: 'GBP',
    avatar:'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg',
    symbol: '£'
  },
  {
    id: 5,
    name: 'JPY',
    avatar:'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/800px-Flag_of_Japan.svg.png',
    symbol: '¥'
  },
  {
    id: 6,
    name: 'CAD',
    avatar:'https://www.worldatlas.com/img/flag/ca-flag.jpg',
    symbol:'CAD'
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function CurrencySelector({selectCurrency , swap, options}) {
  const [selected, setSelected] = useState(currency[2])

  useEffect(() => {
    if(swap != selected && swap != undefined){
      setSelected(swap);
    }
  },[swap])
  
  const setterFunction = val => {
    selectCurrency(val);
    setSelected(val);
  }
  return (
    <Listbox value={selected} onChange={setterFunction}>
      {({ open }) => (
        <>
          <div className="h-min align-bottom">
            <Listbox.Button aria-labelledby="list des monnais" className="relative sm:w-36 w-26 cursor-pointer rounded-md border border-neutral-500 bg-white sm:py-2 py-3 pl-3 pr-12 text-left shadow-sm focus:border-blue-700 focus:outline-none sm:text-sm">
              <span className="flex items-center">
                <img src={selected.avatar} alt="" className="h-6 w-6 sm:flex-shrink-0 rounded-full" />
                <span className="sm:ml-3 ml-2 block sm:truncate">{selected.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center sm:pr-2 pr-1">
                <ChevronUpDownIcon className="h-5 w-5 text-neutral-500" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute  z-10 mt-1 max-h-56 w-36 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {options.map((option) => (
                  <Listbox.Option
                    key={option.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-blue-700' : 'text-neutral-500',
                        'relative cursor-pointer select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <img src={option.avatar} alt="" className="h-6 w-6 flex-shrink-0 rounded-full" />
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            {option.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-blue-700',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}