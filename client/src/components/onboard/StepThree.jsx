import React, { useState } from 'react';
import Selector from './Selector';

function StepThree() {
  const [selectedHeight, setSelectedHeight] = useState(170); // default height in cm
  const [selectedWeight, setSelectedWeight] = useState(70); // default weight in kg
  const [selectedAge, setSelectedAge] = useState(20);

  const heights = Array.from({ length: 141 }, (_, i) => i + 100); // Heights from 100cm to 240cm
  const weights = Array.from({ length: 201 }, (_, i) => i + 30); // Weights from 30kg to 230kg
  const age = Array.from({ length: 80}, (_, i) => i + 5 )

  return (
    <div className="flex-grow flex items-center justify-center">
        <div className="mx-auto max-w-6xl px-12 mt-20">
          <div className="flex flex-row gap-20">
            <Selector
              label="Height (cm)"
              options={heights}
              selectedValue={selectedHeight}
              onSelect={setSelectedHeight}
            />
            <Selector
              label="Weight (kg)"
              options={weights}
              selectedValue={selectedWeight}
              onSelect={setSelectedWeight}
            />
            <Selector
              label="Age (years)"
              options={age}
              selectedValue={selectedAge}
              onSelect={setSelectedAge}
            />
          </div>
        </div>
    </div>
  );
}

export default StepThree;