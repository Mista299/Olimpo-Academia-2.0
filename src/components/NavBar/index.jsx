import { useState } from 'react';
import { NavLink } from "react-router-dom";
import SocialMedia from '../SocialMedia'
import MainButton from '../MainButton';
import logo from '../../imgs/logo1.webp';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <section className="top-0 py-7 sm:py-7 bg-[linear-gradient(90deg,#000428_0%,#004e92_100%)] mb-6">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center xl:flex xl:items-center xl:justify-between xl:text-left">
          {/* Logo */}
          <div className="xl:flex xl:items-center xl:justify-start">
            <img className="w-auto mx-auto h-12" src={logo} alt="logo de la academia" />
            <p className="mt-5 text-xl text-white xl:ml-6 xl:mt-0">Olimpo Academia</p>
          </div>

          {/* Menú para móviles */}
          <div className="xl:hidden flex justify-between items-center w-full z-30">
            <button
              className="absolute top-0 left-0 text-white focus:outline-none p-2 cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <div className={`absolute top-38 left-0 w-full bg-[#041229] z-30 ${isMenuOpen ? 'block' : 'hidden'}`}>
              <ul className="flex flex-col items-center space-y-4 py-4 text-white w-full">
                <li className="w-full">
                  <NavLink to="/" className="hover:bg-[#61CE70] active:bg-[#61CE70] hover:text-opacity-80 px-4 py-2 rounded w-full block text-center"
                    onClick={handleMenuClose}
                  >Inicio</NavLink>
                </li>
                <li className="w-full">
                  <NavLink to="Nosotros" className="hover:bg-[#61CE70] active:bg-[#61CE70] hover:text-opacity-80 px-4 py-2 rounded w-full block text-center"
                    onClick={handleMenuClose}
                  >Nosotros</NavLink>
                </li>
                <li className="w-full">
                  <NavLink to="ProductosServicios" className="hover:bg-[#61CE70] active:bg-[#61CE70] hover:text-opacity-80 px-4 py-2 rounded w-full block text-center"
                    onClick={handleMenuClose}
                  >Productos y Servicios</NavLink>
                </li>
                <li className="w-full">
                  <NavLink to="Inscripciones" className="hover:bg-[#61CE70] active:bg-[#61CE70] hover:text-opacity-80 px-4 py-2 rounded w-full block text-center"
                    onClick={handleMenuClose}
                  >Inscripciones</NavLink>
                </li>
                <li className="w-full">
                  <NavLink to="Donaciones" className="hover:bg-[#61CE70] active:bg-[#61CE70] hover:text-opacity-80 px-4 py-2 rounded w-full block text-center"
                    onClick={handleMenuClose}
                  >Donaciones</NavLink>
                </li>
              </ul>
            </div>
          </div>

          {/* Menú para escritorio */}
          <div className="hidden xl:flex items-center justify-end space-x-8">
            <ul className="flex flex-wrap items-center gap-x-8">
              <MainButton name="Inicio" page="/" />
              <MainButton name="Nosotros" page="/Nosotros" /> {/* Asegúrate que la ruta comience con '/' */}
              <MainButton name="Productos & Servicios" page="/ProductosServicios" />
              <MainButton name="Inscripciones" page="/Inscripciones" />
              <MainButton name="Donaciones" page="/Donaciones" />

            </ul>

            <SocialMedia />
          </div>
        </div>
      </div>
    </section>
  );
};


export default NavBar;
