// pages/Home.jsx
import FormularioInscripcion from '../../components/FormularioInscripcion'
import Carousel from "../../components/Carousel";

function Inscripciones() {
    return (
      <>
        <div className="relative w-full h-screen flex justify-center items-center mb-6"> {/* Contenedor principal */}
          <div className="absolute inset-0 z-0"> {/* Carousel como fondo */}
              <Carousel />
          </div>
          <div className="overflow-y-auto relative z-10 h-screen md:h-auto sm:mt-10 md:mt-25 lg:mt-0 md:max-w-5xl p-8 rounded-lg shadow-lg p-6 bg-[rgba(0,13,53,0.8)] rounded-xl text-white">
            <FormularioInscripcion/>
          </div>
        </div>
      </>
    );
}

export default Inscripciones;
