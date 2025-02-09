import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


const MapSlider = () => {
  const [currentMap, setCurrentMap] = useState(0);

  const mapUrls = [
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.6216138327923!2d-75.37419929250893!3d6.146362891514239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e469f10eb0cf345%3A0x65201c593da1e85b!2sColiseo%20Iv%C3%A1n%20Ramiro%20C%C3%B3rdoba!5e0!3m2!1ses!2sco!4v1739033587832!5m2!1ses!2sco",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d707.9339230538467!2d-75.4257127564146!3d6.0287387899515075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4697005e9f6635%3A0x9dd9c5911ee8961a!2sColiseo%20de%20Combate%20Dicther%20Hans%20Toro!5e0!3m2!1ses!2sco!4v1739035102326!5m2!1ses!2sco",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d673.5622995796729!2d-75.50144146391693!3d6.063083342449034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e469b5f27eb5655%3A0x15c5b97a1db89a9b!2sCancha%20Sint%C3%A9tica%20El%20Retiro!5e1!3m2!1ses!2sco!4v1739035526330!5m2!1ses!2sco",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1134.8364560297978!2d-75.58845244566791!3d6.25544998795818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44290ef56f4ff5%3A0x8ef25f395f02c55b!2sColiseo%20De%20Gimnasia%20Jorge%20Hugo%20Giraldo!5e1!3m2!1ses!2sco!4v1739042108984!5m2!1ses!2sco"
  ];

  const sedesTitle = ["Rionegro", "La Ceja", "El Retiro", "Medellín"];
  const sedesDescription = [
    "Nos encontramos ubicados en el Coliseo Iván Ramiro Córdoba del municipio de Rionegro.",
    "Nos encontramos ubicados en la unidad deportiva de La Ceja.                                               ",
    "Nos encontramos ubicados en la unidad deportiva, al lado de la cancha sintética del municipio de El Retiro.",
    "Nos encontramos ubicados en la unidad deportiva Atanasio Girardot, sector Estadio, Coliseo de gimnasia.",
  ];

  const goToMap = (index) => {
    setCurrentMap(index);
  };

  return (
    <div className="relative w-full bg-[#132a4b]">
        {/* Títulos de las sedes */}
        <div className="w-full sm:w-3/4 md:w-3/4 lg:w-1/2 min-h-[200px] max-w-2lg p-6 bg-[#000d35] rounded-lg shadow-lg mx-auto mt-10 mb-10 text-center text-white">
            <h2 className="text-center text-3xl font-bold mb-4 text-white pt-4">Nuestras Sedes</h2>
            <div className="mb-4 grid grid-cols-2 md:grid-cols-4 gap-6">
                {sedesTitle.map((sede, index) => (
                <button
                    key={index}
                    onClick={() => goToMap(index)}
                    className={`${
                    index === currentMap
                        ? "bg-[#61CE70] text-white"
                        : "bg-[#044c94] text-white"
                    } px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:bg-[#61CE70] hover:text-white text-xl`}
                >
                    {sede}
                </button>
                ))}
            </div>
            <p className="flex justify-center align-items text-xl">{sedesDescription[currentMap]}</p>
        </div>


      {/* Contenedor del mapa */}
      <div className="relative w-full h-[500px]">
        {/* Botón anterior */}
        <button
          onClick={() => setCurrentMap(currentMap === 0 ? mapUrls.length - 1 : currentMap - 1)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-10 cursor-pointer"
        >
          <FaArrowLeft />
        </button>

        {/* Mapa */}
        <iframe
          src={mapUrls[currentMap]}
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Mapa ${currentMap + 1}`}
        ></iframe>

        {/* Botón siguiente */}
        <button
          onClick={() => setCurrentMap((currentMap + 1) % mapUrls.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-10 cursor-pointer"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Indicador del mapa actual */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 py-2">
        {mapUrls.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentMap ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default MapSlider;
