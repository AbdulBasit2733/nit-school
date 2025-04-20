// components/LottieAnimation.jsx
import React from "react";
import Lottie from "lottie-react";
import animatedData from '@/public/animations/education.json'

const EducationAnimation = ({ loop = true, autoplay = true, className = "" }) => {
  return (
    <div className={className}>
      <Lottie animationData={animatedData} loop={loop} autoplay={autoplay} />
    </div>
  );
};

export default EducationAnimation;
