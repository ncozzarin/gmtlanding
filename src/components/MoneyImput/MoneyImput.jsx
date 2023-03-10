
export default function MoneyInput({value,onChange,disabled}) {


    return (
      <div className="">
        <div className="relative sm:mt-1 mt-0 rounded-md  shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-neutral-500 sm:text-sm">$</span>
          </div>
          <input
            type="number"
            name="price"
            id="price"
            className="block w-full rounded-md border-neutral-500 disabled:bg-white pl-7 sm:h-[43px] h-[50px] pr-12 focus:ring-blue-700 focus:outline-none focus:ring-2 focus:border-blue-700 sm:text-sm"
            placeholder="0.00"
            pattern="^\d+(?:\.\d{1,2})?$"
            value={value % 1 === 0 ? value : parseFloat(value).toFixed(4)}
            disabled={disabled}
            onChange={onChange}
          >
          
          </input>
        </div>
      </div>
    )
  }