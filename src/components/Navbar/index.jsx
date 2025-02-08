import SocialMedia from '../SocialMedia'
import logo from '../../imgs/logo1.webp';
import { useState } from 'react';
import MainButton from '../MainButton';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="py-7 sm:py-7 bg-[linear-gradient(90deg,#000428_0%,#004e92_100%)]">
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
                  <a href="#" className="hover:bg-[#61CE70] active:bg-[#61CE70] hover:text-opacity-80 px-4 py-2 rounded w-full block text-center">Inicio</a>
                </li>
                <li className="w-full">
                  <a href="#" className="hover:bg-[#61CE70] active:bg-[#61CE70] hover:text-opacity-80 px-4 py-2 rounded w-full block text-center">Nosotros</a>
                </li>
                <li className="w-full">
                  <a href="#" className="hover:bg-[#61CE70] active:bg-[#61CE70] hover:text-opacity-80 px-4 py-2 rounded w-full block text-center">Productos y Servicios</a>
                </li>
                <li className="w-full">
                  <a href="#" className="hover:bg-[#61CE70] active:bg-[#61CE70] hover:text-opacity-80 px-4 py-2 rounded w-full block text-center">Inscripciones</a>
                </li>
              </ul>
            </div>


          </div>

          {/* Menú para escritorio */}
          <div className="hidden xl:flex items-center justify-end space-x-8">
            <ul className="flex flex-wrap items-center gap-x-8">

                <MainButton name="Inicio"/>
                <MainButton name="Nosotros"/>
                <MainButton name="Productos & Servicios"/>
                <MainButton name="Inscripciones"/>

            </ul>

              <SocialMedia/>



          </div>
        </div>
      </div>
    </section>
  );<span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#4bbf8e] transition-all duration-300 hover:w-full"></span>
};

export default NavBar;
