  import React, { useEffect, useState } from 'react';

  function AdminPanel() {

    const [deportistas, setDeportistas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      // Función asíncrona para obtener los deportistas
      const fetchDeportistas = async () => {
        try {
          const response = await fetch('https://olimpo-api.vercel.app/api/deportistas', {
            method: 'GET',
            credentials: 'include',  // Incluir cookies en la solicitud
          });
          if (!response.ok) {
            // Obtén más detalles del error desde el cuerpo de la respuesta
            const errorData = await response.json(); 
            throw new Error(`Error ${response.status}: ${errorData.message || 'Error al obtener los datos'}`);
          }
          const data = await response.json();
          setDeportistas(data);  // Guardar los datos en el estado
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);  // Desactivar el estado de carga
        }
      };

      fetchDeportistas();
    }, []);

    // Si los datos están cargando
    if (loading) {
      return <p>Cargando datos...</p>;
    }

    // Si ocurre un error al obtener los datos
    if (error) {
      return <p>Error: {error}</p>;
    }

    return (
      <>
        <div className="relative w-full h-screen flex justify-center items-center mb-6">
          <table className="table-auto border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Nombre</th>
                <th className="border border-gray-300 px-4 py-2">Deporte</th>
                <th className="border border-gray-300 px-4 py-2">Edad</th>
                <th className="border border-gray-300 px-4 py-2">Pais</th>
              </tr>
            </thead>
            <tbody>
              {deportistas.map((deportista) => (
                <tr key={deportista.id}>
                  <td className="border border-gray-300 px-4 py-2">{deportista.nombre}</td>
                  <td className="border border-gray-300 px-4 py-2">{deportista.deporte}</td>
                  <td className="border border-gray-300 px-4 py-2">{deportista.edad}</td>
                  <td className="border border-gray-300 px-4 py-2">{deportista.pais}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }

  export default AdminPanel;
