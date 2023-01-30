
export default function MoneyInput({value,onChange}) {
    return (
      <div>
        <div className="relative mt-1 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-neutral-500 sm:text-sm">$</span>
          </div>
          <input
            type="text"
            name="price"
            id="price"
            className="block w-full rounded-md border-neutral-500 pl-7 h-[43px] pr-12 focus:ring-blue-700 focus:outline-none focus:ring-2 focus:border-blue-700 sm:text-sm"
            placeholder="0.00"
            value={value}
            onChange={onChange}
          >
          
          </input>
        </div>
      </div>
    )
  }