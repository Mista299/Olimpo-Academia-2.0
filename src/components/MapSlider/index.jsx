import React, { useState } from "react";

const MapSlider = () => {
  const [currentMap, setCurrentMap] = useState(0);

  const mapUrls = [
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.6216138327923!2d-75.37419929250893!3d6.146362891514239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e469f10eb0cf345%3A0x65201c593da1e85b!2sColiseo%20Iv%C3%A1n%20Ramiro%20C%C3%B3rdoba!5e0!3m2!1ses!2sco!4v1739033587832!5m2!1ses!2sco",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d707.9339230538467!2d-75.4257127564146!3d6.0287387899515075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4697005e9f6635%3A0x9dd9c5911ee8961a!2sColiseo%20de%20Combate%20Dicther%20Hans%20Toro!5e0!3m2!1ses!2sco!4v1739035102326!5m2!1ses!2sco",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d673.5622995796729!2d-75.50144146391693!3d6.063083342449034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e469b5f27eb5655%3A0x15c5b97a1db89a9b!2sCancha%20Sint%C3%A9tica%20El%20Retiro!5e1!3m2!1ses!2sco!4v1739035526330!5m2!1ses!2sco",
  ];

  const sedesTitle = ["Rionegro", "La Ceja", "El Retiro"];

  // Cambiar mapa al hacer clic en un título
  const goToMap = (index) => {
    setCurrentMap(index);
  };

  return (
    <div className="relative w-full h-96 bg-[#132a4b]">
      {/* Botón anterior */}
      <button
        onClick={() => setCurrentMap(currentMap === 0 ? mapUrls.length - 1 : currentMap - 1)}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        {"<"}
      </button>

      {/* Títulos de las sedes */}
      <h2 className="text-center text-xl font-bold mb-4 text-white pt-4">Nuestras Sedes</h2>
      <div className="flex justify-center space-x-4 mb-4">
        {sedesTitle.map((sede, index) => (
          <button
            key={index}
            onClick={() => goToMap(index)}
            className={`text-lg font-semibold py-2 px-4 rounded-lg ${
              index === currentMap
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            } hover:bg-blue-700 hover:text-white transition-colors cursor-pointer`}
          >
            {sede}
          </button>
        ))}
      </div>

      {/* Contenedor del mapa */}
      <iframe
        src={mapUrls[currentMap]}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Mapa ${currentMap + 1}`}
      ></iframe>

      {/* Botón siguiente */}
      <button
        onClick={() => setCurrentMap((currentMap + 1) % mapUrls.length)}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        {">"}
      </button>

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
