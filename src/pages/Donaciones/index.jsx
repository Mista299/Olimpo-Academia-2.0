import Carousel from '../../components/Carousel'
import QRdonaciones from '../../imgs/QR-donaciones.webp';

const Donaciones = () => {
    return (
        <div className="relative w-full h-screen"> {/* Contenedor padre que engloba todo */}
            <div className="absolute inset-0 z-0"> {/* Carousel como fondo */}
                <Carousel />
            </div>
            <div className="overflow-y-auto relative z-10 md:max-w-5xl mx-auto p-8 rounded-lg shadow-lg p-6 bg-[rgba(0,13,53,0.7)] rounded-xl text-white mb-6 items-center h-full">
                <h2 className='text-2xl mt-4 mb-4 text-center'> Donaciones</h2>
                <hr /> 
                <p className="text-justify p-5">
                    <br />
                    Apoya el crecimiento de nuestro club de gimnasia <br />
                    Tu donación nos ayudará a mejorar nuestras instalaciones, adquirir nuevos equipos y ofrecer más oportunidades de desarrollo para nuestros atletas. Con tu apoyo, podemos seguir fomentando el deporte, la disciplina y el espíritu de equipo en nuestra comunidad. ¡Sigamos fomentando juntos la gimnasia en Colombia y el Oriente Antioqueño!
                    <br />
                    <br />
                </p>
                <hr /> 
                <h3 className='text-lg mt-4 mb-4 text-center'> Puedes escanear nuestro código QR</h3>
                <div className='flex justify-center'> {/* Centrar imagen horizontalmente */}
                    <img src={QRdonaciones} alt="QR para donaciones" className="md:w-1/3 w-1/2" /> {/* Ajustar tamaño de la imagen */}
                </div>
                <h3 className='text-lg mt-4 mb-4 text-center'> O consignar directamente a nuestra cuenta Bancolombia ahorros
                02391261965</h3>
                <hr /> 

            </div>
        </div>
    )
}

export default Donaciones;
