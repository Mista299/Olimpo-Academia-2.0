import { FaWhatsapp } from 'react-icons/fa';

const ButtonWhatsapp = () => {
    return (
        <a
          href="https://api.whatsapp.com/send/?phone=573174535342&text=Hola+vengo+del+sitio+web%2C+y+necesito+m%C3%A1s+informaci%C3%B3n+sobre+las+membres%C3%ADas+y+servicios&type=phone_number&app_absent=0" // Reemplaza con tu número de WhatsApp
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 ease-in-out z-51"
        >
          <FaWhatsapp className="w-10 h-10" />
        </a>
      );
}

export default ButtonWhatsapp