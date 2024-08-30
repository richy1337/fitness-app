function Button({ ring, description, link, handleSelect, value }) {
  return (
    <label className="cursor-pointer">
      <input
        type="radio"
        className="peer sr-only"
        name={link}
        value={value}
        onChange={handleSelect}
      />
      <div
        className={`py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-400 focus:outline-none bg-gray-800 rounded-lg border border-gray-600 hover:bg-gray-700 focus:z-10 peer-checked:ring-2 ${ring} `}
      >
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold uppercase">{description}</p>
          </div>
        </div>
      </div>
    </label>
  );
}

export default Button;