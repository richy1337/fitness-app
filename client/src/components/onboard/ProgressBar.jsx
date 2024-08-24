function ProgressBar({ currentIndex }) {
  return (
    <div class="flex justify-center space-x-2">
      <div class="w-1/12 h-2 bg-[#4169e1] rounded-full"></div>
      <div class="w-1/12 h-2 bg-[#4169e1] rounded-full"></div>
      <div class="w-1/12 h-2 bg-[#4169e1] rounded-full"></div>
      <div class="w-1/12 h-2 bg-gray-300 rounded-full"></div>
    </div>
  );
}

export default ProgressBar;
