import SocialMedia from '../SocialMedia'
import logo from '../../imgs/logo1.webp';
import { NavLink } from "react-router-dom";


const Footer = () => {
    return(
        <footer className="py-10 bg-[linear-gradient(90deg,#000428_0%,#004e92_100%)] sm:pt-16 lg:pt-24 relative w-full">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-12">
                    <div>
                        <p className="text-base text-gray-500">Compañía</p>
                        <ul className="mt-8 space-y-4">
                            <li>
                                <NavLink to="/Nosotros" className="text-base text-white hover:text-opacity-80">
                                    Acerca de nosotros
                                </NavLink>
                            </li>
                            <li>
                                <a href="#" className="text-base text-white hover:text-opacity-80">Certificaciones</a>
                            </li>
                            <li>
                                <NavLink to="/Nosotros" className="text-base text-white hover:text-opacity-80">
                                    Trabaja con nosotros
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-base text-gray-500">Ayuda</p>
                        <ul className="mt-8 space-y-4">
                            <li>
                                <a href="https://api.whatsapp.com/send/?phone=573174535342&text=Hola+vengo+del+sitio+web%2C+y+necesito+m%C3%A1s+informaci%C3%B3n+sobre+las+membres%C3%ADas+y+servicios&type=phone_number&app_absent=0" className="text-base text-white hover:text-opacity-80">Soporte al usuario</a>
                            </li>
                            <li>
                                <a href="#" className="text-base text-white hover:text-opacity-80">Términos y condiciones</a>
                            </li>
                            <li>
                                <a href="/politicaPrivacidad" className="text-base text-white hover:text-opacity-80">Política de privacidad</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-base text-gray-500">Recursos</p>
                        <ul className="mt-8 space-y-4">

                            <li>
                                <a href="#" className="text-base text-white hover:text-opacity-80">Clases personalizadas</a>
                            </li>
                            <li>
                                <a href="#" className="text-base text-white hover:text-opacity-80">Tutoriales de gimnasia</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-base text-gray-500">Links Extra</p>
                        <ul className="mt-8 space-y-4">
                            <li>
                                <a href="https://es.wikipedia.org/wiki/Gimnasia_art%C3%ADstica" className="text-base text-white hover:text-opacity-80">¿Qué es la gimnasia artística?</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="mt-16 mb-10 border-gray-800" />

                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start">
                        <img className="w-auto h-12" src={logo} alt="logo de la academia" />
                        <p className="ml-4 text-lg text-white">Olimpo Academia</p>
                    </div>
                    <SocialMedia/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
