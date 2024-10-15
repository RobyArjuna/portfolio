// src/components/AnimatedText.jsx
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const AnimatedText = () => {
  return (
    <div className="flex justify-center items-center">
      {/* Block behind the text */}
      <div className="bg-[#124076] p-2 rounded-lg text-bold">
        <TypeAnimation
          sequence={['I Love to Code', 1000, 'Tech Enthusiast', 1000, 'Front-End Developer', 1000]}
          speed={50}
          repeat={Infinity}
          className="text-[#ffffff] font-bold"
        />
      </div>
    </div>
  );
};

export default AnimatedText;
