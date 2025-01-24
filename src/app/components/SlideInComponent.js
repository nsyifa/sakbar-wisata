// components/SlideInComponent.js
"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const SlideInComponent = ({ children, className }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the component is in view
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true); // Set the animated state to true
    }
  }, [inView, hasAnimated]);

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-500 ${
        hasAnimated ? "animate-slideIn" : "opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default SlideInComponent;
