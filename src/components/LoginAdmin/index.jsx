import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa el hook de navegación

const LoginAdmin = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate(); // Inicializa el hook para la redirección

  // Manejar los cambios en los inputs de manera más concisa
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Inicio de sesión exitoso:', data.token);

        // Redirigir al panel de administrador después del inicio de sesión exitoso
        navigate('/adminpanel');
      } else {
        console.error('Error en el inicio de sesión');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <div className="md:max-w-4xl mx-auto p-8 rounded-lg shadow-lg p-6 rounded-xl text-white mb-6 items-center h-full">
      <h2 className="text-2xl mb-4 text-center font-bold mb-2">Panel de administrador</h2>
      <form className="grid grid-cols-1 lg:grid-cols-1 gap-y-6 gap-x-8" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <input
            placeholder="Correo electrónico"
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#61CE70] bg-[rgba(55, 65, 81, 1)] text-white"
            required
          />
          <input
            placeholder="Contraseña"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-[#61CE70] bg-[rgba(55, 65, 81, 1)] text-white"
            required
          />
        </div>
        <button type="submit" className="w-full px-4 py-2 rounded-lg font-semibold transition-all duration-300 bg-[#044c94] hover:bg-[#61CE70] hover:text-white text-xl">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default LoginAdmin;
