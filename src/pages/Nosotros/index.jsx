
import SectionText from '../../components/SectionText';
import NosotrosImg from '../../imgs/nosotros.webp';
import NosotrosImg2 from '../../imgs/entrenadores.jpeg';

import team from '../../imgs/team.webp';
import Seo from "../../components/Seo";
import ProductSlider from '../../components/ProductSlider';


function Nosotros() {
    const nosotros = [
      { id: 1, img: NosotrosImg, name: 'fundadores academia Olimpo' },
      { id: 2, img: NosotrosImg2, name: 'entrenadores con experiencia y entrenamiento europeo' },
    ];
  return (
    <>
      <Seo
        title="Nosotros - Academia Olimpo"
        description="Historia, de la Academia Olimpo de gimnasia, fundadores, grupo inicial en La Ceja. Misión y visiín, ¿quienes somos? Gemelos Amaya."
        keywords="Historia de la Academia Olimpo, club de gimnasia, que son la academia olimpo, quienes son la academia olimpo, quienes son los fundadores de la academia olimpo, hermanos Amaya, Gemelos Amaya, dueños del club olimpo, creadores de la academia olimpo"
      />
      <img src={team} alt="grupo de jovenes gimnasia club olimpo academia" className='mb-6'/>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:max-w-[70%] mx-auto">
        {/* Misión */}
        <SectionText title="Misión">
          <p>
            Ser el puente entre la pasión por la gimnasia, ofreciendo a través de nuestra página un vistazo a un mundo lleno de movimiento, diversión y aprendizaje. Nos esforzamos por inspirar a los más jóvenes a explorar el mundo de la gimnasia, destacando la importancia del ejercicio físico, la disciplina y la diversión en un entorno presencial seguro y emocionante.
          </p>
        </SectionText>

        {/* Visión */}
        <SectionText title="Visión">
          <p>
          Convertirnos en el lugar de inicio para niños de 6 años en adelante que deseen descubrir y desarrollar su amor por la gimnasia, con entrenadores de gimnasia artística totalmente preparados y didácticos. Buscamos ser reconocidos como el espacio que inspira y guía a los más jóvenes en su viaje hacia el mundo de la actividad física, proporcionando programas presenciales que no solo promuevan el desarrollo físico, sino también el crecimiento personal y la confianza en sí mismos a través del movimiento y la diversión.
          </p>
        </SectionText>
      </div>

      {/* Historia de la Academia */}

      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center w-full p-6 bg-[#000d35] rounded-lg shadow-lg text-white md:max-w-[70%] mx-auto mb-6 mt-6 gap-10">
        <ProductSlider products={nosotros} title="Uniformes" />
        <SectionText title="Historia de la Academia Olimpo">
          <p className='text-justify'>
            En un día de mediados de 2017 en La Ceja, los hermanos Danny y Andrés Amaya sintieron que era el momento de convertir su pasión por la gimnasia en una forma de transformar la vida de los niños de la región. Inspirados por su amor al movimiento y convencidos de que el ejercicio físico, la disciplina y la diversión podían ir de la mano para fomentar el crecimiento personal, decidieron fundar el Club Academia Olimpo. <br /><br />

            La idea surgió durante una charla entre hermanos, en la que recordaban sus propias vivencias en el mundo del deporte y cómo la gimnasia había marcado un antes y un después en sus vidas. Observando que en La Ceja había un gran potencial y una necesidad de espacios seguros y estimulantes para que los más jóvenes exploraran su cuerpo y desarrollaran su autoestima, se propusieron crear un lugar que se convirtiera en el puente entre la pasión por la gimnasia y el aprendizaje integral. <br /><br />

            Con recursos modestos pero con un entusiasmo desbordante, los Amaya transformaron un sueño en un vibrante centro de entrenamiento. Desde el primer día, la misión del club, ofrecer a través de su espacio un vistazo a un mundo lleno de movimiento, diversión y aprendizaje—se hizo presente en cada rutina y cada sonrisa compartida. Los entrenadores, cuidadosamente seleccionados por su compromiso y capacidad didáctica, se unieron al proyecto, convencidos de que enseñar gimnasia iba más allá de enseñar saltos y volteretas; se trataba de inspirar confianza, fomentar la disciplina y, sobre todo, disfrutar del juego del movimiento. <br /><br />

            El Club Academia Olimpo se consolidó rápidamente como un referente para niños a partir de los 6 años, quienes encontraban en sus sesiones no solo el entrenamiento físico, sino también un ambiente cálido y seguro que les permitía descubrir sus propias capacidades y crecer como individuos. Los hermanos Amaya, siempre presentes en cada entrenamiento y en cada pequeño logro, se convirtieron en mentores y modelos a seguir para una nueva generación de pequeños gimnastas. <br /><br />

            Así, lo que comenzó como un sueño familiar en La Ceja se transformó en una realidad que sigue inspirando a niños y familias, demostrando que con pasión, disciplina y un toque de diversión, se pueden construir espacios donde el movimiento y el aprendizaje se unen para forjar futuros llenos de posibilidades. 
          </p>

        </SectionText>
      </div>
    </>
  );
}

export default Nosotros;
