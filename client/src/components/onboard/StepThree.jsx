import React, { useState } from 'react';
import Selector from './Selector';

function StepThree({ selectedHeight, setSelectedHeight, selectedWeight, setSelectedWeight, selectedAge, setSelectedAge }) {

  const heights = Array.from({ length: 101 }, (_, i) => i + 130); // Heights from 100cm to 240cm
  const weights = Array.from({ length: 121 }, (_, i) => i + 40); // Weights from 30kg to 230kg
  const age = Array.from({ length: 80}, (_, i) => i + 1 )

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