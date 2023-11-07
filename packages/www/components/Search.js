export default ({value, onChange}) => {
  return (
    <div className="sticky top-0 z-40">
      <div className="-mx-2 -mb-8 bg-kale-green px-2" style={{height: 'calc(14 * 0.25rem)'}} />

      <div className="relative">
        <span className="relative inline-block w-full">
          <input
            className="focus:shadow-outline block w-full appearance-none rounded-lg border border-transparent bg-white py-2 pl-10 pr-4 leading-normal placeholder-gray-600 shadow-md outline-none focus:border-gray-300 focus:outline-0"
            type="text"
            placeholder="Search"
            autoComplete="off"
            spellCheck="false"
            value={value}
            onChange={onChange}
          />
        </span>
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
          <svg
            className="pointer-events-none h-4 w-4 fill-current text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};
