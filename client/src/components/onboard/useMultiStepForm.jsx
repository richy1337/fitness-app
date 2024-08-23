import { useState } from "react"

function useMultiStepForm(steps) {
    const [currentStep, setCurrentStep] = useState(0)
    
    function next() {
        setCurrentStep(i => {
            if (i >= steps.length - 1) return i
            return i + 1
        })

    }

    function back() {
        setCurrentStep(i => {
            if (i <= 0) return i
            return i + 1
        })
    }

    const step = steps[currentStep]
    
    return {
        step, 
        next,
        back,
    }
}

export default useMultiStepForm;
