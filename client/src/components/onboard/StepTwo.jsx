import Button from "./Button";

function StepTwo() {
  return (
    <>
      <div className="flex-grow flex items-center justify-center">
        <div className="mx-auto max-w-6xl px-12 mt-20">
          <div className="text-center text-gray-400 mb-8">
            <h1 className="text-2xl font-semibold">What are you fitness goals?</h1>
          </div>
          <div className="flex flex-col gap-3">
            <Button
              text="text-sky-600"
              ring="ring-gray-500"
              description="Lose Weight"
              link="goal"
            />
            <Button
              text="text-sky-600"
              ring="ring-gray-500"
              description="Gain Muscle"
              link="goal"
            /> 
          </div>
        </div>
      </div>
    </>
  );
}

export default StepTwo;
