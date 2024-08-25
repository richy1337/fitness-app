function Selector({ label, options, selectedValue, onSelect }) {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="text-xl font-bold mb-4 text-gray-400 whitespace-nowrap">{label}</div>
      <div className="relative h-48 w-full">
        <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden">
          {options.map((option, index) => {
            const distance = Math.abs(option - selectedValue);
            let scale, opacity, textSize, textColor;

            if (distance === 0) {
              scale = 'scale-110';
              opacity = 'opacity-100';
              textSize = 'text-2xl';
              textColor = 'text-gray-400';
            } else if (distance === 1) {
              scale = 'scale-105';
              opacity = 'opacity-75';
              textSize = 'text-xl';
              textColor = 'text-gray-400';
            } else if (distance === 2) {
              scale = 'scale-100';
              opacity = 'opacity-50';
              textSize = 'text-lg';
              textColor = 'text-gray-400';
            } else if (distance === 3) {
              scale = 'scale-95';
              opacity = 'opacity-25';
              textSize = 'text-base';
              textColor = 'text-gray-400';
            } else {
              return null;
            }

            return (
              <div
                key={option}
                onClick={() => onSelect(option)}
                className={`absolute w-full text-center transform transition-transform duration-200 cursor-pointer ${scale} ${opacity} ${textSize} ${textColor}`}
                style={{
                  top: `${(index - options.indexOf(selectedValue)) * 40 + 80}px`,
                  transition: 'top 0.2s ease-in-out',
                }}
              >
                {option}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Selector;
