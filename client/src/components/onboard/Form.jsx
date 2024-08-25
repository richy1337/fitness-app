import { useState } from "react";

import ProgressBar from "./ProgressBar";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import Navigation from "./Navigation";

function Form() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [goal, setGoal] = useState();
  const [activityLevel, setActivityLevel] = useState();
  const [selectedHeight, setSelectedHeight] = useState(170); 
  const [selectedWeight, setSelectedWeight] = useState(70); 
  const [selectedAge, setSelectedAge] = useState(20);
  const [sex, setSex] = useState()

  const steps = [
    <StepOne key="stepOne" goal={goal} setGoal={setGoal} />,
    <StepTwo key="stepTwo" activityLevel={activityLevel} setActivityLevel={setActivityLevel} />,
    <StepThree key="stepThree" 
      selectedHeight={selectedHeight} 
      setSelectedHeight={setSelectedHeight}
      selectedWeight={selectedWeight}
      setSelectedWeight={setSelectedWeight}
      selectedAge={selectedAge}
      setSelectedAge={setSelectedAge}/>,
    <StepFour key="stepFour" sex={sex} setSex={setSex}/>,
  ];

  const incrementIndex = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, steps.length - 1));
  };

  const decrementIndex = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  
  return (
    <div className="flex flex-col min-h-screen font-inter bg-gradient-to-r from-[#0E1729] to-[#1E2A42] p-6">
      <ProgressBar currentIndex={currentIndex} />

      <div className="flex-grow flex flex-col items-center justify-center">
        {steps[currentIndex]}
      </div>

      <Navigation
        steps={steps}
        currentIndex={currentIndex}
        incrementIndex={incrementIndex}
        decrementIndex={decrementIndex}
      />
    </div>
  );
}

export default Form;
