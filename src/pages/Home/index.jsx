import Layout from "../../components/Layout";
import Carousel from "../../components/Carousel";
import MapSlider from "../../components/MapSlider";
import Seo from "../../components/Seo";

function Home() {
    return (
      <Layout>
        <Seo
          title="Inicio - Academia Olimpo"
          description="Academia Olimpo de gimnasia, club academia en el oriente Antioqueño se ofrecen clases de gimnasia para niños desde los 4 años de edad en adelante, clases de gimnasia en Medellín, Rionegro, La Ceja, El Retiro, clases personalizadas. También hay clases y entrenamientos para jóvenes y adultos."
          keywords="Academia Olimpo, club de gimnasia, academia de gimnasia, clases de gimnasia, gimnasia para niños, gimnasia para jovenes, gimnasia para adultos, clases personalizadas"
        />
        <Carousel/>
        <MapSlider/>
      </Layout>

    );
  }

export default Home
