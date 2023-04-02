import React, { useState, useEffect } from "react";

const Slideshow = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <div className="slideshow-container">
      <img
        src={images[currentIndex]}
        alt={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7WTAzSy0YiqKmabA1I1r7oF49qDUOVP2luw&usqp=CAU`}
        className="slideshow-image"
      />
    </div>
  );
};

export default Slideshow;
