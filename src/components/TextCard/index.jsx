const TextCard = ({ title, textButton, children }) => {
  return (
    <div className="flex flex-col p-6 bg-[#000d35] rounded-lg shadow-lg text-white mb-6 items-center justify-between h-full">
      <div>
        <h2 className="text-2xl mb-15">{title}</h2> {/* Cambié `mb-15` por `mb-4` para mantener consistencia */}
        <p className="text-justify">
          {children}
        </p>
      </div>
      <a 
        href="https://api.whatsapp.com/send/?phone=573174535342&text=Hola+vengo+del+sitio+web%2C+y+necesito+m%C3%A1s+informaci%C3%B3n+sobre+las+membres%C3%ADas+y+servicios&type=phone_number&app_absent=0" 
        target="_blank"
      >
        <button className="border-2 border-white text-white bg-transparent hover:bg-[#61CE70] hover:text-white px-6 py-2 rounded-lg transition duration-300 ease-in-out">
          {textButton}
        </button>
      </a>
    </div>
  );
};

export default TextCard;
