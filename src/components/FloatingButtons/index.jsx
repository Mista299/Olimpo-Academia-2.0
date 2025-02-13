import { FaWhatsapp, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const ButtonWhatsapp = () => {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=573174535342&text=Hola+vengo+del+sitio+web%2C+y+necesito+m%C3%A1s+informaci%C3%B3n+sobre+las+membres%C3%ADas+y+servicios&type=phone_number&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-2 rounded-full shadow-lg hover:bg-green-600 transition duration-300 ease-in-out z-50 mb-4"
    >
      <FaWhatsapp className="w-10 h-10" />
    </a>
  );
};

const ButtonFacebook = () => {
  return (
    <a
      href="https://www.facebook.com/profile.php?id=100063717843118"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out z-50 mb-4"
    >
      <FaFacebook className="w-8 h-8" />
    </a>
  );
};

const ButtonInstagram = () => {
  return (
    <a
      href="https://www.instagram.com/olimpogimnasia/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-36 right-4 bg-pink-500 text-white p-3 rounded-full shadow-lg hover:bg-pink-600 transition duration-300 ease-in-out z-50 mb-4"
    >
      <FaInstagram className="w-8 h-8" />
    </a>
  );
};

const ButtonYoutube = () => {
  return (
    <a
      href="https://www.youtube.com/@olimpoacademia"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-56 right-4 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition duration-300 ease-in-out z-50"
    >
      <FaYoutube className="w-8 h-8" />
    </a>
  );
};

const FloatingButtons = () => {
  return (
    <>
      <ButtonWhatsapp />
      <ButtonFacebook />
      <ButtonInstagram />
      <ButtonYoutube />
    </>
  );
};

export default FloatingButtons;
