import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const FormularioInscripcion = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_5in3nh8', // Reemplaza con tu Service ID de EmailJS
      'template_9tpa1v6', // Reemplaza con tu Template ID de EmailJS
      form.current,
      'qM6vf9fTAhPWWbZ3s' // Reemplaza con tu User ID de EmailJS
    )
    .then((result) => {
      alert('Formulario enviado exitosamente!');
    }, (error) => {
      alert('Error al enviar el formulario: ' + error.text);
    });
  };

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
        </select>￼


        <label>
          <input type="checkbox" name="terminos" className="mr-2" required /> Acepto términos y condiciones de la política de privacidad
        </label>

        <button type="submit" className="bg-green-500 text-white px-6 py-2 rounded-lg mt-4 hover:bg-green-700 transition">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default FormularioInscripcion;
