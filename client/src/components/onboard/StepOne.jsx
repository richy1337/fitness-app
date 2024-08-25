function StepOne({ goal, setGoal }) {
  function handleSelect(event) {
    setGoal(event.target.value);  // Update state based on selected value
  }

  // Define your button options
  const buttonOptions = [
    { ring: "ring-gray-500", description: "Maintain Weight", value: "maintain" },
    { ring: "ring-gray-500", description: "Mild Weight Loss", value: "mildlose" },
    { ring: "ring-gray-500", description: "Weight Loss", value: "weightlose" },
    { ring: "ring-gray-500", description: "Extreme Weight Loss", value: "extremelose" },
    { ring: "ring-gray-500", description: "Mild Weight Gain", value: "mildgain" },
    { ring: "ring-gray-500", description: "Weight Gain", value: "weightgain" },
    { ring: "ring-gray-500", description: "Extreme Weight Gain", value: "extremegain" }
  ];

  return (
    <>
      <div className="flex-grow flex items-center justify-center">
        <div className="mx-auto max-w-6xl px-12 mt-20">
          <div className="text-center text-gray-400 mb-8">
            <h1 className="text-2xl font-semibold">What is your fitness goal?</h1>
          </div>
          <div className="flex flex-col gap-3">
            {buttonOptions.map((option) => (
              <Button
                key={option.value}
                ring={option.ring}
                description={option.description}
                value={option.value}
                link="goal"
                handleSelect={handleSelect}
                isChecked={goal === option.value}  // Conditionally set the `checked` attribute
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
