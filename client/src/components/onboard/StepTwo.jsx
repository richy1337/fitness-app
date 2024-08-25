import Button from "./Button";

function StepTwo({ activityLevel, setActivityLevel }) {
  function handleSelect(event) {
    setActivityLevel(event.target.value);
  }

  // Define your button options
  const buttonOptions = [
    { ring: "ring-gray-500", description: "Sedentary (little to no exercise)", value: "2" },
    { ring: "ring-gray-500", description: "Exercise 1-3 days/week", value: "3" },
    { ring: "ring-gray-500", description: "Exercise 4-5 days/week", value: "4" },
    { ring: "ring-gray-500", description: "Intense exercise 3-4 days/week", value: "5" },
    { ring: "ring-gray-500", description: "Intense exercise 6-7 days/week", value: "6" },
    { ring: "ring-gray-500", description: "Very intense exercise daily or physical job", value: "7" }
  ];

  return (
    <div className="flex-grow flex items-center justify-center">
      <div className="mx-auto max-w-6xl px-12 mt-20">
        <div className="text-center text-gray-400 mb-8">
          <h1 className="text-2xl font-semibold">What is your activity level?</h1>
        </div>
        <div className="flex flex-col gap-3">
          {buttonOptions.map((option) => (
            <Button
              key={option.value}
              ring={option.ring}
              description={option.description}
              value={option.value}
              link="activity"
              handleSelect={handleSelect}
              isChecked={activityLevel === option.value}  // Conditionally set the `checked` attribute
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default StepTwo;
