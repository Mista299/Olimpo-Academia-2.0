import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Alert from '../../components/Alert'

function AdminPanel() {
  const [deportistas, setDeportistas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [currentDeportista, setCurrentDeportista] = useState(null);
  const [formData, setFormData] = useState({
    cedula_deportista: '',
    nombre_deportista: '',
    email_deportista: '',
    direccion_deportista: '',
    telefono_deportista: '',
    eps_deportista: '',
    fecha_nacimiento_deportista: '',
    sede: '',
  });
  const [alert, setAlert] = useState({ type: '', message: '' });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchDeportistas = async () => {
      try {
        const response = await fetch('https://olimpo-api.vercel.app/api/deportistas', {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        if (!response.ok) {
          const errorData = await response.json();
          setAlert({ type: 'error', message: 'Ocurrió un error al procesar la solicitud.' });
          throw new Error(`Error ${response.status}: ${errorData.message || 'Error al obtener los datos'}`);
        }
        const data = await response.json();
        setDeportistas(data);
      } catch (error) {
          setAlert({ type: 'error', message: 'Error de conexión con el servidor.' });
          navigate('/adminlogin');
      } finally {
        setLoading(false);
      }
    };

    fetchDeportistas();
  }, [navigate]);

  const handleEdit = (id) => {
    const deportista = deportistas.find((dep) => dep._id === id);
    setCurrentDeportista(deportista);
    setFormData({
      cedula_deportista: deportista.cedula_deportista,
      nombre_deportista: deportista.nombre_deportista,
      email_deportista: deportista.email_deportista,
      direccion_deportista: deportista.direccion_deportista,
      telefono_deportista: deportista.telefono_deportista,
      eps_deportista: deportista.eps_deportista,
      fecha_nacimiento_deportista: deportista.fecha_nacimiento_deportista,
      sede: deportista.sede,
    });
    setEditMode(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async () => {
    setAlert({ type: '', message: '' });
    try {
      const response = await fetch(`https://olimpo-api.vercel.app/api/deportistas/${currentDeportista._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include',
      });

      if (!response.ok) {
        const errorData = await response.json();
        setAlert({ type: 'error', message: 'Ocurrió un error al actualizar.' });

        throw new Error(`Error ${response.status}: ${errorData.message || 'Error al actualizar el deportista'}`);
      }

      // Actualizar la lista de deportistas en el estado
      setDeportistas((prevDeportistas) =>
        prevDeportistas.map((dep) =>
          dep._id === currentDeportista._id ? { ...dep, ...formData } : dep
        )
      );

      // Salir del modo de edición
      setEditMode(false);
      setCurrentDeportista(null);
      setAlert({ type: 'success', message: 'Actualización exitosa' });

    } catch (error) {
      setAlert({ type: 'error', message: error.message });
    }
  };

  if (loading) {
    return <p className="text-center text-lg font-semibold">Cargando datos...</p>;
  }


  return (
    <>
      <div className="container mx-auto p-4">
        {alert.message && (
          <Alert type={alert.type} message={alert.message} /> // Mostrar alerta si hay mensaje
        )}
        {editMode ? (
          <div className="p-4 bg-gray-200 rounded-lg">
            <h2 className="text-lg font-semibold">Editar Deportista</h2>
            <form>
              <input
                type="text"
                name="cedula_deportista"
                value={formData.cedula_deportista}
                onChange={handleChange}
                placeholder="Cédula"
                className="p-2 m-2 border rounded"
              />
              <input
                type="text"
                name="nombre_deportista"
                value={formData.nombre_deportista}
                onChange={handleChange}
                placeholder="Nombre"
                className="p-2 m-2 border rounded"
              />
              <input
                type="text"
                name="direccion_deportista"
                value={formData.direccion_deportista}
                onChange={handleChange}
                placeholder="Dirección"
                className="p-2 m-2 border rounded"
              />
              <input
                type="text"
                name="telefono_deportista"
                value={formData.telefono_deportista}
                onChange={handleChange}
                placeholder="Teléfono"
                className="p-2 m-2 border rounded"
              />
              <input
                type="text"
                name="eps_deportista"
                value={formData.eps_deportista}
                onChange={handleChange}
                placeholder="Teléfono"
                className="p-2 m-2 border rounded"
              />
              <input
                type="text"
                name="fecha_nacimiento_deportista"
                value={formData.fecha_nacimiento_deportista}
                onChange={handleChange}
                placeholder="Fecha de nacimiento"
                className="p-2 m-2 border rounded"
              />
              <input
                type="text"
                name="sede"
                value={formData.sede}
                onChange={handleChange}
                placeholder="Sede"
                className="p-2 m-2 border rounded"
              />
              {/* Otros campos del formulario */}
              <button
                type="button"
                className="bg-green-500 text-white px-4 py-2 rounded mt-4"
                onClick={handleUpdate}
              >
                Guardar
              </button>
              <button
                type="button"
                className="bg-gray-500 text-white px-4 py-2 rounded mt-4 ml-2"
                onClick={() => setEditMode(false)}
              >
                Cancelar
              </button>
            </form>
          </div>
        ) : (
          <div className="overflow-x-auto shadow-md rounded-lg max-h-300 overflow-y-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="py-3 px-6 text-left">Cédula</th>
                  <th className="py-3 px-6 text-left">Nombre</th>
                  <th className="py-3 px-6 text-left">Email</th>
                  <th className="py-3 px-6 text-left">Dirección</th>
                  <th className="py-3 px-6 text-left">Teléfono</th>
                  <th className="py-3 px-6 text-left">Eps</th>
                  <th className="py-3 px-6 text-left">Fecha Nacimiento</th>
                  <th className="py-3 px-6 text-left">Sede</th>
                  <th className="py-3 px-6 text-left">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {deportistas.map((deportista) => (
                  <tr key={deportista._id} className="border-b hover:bg-gray-100">
                    <td className="py-3 px-6">{deportista.cedula_deportista}</td>
                    <td className="py-3 px-6">{deportista.nombre_deportista}</td>
                    <td className="py-3 px-6">{deportista.email_deportista}</td>
                    <td className="py-3 px-6">{deportista.direccion_deportista}</td>
                    <td className="py-3 px-6">{deportista.telefono_deportista}</td>
                    <td className="py-3 px-6">{deportista.eps_deportista}</td>
                    <td className="py-3 px-6">{deportista.fecha_nacimiento_deportista}</td>
                    <td className="py-3 px-6">{deportista.sede}</td>
                    <td className="py-3 px-6 flex justify-end">
                      <button
                        className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700 flex items-center mr-2"
                        onClick={() => handleEdit(deportista._id)}
                      >
                        <FaEdit className="mr-1" /> Editar
                      </button>
                      <button
                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700 flex items-center"
                        onClick={() => handleDelete(deportista._id)}
                      >
                        <FaTrashAlt className="mr-1" /> Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}

export default AdminPanel;
