import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Modal from '../../components/Modal'

const FormularioInscripcion = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_ptj4gpl', 
      'template_9tpa1v6',
      form.current,
      'qM6vf9fTAhPWWbZ3s'
    )
    .then((result) => {
      alert('Formulario enviado exitosamente!');
    }, (error) => {
      alert('Error al enviar el formulario: ' + error.text);
    });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="md:max-w-4xl mx-auto p-8 rounded-lg shadow-lg p-6 rounded-xl text-white mb-6 items-center h-full">
      <h2 className="text-2xl mb-4 text-center font-bold mb-2">Inscripciones Olimpo Academia de Gimnasia</h2>
      <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-8">
        <div className="space-y-4">
          <label className='block text-gray-300 text-md font-bold mb-2'>Nombres y Apellidos del Deportista</label>
          <input type="text" name="nombre_deportista" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#61CE70] bg-[rgba(55, 65, 81, 1)] text-white" required />

          <label className='block text-gray-300 text-md font-bold mb-2'>Cédula o Tarjeta de Identidad del Deportista</label>
          <input type="text" name="cedula_deportista" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#61CE70] bg-[rgba(55, 65, 81, 1)] text-white" required />

          <label className='block text-gray-300 text-md font-bold mb-2'>Dirección de Residencia</label>
          <input type="text" name="direccion_deportista" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#61CE70] bg-[rgba(55, 65, 81, 1)] text-white" required />

          <label className='block text-gray-300 text-md font-bold mb-2'>Teléfono Deportista</label>
          <input type="tel" name="telefono_deportista" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#61CE70] bg-[rgba(55, 65, 81, 1)] text-white" required/>

          <label className='block text-gray-300 text-md font-bold mb-2'>EPS del Deportista</label>
          <input type="text" name="eps_deportista" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#61CE70] bg-[rgba(55, 65, 81, 1)] text-white" required />
        </div>
        <div className="space-y-8">
          <label className='block text-gray-300 text-md font-bold mb-2'>Fecha de Nacimiento del Deportista</label>
          <input type="date" name="fecha_nacimiento_deportista" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#61CE70] bg-[rgba(55, 65, 81, 1)] text-white" required />

          <label className='block text-gray-300 text-md font-bold mb-2'>Nombre Completo de la Madre o Padre</label>
          <input type="text" name="nombre_padre_madre" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#61CE70] bg-[rgba(55, 65, 81, 1)] text-white" required />

          <label className='block text-gray-300 text-md font-bold mb-2'>Sede</label>
          <select name="horario_sede" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#61CE70] bg-[rgba(55, 65, 81, 1)] text-white" required>
            <option value="Medellin, Miércoles 5 pm">Rionegro</option>
            <option value="Medellin, Miércoles 5 pm">La Ceja</option>
            <option value="Medellin, Miércoles 5 pm">El Retiro</option>
            <option value="Medellin, Miércoles 5 pm">Medellín</option>

          </select>

          <label className='block text-gray-300 text-md font-bold'>
            <input type="checkbox" name="terminos" className="" required /> Acepto términos y condiciones de la <a className="text-blue-500 cursor-pointer" onClick={openModal}>política de privacidad</a>
          </label>
            
          <button className="w-full px-4 py-2 rounded-lg font-semibold transition-all duration-300 bg-[#044c94] hover:bg-[#61CE70] hover:text-white text-xl">
            Enviar
          </button>
        </div>
      </form>


      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="max-h-[50vh] overflow-y-auto p-4">
          <h2 className="text-2xl mb-4">Política de privacidad y de tratamiento de datos personales</h2>
          <p className="text-justify">
            En Club olimpo de gimnasia, reconocemos la importancia de la privacidad y la protección de los datos personales de nuestros usuarios. A pesar de no utilizar cookies, recopilamos información limitada y necesaria para mejorar la experiencia del usuario y brindar un servicio personalizado. Los datos proporcionados, como nombre, correo electrónico o información de contacto, se utilizan exclusivamente para facilitar la comunicación entre el sitio y sus usuarios, garantizando la confidencialidad y no compartiéndolos con terceros sin consentimiento expreso. Todos los datos se almacenan de forma segura y se eliminan cuando ya no sean necesarios para los fines establecidos. Nuestra prioridad es salvaguardar la información de nuestros usuarios y asegurar el cumplimiento de las normativas de protección de datos vigentes.
            <br />
            Al aceptar la casilla de verificación y utilizar el sitio web Club olimpo de gimnasia, usted acepta automáticamente los términos y condiciones de nuestra Política de Tratamiento de Datos Personales. Si no está de acuerdo con estos términos, le recomendamos abstenerse de utilizar nuestros servicios. Su uso continuo del sitio implica la aceptación de nuestra política de privacidad y el manejo de sus datos personales según lo establecido en la misma.
            <br />
            Club Olimpo Copyright 2024
          </p>
        </div>
      </Modal>

    </div>
  );
};

export default FormularioInscripcion;