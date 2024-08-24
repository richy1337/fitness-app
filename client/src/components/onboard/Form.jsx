import { useState } from "react";

import ProgressBar from "./ProgressBar"
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import Navigation from "./Navigation";


function Form() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const steps = [
    <StepOne key="stepOne" />,
    <StepTwo key="stepTwo" />,
    <StepThree key="stepThree" />,
    <StepFour key="stepFour" /> 
  ];

  const incrementIndex = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, steps.length - 1));
  };

  const decrementIndex = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };


  return (
    <div className="flex flex-col min-h-screen font-inter bg-[#0E1729]">
      <ProgressBar currentIndex={currentIndex}/>

      {steps[currentIndex]}

      <Navigation steps={steps} currentIndex={currentIndex} incrementIndex={incrementIndex} decrementIndex={decrementIndex}/>
    </div>
  );
}

export default Form;
