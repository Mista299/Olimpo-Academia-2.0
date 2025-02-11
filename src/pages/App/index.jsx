import { BrowserRouter, useRoutes } from 'react-router-dom';
import Home from '../Home';
import Nosotros from '../Nosotros';
import ProductosServicios from '../ProductosServicios';
import Inscripciones from '../Inscripciones';
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer';


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
    }
  ]);

  return routes; // Asegúrate de retornar las rutas
};

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <AppRoutes />
      <Footer/>

    </BrowserRouter>
  );
}

export default App;
