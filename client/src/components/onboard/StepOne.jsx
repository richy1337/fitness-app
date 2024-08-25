import Button from "./Button";

function StepOne() {
  return (
    <>
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-6xl px-12">
          <div className="text-center text-gray-400 mb-8">
            <h1 className="text-2xl font-semibold">What is your sex?</h1>
          </div>
          
          <div className="flex justify-center gap-6">
            <Button 
              text="text-sky-600" 
              ring="ring-blue-400"
              description="Male ♂" 
              link="gender"
              className="w-32 h-12"
            />
            <Button
              text="text-pink-700"
              ring="ring-pink-400"
              description="Female ♀"
              link="gender"
              className="w-32 h-12"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default StepOne;
