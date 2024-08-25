function ProgressBar({ currentIndex }) {
  const totalSteps = 4;

  return (
    <div className="flex justify-center space-x-2">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={`w-1/12 h-2 rounded-full transition-all duration-500 ${
            index <= currentIndex ? 'bg-[#4169e1]' : 'bg-gray-300'
          }`}
        ></div>
      ))}
    </div>
  );
}

export default ProgressBar;