import Button from "./Button";

function StepFour({ sex, setSex }) {
  function handleSelect(event) {
    setSex(event.target.value);
  }

  const buttonOptions = [
    { ring: "ring-blue-400", description: "Male ♂", value: "male" },
    { ring: "ring-pink-400", description: "Female ♀", value: "female" },
  ];

  return (
    <>
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-6xl px-12">
          <div className="text-center text-gray-400 mb-8">
            <h1 className="text-2xl font-semibold">What is your sex?</h1>
          </div>
          <div className="flex justify-center gap-6">
            {buttonOptions.map((option, index) => (
              <Button
                key={index}
                ring={option.ring}
                description={option.description}
                value={option.value}
                link="gender"
                handleSelect={handleSelect}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default StepFour;
