import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Alert from '../../components/Alert'
import { FaPlus } from 'react-icons/fa';

function AdminPanel() {
  const [deportistas, setDeportistas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [currentDeportista, setCurrentDeportista] = useState(null);
  const [formData, setFormData] = useState({
    cedula_deportista: '',
    nombre_deportista: '',
    direccion_deportista: '',
    telefono_deportista: '',
    eps_deportista: '',
    fecha_nacimiento_deportista: '',
    nombre_padre_madre: 'None',
    sede: ''
  });
  const [alert, setAlert] = useState({ type: '', message: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  const handleSubmit = () => {
    handleAddNewData(formData);
    console.log("enviando formData", formData)
    closeModal();
  };

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
        const data = await response.json(); // Parsear el JSON de la respuesta
        
      if (data.error) {
        console.log('Errores de validación:', data.error);

        data.error.forEach((error) => {
          console.log(`Campo: ${error.path.join('.')}, Mensaje: ${error.message}`);
        });
      } else {
        console.log(data.message);
        }
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
  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este deportista?')) {
      try {
        const response = await fetch(`https://olimpo-api.vercel.app/api/deportistas/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });
  
        if (!response.ok) {
          const data = await response.json(); // Obtener el error detallado si lo hay
          setAlert({ type: 'error', message: data.message || 'Error al eliminar el deportista.' });
          throw new Error(`Error ${response.status}: ${data.message || 'Error al eliminar deportista'}`);
        }

        // Filtrar la lista de deportistas para remover el eliminado
        setDeportistas((prevDeportistas) =>
          prevDeportistas.filter((deportista) => deportista._id !== id)
        );
  
        setAlert({ type: 'success', message: 'Deportista eliminado exitosamente' });
  
      } catch (error) {
        setAlert({ type: 'error', message: 'Error al eliminar el deportista.' });
      }
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleAddNewData = async (newDeportista) => {
    setAlert({ type: '', message: '' });
    try {
      const response = await fetch('https://olimpo-api.vercel.app/api/deportistas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newDeportista),
        credentials: 'include',
      });
  
      if (!response.ok) {
        const data = await response.json();
        setAlert({ type: 'error', message: data.message || 'Error al añadir el deportista.' });
      }
  
      const addedDeportista = await response.json();
      setDeportistas((prevDeportistas) => [...prevDeportistas, addedDeportista]);
      setAlert({ type: 'success', message: 'Deportista añadido exitosamente' });
  
    } catch (error) {
      setAlert({ type: 'error', message: 'Error al añadir el deportista.' });
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
          <div className="p-4 bg-gray-200 rounded-lg max-w-md mx-auto">
            <h2 className="text-lg font-semibold mb-4 text-center">Editar Deportista</h2>
            <form className="grid grid-cols-1 gap-4">
              <div>
                <label className="block font-medium mb-1">Cédula</label>
                <input
                  type="text"
                  name="cedula_deportista"
                  value={formData.cedula_deportista}
                  onChange={handleChange}
                  placeholder="Cédula"
                  className="w-full p-2 border rounded"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Nombre deportista</label>
                <input
                  type="text"
                  name="nombre_deportista"
                  value={formData.nombre_deportista}
                  onChange={handleChange}
                  placeholder="Nombre"
                  className="w-full p-2 border rounded"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Dirección</label>
                <input
                  type="text"
                  name="direccion_deportista"
                  value={formData.direccion_deportista}
                  onChange={handleChange}
                  placeholder="Dirección"
                  className="w-full p-2 border rounded"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Teléfono</label>
                <input
                  type="text"
                  name="telefono_deportista"
                  value={formData.telefono_deportista}
                  onChange={handleChange}
                  placeholder="Teléfono"
                  className="w-full p-2 border rounded"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Eps</label>
                <input
                  type="text"
                  name="eps_deportista"
                  value={formData.eps_deportista}
                  onChange={handleChange}
                  placeholder="EPS"
                  className="w-full p-2 border rounded"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Fecha de nacimiento</label>
                <input
                  type="date"
                  name="fecha_nacimiento_deportista"
                  value={formData.fecha_nacimiento_deportista}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Sede</label>
                <input
                  type="text"
                  name="sede"
                  value={formData.sede}
                  onChange={handleChange}
                  placeholder="Sede"
                  className="w-full p-2 border rounded"
                />
              </div>

              {/* Botones */}
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  className="bg-green-500 text-white px-4 py-2 rounded w-full mr-2"
                  onClick={handleUpdate}
                >
                  Guardar
                </button>
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded w-full ml-2"
                  onClick={() => setEditMode(false)}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>

        ) : (
          <div className="overflow-x-auto shadow-md rounded-lg max-h-300 overflow-y-auto text-center">
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
            <div className='flex justify-end'>
              <button
                type="button"
                className="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded mt-4"
                onClick={openModal}
              >
                <FaPlus className="mr-2 " /> {/* Icono "más" */}
                Añadir datos
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">Añadir nuevo deportista</h2>
            <form>
              <label className="block font-medium mb-1">Cédula</label>
              <input
                type="text"
                name="cedula_deportista"
                value={formData.cedula_deportista}
                onChange={handleInputChange}
                className="w-full p-2 border rounded mb-4"
              />
              <label className="block font-medium mb-1">Nombre</label>
              <input
                type="text"
                name="nombre_deportista"
                value={formData.nombre_deportista}
                onChange={handleInputChange}
                className="w-full p-2 border rounded mb-4"
              />
              <label className="block font-medium mb-1">Dirección</label>
              <input
                type="text"
                name="direccion_deportista"
                value={formData.direccion_deportista}
                onChange={handleInputChange}
                placeholder="Dirección"
                className="w-full p-2 border rounded mb-4"
              />
              <label className="block font-medium mb-1">Teléfono</label>
              <input
                type="text"
                name="telefono_deportista"
                value={formData.telefono_deportista}
                onChange={handleInputChange}
                placeholder="Teléfono"
                className="w-full p-2 border rounded mb-4"
              />
              <label className="block font-medium mb-1">Eps</label>
              <input
                type="text"
                name="eps_deportista"
                value={formData.eps_deportista}
                onChange={handleInputChange}
                placeholder="EPS"
                className="w-full p-2 border rounded mb-4"
              />
              <label className="block font-medium mb-1">Fecha de nacimiento</label>
              <input
                type="date"
                name="fecha_nacimiento_deportista"
                value={formData.fecha_nacimiento_deportista}
                onChange={handleInputChange}
                className="w-full p-2 border rounded mb-4"
              />
              <label className="block font-medium mb-1">Nombre del padre o la madre</label>
              <input
                type="text"
                name="nombre_padre_madre"
                value={formData.nombre_padre_madre}
                onChange={handleInputChange}
                className="w-full p-2 border rounded mb-4"
              />
              <label className="block font-medium mb-1">Sede</label>
              <input
                type="text"
                name="sede"
                value={formData.sede}
                onChange={handleInputChange}
                placeholder="Sede"
                className="w-full p-2 border rounded mb-4"
              />
              {/* Botones */}
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                  onClick={closeModal}
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={handleSubmit}
                >
                  Añadir
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
    </>
  );
}

export default AdminPanel;
