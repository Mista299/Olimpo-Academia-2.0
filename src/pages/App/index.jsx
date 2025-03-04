import { BrowserRouter, useRoutes } from 'react-router-dom';
import Home from '../Home';
import Nosotros from '../Nosotros';
import ProductosServicios from '../ProductosServicios';
import Inscripciones from '../Inscripciones';
import Donaciones from '../Donaciones';
import AdminLogin from '../AdminLogin';
import AdminPanel from '../AdminPanel';


import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer';
import FloatingButtons from '../../components/FloatingButtons';



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
      path: "/productos-servicios",
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
    {
      path: "/adminlogin",
      element: <AdminLogin />
    },
    {
      path: "/adminpanel",
      element: <AdminPanel />
    }
  ]);

  return routes; // Asegúrate de retornar las rutas
};

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <AppRoutes />
      <FloatingButtons/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
