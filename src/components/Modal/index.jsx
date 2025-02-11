import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Si el modal no está abierto, no se renderiza.

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 p-4">
      <div className="max-w-lg w-full max-h-screen mx-auto p-8 shadow-lg bg-[#000d35] rounded-xl text-white relative overflow-y-auto">

        {/* Botón de cerrar en la esquina superior derecha */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-500 text-2xl focus:outline-none"
        >
          &times;
        </button>

        {/* Contenido del modal */}
        <div className="mb-4">
          {children}
        </div>

        {/* Botón para aceptar términos */}
        <button 
          type="submit" 
          className="bg-green-500 text-white px-6 py-2 rounded-lg mt-4 hover:bg-green-700 transition w-full"
          onClick={onClose}
        >
          Aceptar términos
        </button>
      </div>
    </div>
  );
};

export default Modal;
