import React, { useState, useEffect } from "react";
import image1 from "../../imgs/carousel1.webp";
import image2 from "../../imgs/carousel2.webp";
import image3 from "../../imgs/carousel3.webp";
import CarouselItem from "../CarouselItem";

const Carousel = () => {
  const images = [image1, image2, image3];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Cambia de imagen cada 5 segundos
    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Usamos el componente CarouselItem */}
          <CarouselItem img={image} />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
