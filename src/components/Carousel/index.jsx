import React, { useState, useEffect } from "react";
import image1 from "../../imgs/carousel1.webp";
import image2 from "../../imgs/carousel2.webp";
import image3 from "../../imgs/carousel3.webp";
import CarouselItem from "../CarouselItem";
import logo from "../../imgs/logo2.webp"; // Asegúrate de importar el logo
import './styles.css'; // Importamos el archivo CSS

const Carousel = () => {
  const images = [image1, image2, image3];

  // Estado para el índice actual de la imagen
  const [currentIndex, setCurrentIndex] = useState(0);

  // Estado para mostrar/ocultar el logo
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    // Mostrar el logo al inicio y ocultarlo después de 5 segundos
    const logoTimeout = setTimeout(() => {
      setShowLogo(false);
    }, 5000); // 5 segundos para ocultar el logo

    return () => clearTimeout(logoTimeout);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Cambia de imagen cada 5 segundos

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <div className="carousel-container relative h-screen w-full overflow-hidden">
      {/* Capa de opacidad transparente detrás del logo */}
      {showLogo && <div className="opacity-layer"></div>}

      {/* Logo en el centro, solo visible los primeros 5 segundos */}
      {showLogo && (
        <div className={`logo-container absolute inset-0 flex items-center justify-center ${showLogo ? 'fade-in' : 'fade-out'}`}>
          <img
            src={logo}
            alt="Academia Logo"
            className="logo"
          />
        </div>
      )}

      {/* Imágenes del carrusel */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          } z-10`}
        >
          <CarouselItem img={image} />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
