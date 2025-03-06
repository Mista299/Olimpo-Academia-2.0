import { useEffect, useState } from 'react';

const Alert = ({ type, message }) => {
  const [visible, setVisible] = useState(true);

  const baseStyle = 'px-4 py-2 rounded-md text-center text-white bg-opacity-75 shadow-md relative';
  const typeStyle = type === 'success' ? 'bg-green-500' : 'bg-red-500';

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000); // 5000 milisegundos = 5 segundos
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null; // Si no es visible, no se renderiza

  return (
    <div className={`${baseStyle} ${typeStyle}`}>
      <span>{message}</span>
      <button
        onClick={() => setVisible(false)}
        className="absolute top-0 right-0 p-1 text-lg font-bold text-white"
      >
        &times; {/* X para cerrar */}
      </button>
    </div>
  );
};

export default Alert;
