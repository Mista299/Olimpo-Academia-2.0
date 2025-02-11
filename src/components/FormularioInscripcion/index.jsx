import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Modal from '../../components/Modal'

const FormularioInscripcion = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_5in3nh8', 
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
    <div className="max-w-lg mx-auto p-8 rounded-lg shadow-lg p-6 bg-[#000d35] rounded-xl text-white mb-6 items-center h-full">
      <h2 className="text-2xl mb-4 text-center">Inscripciones Olimpo Academia de Gimnasia</h2>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <label>Nombres y Apellidos del Deportista</label>
        <input type="text" name="nombre_deportista" className="p-2 border rounded" required />

        <label>Cédula o Tarjeta de Identidad del Deportista</label>
        <input type="text" name="cedula_deportista" className="p-2 border rounded" required />

        <label>Dirección de Residencia</label>
        <input type="text" name="direccion_deportista" className="p-2 border rounded" required />

        <label>Teléfono Deportista</label>
        <input type="tel" name="telefono_deportista" className="p-2 border rounded" required />

        <label>Correo Electrónico</label>
        <input type="email" name="email_deportista" className="p-2 border rounded" required />

        <label>EPS del Deportista</label>
        <input type="text" name="eps_deportista" className="p-2 border rounded" required />

        <label>Fecha de Nacimiento del Deportista</label>
        <input type="date" name="fecha_nacimiento_deportista" className="p-2 border rounded" required />

        <label>Nombre Completo de la Madre o Padre</label>
        <input type="text" name="nombre_padre_madre" className="p-2 border rounded" required />

        <label>Sede a la que Quiere Pertenecer</label>
        <select name="sede" className="p-2 border rounded" required>
          <option value="Rionegro">Rionegro</option>
        </select>

        <label>Horario de la Sede a la que Quiere Pertenecer</label>
        <select name="horario_sede" className="p-2 border rounded" required>
          <option value="Medellin, Miércoles 5 pm">Medellin, Miércoles 5 pm</option>
        </select>


        <label>
          <input type="checkbox" name="terminos" className="mr-2" required /> Acepto términos y condiciones de la <a className="text-blue-500" onClick={openModal}>política de privacidad</a>
        </label>

        <button class="border-2 border-white text-white bg-transparent hover:bg-[#61CE70] hover:text-white px-6 py-2 rounded-lg transition duration-300 ease-in-out">
          Enviar
        </button>
      </form>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-2xl mb-10">Política de privacidad y de tratamiento de datos personales</h2>
        <p className="text-justify">
          En Club olimpo de gimnasia, reconocemos la importancia de la privacidad y la protección de los datos personales de nuestros usuarios. A pesar de no utilizar cookies, recopilamos información limitada y necesaria para mejorar la experiencia del usuario y brindar un servicio personalizado. Los datos proporcionados, como nombre, correo electrónico o información de contacto, se utilizan exclusivamente para facilitar la comunicación entre el sitio y sus usuarios, garantizando la confidencialidad y no compartiéndolos con terceros sin consentimiento expreso. Todos los datos se almacenan de forma segura y se eliminan cuando ya no sean necesarios para los fines establecidos. Nuestra prioridad es salvaguardar la información de nuestros usuarios y asegurar el cumplimiento de las normativas de protección de datos vigentes.
          <br />
          Al aceptar la casilla de verificación y utilizar el sitio web Club olimpo de gimnasia, usted acepta automáticamente los términos y condiciones de nuestra Política de Tratamiento de Datos Personales. Si no está de acuerdo con estos términos, le recomendamos abstenerse de utilizar nuestros servicios. Su uso continuo del sitio implica la aceptación de nuestra política de privacidad y el manejo de sus datos personales según lo establecido en la misma.
          <br />
          Club Olimpo Copyright 2024
        </p>
      </Modal>
    </div>
  );
};

export default FormularioInscripcion;
