import Button from "./Button";

function StepTwo({ activityLevel, setActivityLevel }) {
    function handleSelect(event) {
        setActivityLevel(event.target.value);
    }

    const buttonOptions = [
        {
            ring: "ring-gray-500",
            description: "Sedentary (little to no exercise)",
            value: "sedentary",
        },
        {
            ring: "ring-gray-500",
            description: "Exercise 1-3 days/week",
            value: "lightly_active",
        },
        {
            ring: "ring-gray-500",
            description: "Exercise 4-5 days/week",
            value: "moderately_active",
        },
        {
            ring: "ring-gray-500",
            description: "Intense exercise 6-7 days/week",
            value: "very_active",
        },
        {
            ring: "ring-gray-500",
            description: "Very intense exercise daily or physical job",
            value: "extra_active",
        },
    ];

    return (
        <div className="flex-grow flex items-center justify-center">
            <div className="mx-auto max-w-6xl px-12 mt-20">
                <div className="text-center text-gray-400 mb-8">
                    <h1 className="text-2xl font-semibold">
                        What is your activity level?
                    </h1>
                </div>
                <div className="flex flex-col gap-3">
                    {buttonOptions.map((option, index) => (
                        <Button
                            key={index}
                            ring={option.ring}
                            description={option.description}
                            value={option.value}
                            link="activity"
                            handleSelect={handleSelect}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default StepTwo;
