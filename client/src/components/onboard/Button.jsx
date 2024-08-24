function Button(props) {
    return (
      <label className="cursor-pointer">
        <input
          type="radio"
          className="peer sr-only"
          name={props.link}
          id={props.link}
        />
        <div
          className={`py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-400 focus:outline-none bg-gray-800 rounded-lg border border-gray-600 hover:bg-gray-700 focus:z-10 peer-checked:ring-2 ${props.ring} peer-checked:${props.text}`}
        >
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold uppercase">
                {props.description}
              </p>
            </div>
          </div>
        </div>
      </label>
    );
  }
  
  export default Button;
  