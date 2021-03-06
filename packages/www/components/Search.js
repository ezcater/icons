export default ({ value, onChange }) => {
  return (
    <div className="sticky top-0 z-40">
      <div className="-mx-2 -mb-8 px-2 bg-kale-green" style={{ height: 'calc(14 * 0.25rem)' }} />

      <div className="relative">
        <span className="relative inline-block w-full">
          <input
            className="focus:outline-0 border border-transparent focus:border-gray-300 placeholder-gray-600 rounded-lg bg-white py-2 pr-4 pl-10 block w-full appearance-none leading-normal outline-none shadow-md focus:shadow-outline"
            type="text"
            placeholder="Search"
            autoComplete="off"
            spellCheck="false"
            value={value}
            onChange={onChange}
          />
        </span>
        <div className="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center">
          <svg
            className="fill-current pointer-events-none text-gray-600 w-4 h-4"
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
