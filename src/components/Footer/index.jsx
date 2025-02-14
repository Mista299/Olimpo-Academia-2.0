import React, { useState } from 'react';

import SocialMedia from '../SocialMedia'
import logo from '../../imgs/logo1.webp';
import Modal from '../../components/Modal'

import { NavLink } from "react-router-dom";


const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return(
        <footer className="py-10 bg-[linear-gradient(90deg,#000428_0%,#004e92_100%)] sm:pt-16 lg:pt-24 relative w-full">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-12">
                    <div>
                        <p className="text-base text-gray-500">Compañía</p>
                        <ul className="mt-8 space-y-4">
                            <li>
                                <NavLink to="/Nosotros" className=" text-base text-white hover:bg-[#61CE70]">
                                    Acerca de nosotros
                                </NavLink>
                            </li>
                            <li>
                                {/* <a href="#" className="text-base text-white hover:text-opacity-80">Certificaciones</a> */}
                            </li>
                            <li>
                                <NavLink to="/Nosotros" className="text-base text-white hover:bg-[#61CE70]">
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
                            </li>
                            <li>
                                <a className="text-base text-white hover:text-opacity-80" onClick={openModal}>Política de privacidad</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-base text-gray-500">Recursos</p>
                        <ul className="mt-8 space-y-4">

                            <li>
                                <a href="https://api.whatsapp.com/send/?phone=573174535342&text=Hola+vengo+del+sitio+web%2C+y+necesito+m%C3%A1s+informaci%C3%B3n+sobre+las+membres%C3%ADas+y+servicios&type=phone_number&app_absent=0" className="text-base text-white hover:text-opacity-80">Clases personalizadas</a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/watch?v=x5vZIo0dJL8" className="text-base text-white hover:text-opacity-80">Tutoriales de gimnasia</a>
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
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <div className="max-h-[50vh] overflow-y-auto p-4">
                        <h2 className="text-2xl mb-4">Política de privacidad y de tratamiento de datos personales</h2>
                        <p className="text-justify">
                            En Club olimpo de gimnasia, reconocemos la importancia de la privacidad y la protección de los datos personales de nuestros usuarios. A pesar de no utilizar cookies, recopilamos información limitada y necesaria para mejorar la experiencia del usuario y brindar un servicio personalizado. Los datos proporcionados, como nombre, correo electrónico o información de contacto, se utilizan exclusivamente para facilitar la comunicación entre el sitio y sus usuarios, garantizando la confidencialidad y no compartiéndolos con terceros sin consentimiento expreso. Todos los datos se almacenan de forma segura y se eliminan cuando ya no sean necesarios para los fines establecidos. Nuestra prioridad es salvaguardar la información de nuestros usuarios y asegurar el cumplimiento de las normativas de protección de datos vigentes.
                            <br />
                            Al aceptar la casilla de verificación y utilizar el sitio web Club olimpo de gimnasia, usted acepta automáticamente los términos y condiciones de nuestra Política de Tratamiento de Datos Personales. Si no está de acuerdo con estos términos, le recomendamos abstenerse de utilizar nuestros servicios. Su uso continuo del sitio implica la aceptación de nuestra política de privacidad y el manejo de sus datos personales según lo establecido en la misma.
                            <br />
                            Club Olimpo Copyright 2024
                        </p>
                    </div>
                </Modal>
            </div>
        </footer>
    );
};

export default Footer;
