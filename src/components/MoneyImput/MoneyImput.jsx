  export default function MoneyInput({value, currency, onChange, disabled}) {
    return (
      <div>
        <div className="relative sm:mt-1 mt-0 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center sm:pl-3 pl-1">
            <div className="text-neutral-500 sm:text-sm ">{currency}</div>
          </div>
          <input
            type="number"
            name="price"
            id="price"
            className="block w-full rounded-md border-neutral-500 disabled:bg-white sm:pl-10 pl-8 pr-1 sm:h-[43px] h-[50px] sm:pr-12 focus:ring-blue-700 focus:outline-none focus:ring-2 focus:border-blue-700 sm:text-sm"
            placeholder="0.00"
            pattern="^\d+(?:\.\d{1,2})?$"
            value={value % 1 === 0 ? value : parseFloat(value).toFixed(4)}
            disabled={disabled}
            onChange={onChange}
            prefix={currency}
          />
        </div>
      </div>
    );
  }