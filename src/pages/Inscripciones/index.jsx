// pages/Home.jsx
import FormularioInscripcion from '../../components/FormularioInscripcion'
import Carousel from "../../components/Carousel";
import Seo from "../../components/Seo";

function Inscripciones() {
    return (
      <>
        <Seo
          title="Inscripciones - Academia Olimpo"
          description="Inscripciones abiertas Academia Olimpo de gimnasia, club academia en Medellín y el oriente Antioqueño se ofrecen clases de gimnasia para niños desde los 4 años de edad en adelante, clases de gimnasia en Medellín, Rionegro, La Ceja, El Retiro, clases personalizadas. También hay clases y entrenamientos para jóvenes y adultos."
          keywords="Academia Olimpo, club de gimnasia, academia de gimnasia, clases de gimnasia, gimnasia para niños, gimnasia para jovenes, gimnasia para adultos, clases personalizadas"
        />
        <div className="relative w-full h-screen flex justify-center items-center mb-6">
          <div className="absolute inset-0 z-0">
              <Carousel />
          </div>
          <div className="overflow-y-auto relative z-10 h-screen md:overflow-y-visible md:h-auto sm:mt-10 md:mt-25 lg:mt-0 md:max-w-5xl p-8 rounded-lg shadow-lg p-6 bg-[rgba(0,13,53,0.8)] rounded-xl text-white">
            <FormularioInscripcion/>
          </div>
        </div>
      </>
    );
}

export default Inscripciones;
