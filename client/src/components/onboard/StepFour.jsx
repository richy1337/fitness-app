import Button from "./Button";

function StepFour() {
  return (
    <div className="flex-grow flex items-center justify-center">
      <div className="mx-auto max-w-6xl px-12 mt-20">
        <div className="flex flex-col gap-3">
          <Button
            text="text-sky-600"
            ring="ring-gray-500"
            description="Sedentary (little to no exercise)"
            link="activity"
          />
          <Button
            text="text-sky-600"
            ring="ring-gray-500"
            description="Lightly Active (light exercise 1-3 days/week)"
            link="activity"
          />
          <Button
            text="text-sky-600"
            ring="ring-gray-500"
            description="Moderatively Active (moderate exercise 3-5 days/week)"
            link="activity"
          />
          <Button
            text="text-sky-600"
            ring="ring-gray-500"
            description="Very Active (hard exercise 6-7 days/week)"
            link="activity"
          />
        </div>
      </div>
    </div>
  );
}

export default StepFour;
