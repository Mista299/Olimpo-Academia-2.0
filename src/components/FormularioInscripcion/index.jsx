import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Modal from '../../components/Modal';
import Alert from '../../components/Alert';

const FormularioInscripcion = () => {
  const form = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alert, setAlert] = useState({ type: '', message: '' });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const sendEmail = () => {
    return emailjs.sendForm(
      'service_ptj4gpl', 
      'template_9tpa1v6',
      form.current,
      'qM6vf9fTAhPWWbZ3s'
    );
  };

  const formDataToJSON = (formData) => {
    const data = {};
    formData.forEach((value, key) => {
      // Filtra el campo 'terminos' para que no se agregue
      if (key !== 'terminos') {
        data[key] = value;
      }
    });
    return data;
  };
  const sendToAPI = async (data) => {
    console.log("Datos enviados:", data); // Verificar los datos que estás enviando
    try {
      const response = await fetch('https://olimpo-api.vercel.app/api/deportistas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Error al enviar los datos');
      }
      const result = await response.json();
      console.log("Respuesta de la API:", result);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);

    const data = formDataToJSON(formData);
    console.log("probando la formDataToJSON")
    console.log(data)

    try {
      await Promise.all([sendEmail(), sendToAPI(data)]);
      setAlert({ type: 'success', message: 'Inscripción exitosa' });
    } catch (error) {
      setAlert({ type: 'error', message: `Ocurrió un error: ${error.message}` });
    }
  };

  return (
    <div className="md:max-w-4xl mx-auto p-8 rounded-lg shadow-lg p-6 rounded-xl text-white mb-6 items-center h-full">
      {alert.message && (
        <Alert type={alert.type} message={alert.message} /> // Mostrar alerta si hay mensaje
      )}
      <h2 className="text-2xl mb-4 text-center font-bold mb-2">Inscripciones Olimpo Academia de Gimnasia</h2>
      <form ref={form} onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-8">
        <div className="space-y-4">
          <label className='block text-gray-300 text-md font-bold mb-2'>Nombres y Apellidos del Deportista</label>
          <input type="text" name="nombre_deportista" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#61CE70] bg-[rgba(55, 65, 81, 1)] text-white" required />

          <label className='block text-gray-300 text-md font-bold mb-2'>Cédula o Tarjeta de Identidad del Deportista</label>
          <input type="text" name="cedula_deportista" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#61CE70] bg-[rgba(55, 65, 81, 1)] text-white" required />

          <label className='block text-gray-300 text-md font-bold mb-2'>Dirección de Residencia</label>
          <input type="text" name="direccion_deportista" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#61CE70] bg-[rgba(55, 65, 81, 1)] text-white" required />

          <label className='block text-gray-300 text-md font-bold mb-2'>Celular</label>
          <input type="tel" name="telefono_deportista" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#61CE70] bg-[rgba(55, 65, 81, 1)] text-white" required />

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
            Al aceptar la casilla de verificación y utilizar el sitio web Club olimpo de gimnasia, usted acepta automáticamente los términos y condiciones de nuestra Política de Tratamiento de Datos Personales. Si no está de acuerdo con estos términos, le recomendamos abstenerse de utilizar nuestros servicios. Su uso continuo del sitio implica la aceptación de cualquier cambio futuro en la política.
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default FormularioInscripcion;
