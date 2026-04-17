"use client";

import React from "react";
import Lottie from "lottie-react";

interface LottieAnimationProps {
  animationPath: string;
  className?: string;
  loop?: boolean;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ 
  animationPath, 
  className, 
  loop = true 
}) => {
  const [animationData, setAnimationData] = React.useState<any>(null);

  React.useEffect(() => {
    fetch(animationPath)
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Error loading Lottie animation:", err));
  }, [animationPath]);

  if (!animationData) return <div className={className} />;

  return (
    <div className={className}>
      <Lottie 
        animationData={animationData} 
        loop={loop}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default LottieAnimation;
