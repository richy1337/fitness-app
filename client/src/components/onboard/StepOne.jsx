import Button from "./Button";

function StepOne() {
  return (
    <>
      <div className="mx-auto text-gray-400">
        <h1>What is your sex?</h1>
      </div>
      
      <div className="flex-grow flex items-center justify-center">
        <div className="mx-auto max-w-6xl px-12 mt-20">
          <div className="flex flex-wrap gap-3">
            <Button 
              text="text-sky-600" 
              ring="ring-blue-400"
              description="Male ♂" 
              link="gender"
            />
            <Button
              text="text-pink-700"
              ring="ring-pink-400"
              description="Female ♀"
              link="gender"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default StepOne;
