import React, { useState } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

function Form() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const steps = [
        <StepOne key="stepOne" />,
        <StepTwo key="stepTwo" />,
        <StepThree key="stepThree" />
    ];

    const incrementIndex = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, steps.length - 1));
    };

    const decrementIndex = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Step Component */}
            <div className="flex-grow flex items-center justify-center">
                {steps[currentIndex]}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between p-4">
                <button onClick={decrementIndex} disabled={currentIndex === 0} className="bg-gray-200 rounded p-2">
                    Back
                </button>
                <button onClick={incrementIndex} disabled={currentIndex >= steps.length - 1} className="bg-blue-500 text-white rounded p-2">
                    Next
                </button>
            </div>
        </div>
    );
}

export default Form;
