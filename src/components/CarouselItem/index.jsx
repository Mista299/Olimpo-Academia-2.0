const CarouselItem = ({ img }) => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Capa desenfocada de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${img})`,
          filter: 'blur(10px)', // Ajuste del desenfoque de fondo
        }}
      ></div>

      {/* Imagen principal */}
      <img
        src={img}
        alt="Carousel producto"
        className="relative z-10 h-full w-auto mx-auto object-contain"
      />
    </div>
  );
};

export default CarouselItem;
