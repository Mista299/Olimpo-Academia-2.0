import SocialMedia from '../SocialMedia'
import logo from '../../imgs/logo1.webp';

const Footer = () => {
    return(
        <footer className="py-10 bg-gray-900 sm:pt-16 lg:pt-24 relative w-full">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-12">
                    <div>
                        <p className="text-base text-gray-500">Compañía</p>
                        <ul className="mt-8 space-y-4">
                            <li>
                                <a href="#" className="text-base text-white hover:text-opacity-80">Acerca de nosotros</a>
                            </li>
                            <li>
                                <a href="#" className="text-base text-white hover:text-opacity-80">Características</a>
                            </li>
                            <li>
                                <a href="#" className="text-base text-white hover:text-opacity-80">Trabaja con nosotros</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-base text-gray-500">Ayuda</p>
                        <ul className="mt-8 space-y-4">
                            <li>
                                <a href="#" className="text-base text-white hover:text-opacity-80">Soporte al usuario</a>
                            </li>
                            <li>
                                <a href="#" className="text-base text-white hover:text-opacity-80">Términos y condiciones</a>
                            </li>
                            <li>
                                <a href="#" className="text-base text-white hover:text-opacity-80">Política de privacidad</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-base text-gray-500">Recursos</p>
                        <ul className="mt-8 space-y-4">
                            <li>
                                <a href="#" className="text-base text-white hover:text-opacity-80">Free eBooks</a>
                            </li>
                            <li>
                                <a href="#" className="text-base text-white hover:text-opacity-80">Development Tutorial</a>
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
                                <a href="#" className="text-base text-white hover:text-opacity-80">Terms & Conditions</a>
                            </li>
                            <li>
                                <a href="#" className="text-base text-white hover:text-opacity-80">Privacy Policy</a>
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
