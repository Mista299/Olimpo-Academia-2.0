import { BrowserRouter, useRoutes } from 'react-router-dom';
import Home from '../Home';
import Nosotros from '../Nosotros';
import ProductosServicios from '../ProductosServicios';
import Inscripciones from '../Inscripciones';
import Donaciones from '../Donaciones';


import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer';
import ButtonWhatsapp from '../../components/ButtonWhatsapp';



const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/nosotros",
      element: <Nosotros />
    },
    {
      path: "/productosServicios",
      element: <ProductosServicios />
    },
    {
      path: "/inscripciones",
      element: <Inscripciones />
    },
    {
      path: "/donaciones",
      element: <Donaciones />
    },
  ]);

  return routes; // Asegúrate de retornar las rutas
};

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <AppRoutes />
      <ButtonWhatsapp/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
