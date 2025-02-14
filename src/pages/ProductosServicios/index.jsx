// pages/Home.jsx
import Seo from "../../components/Seo";
import product1 from '../../imgs/u1.webp';
import product2 from '../../imgs/u2.webp';
import product3 from '../../imgs/u3.webp';
import product4 from '../../imgs/u5.webp';
import espectaculos from '../../imgs/espectaculos.webp';
import clases from '../../imgs/gimnasia-clases.webp';
import bzeus from '../../imgs/b-zeus.webp';
import bposeidon from '../../imgs/b-poseidon.webp';
import bmedusa from '../../imgs/b-medusa.webp';
import guantes from '../../imgs/guantes.webp';
import magnesio from '../../imgs/magnesio2.webp';
import personalizados from '../../imgs/personalizados.jpeg';
import colchonetas from '../../videos/colchonetas.webm'; 

import ProductSlider from '../../components/ProductSlider';
import TextCard from '../../components/TextCard';


function ProductosServicios() {
  const products = [
    { id: 1, img: product1, name: 'Uniforme de gimnasia El Retiro' },
    { id: 2, img: product2, name: 'Uniforme de gimnasia La Ceja' },
    { id: 3, img: product3, name: 'Uniforme de gimnasia Rionegro' },
    { id: 4, img: product4, name: 'Uniforme de gimnasia masculino Rionegro ' },
  ];
  const bonos = [
    { id: 1, img: bzeus, name: 'bono zeus de descuento olimpo academia' },
    { id: 2, img: bposeidon, name: 'bono poseidon de descuento olimpo academia' },
    { id: 3, img: bmedusa, name: 'bono medusa de descuento olimpo academia' },
  ]
  const others = [
    { id: 1, img: magnesio, name: 'magnesio para gimnasia' },
    { id: 2, img: guantes, name: 'guantes para gimnasia' },
  ]

  return (
    <>
      <Seo
        title="Productos y Servicios - Academia Olimpo"
        description="Clases de gimnasia, clases personalizadas, shows y espectáculos, colchonetas, uniformes, guantes, magnesio, productos de gimnasia en Medellín, Rionegro, La Ceja, el Retiro."
        keywords="uniformes de gimnasia, productos de gimnasia, magnesio para gimnasia, guantes de gimnasia, colchonetas de gimnasia, colchones inflebles de gimnasia, clases personalizadas de gimnasia, shows y espectaculos de gimnasia, afiliacion academia de gimnasia"
      />
      {/* SHOWS */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:max-w-5xl lg:mx-auto mb-6" >
        <img src={espectaculos} alt="espectaculos de gimnasia" />
        <TextCard title="Espectáculos y Shows" textButton="Comprar">
          Ofrecemos nuestros shows para todo tipo de eventos y en cualquier tipo de espacios: empresariales, apertura o cierre de eventos, reuniones familiares o sociales, eventos culturales, entretenimiento, matrimonios, cumpleaños, fiestas de quince, y cualquier otro tipo de evento.
        </TextCard>

      </div>
      {/* MEBRESIA */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:max-w-5xl lg:mx-auto mb-6" >
        <img src={clases} alt="clases de gimnasia olimpo para niños y jovenes" />
        <TextCard title="Membresía" textButton="¡Quiero ser miembro!">
          Contamos con diferentes tipos de planes para hacer parte de nuestras clases de gimnasia, tenemos planes mensuales, trimestrales, semestrales y anuales, en el plan anual contarás con un gran porcentaje de descuento. <br/><br/>

          ¡Animate a ser parte de nuestra comunidad!
        </TextCard>

      </div>
      {/* PERSONALIZADOS */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:max-w-5xl lg:mx-auto mb-6" >
        <div className="flex flex-col p-6 bg-[#000d35] rounded-lg shadow-lg text-white mb-6 items-center justify-between h-full">
          <img src={personalizados} alt="clases de gimnasia personalizadas" className="w-90 h-auto"/>
        </div>
        <TextCard title="Personalizados" textButton="¡Solicitar personalizado!">
          Se dictan clases personalizadas, llevamos el material y lo necesario para clase directamente en la comodidad de tu hogar
        </TextCard>
      </div>
      {/* UNIFORMES */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:max-w-5xl lg:mx-auto mb-6">
        <ProductSlider products={products} title="Uniformes" />
        <TextCard title="Uniformes de entrenamiento" textButton="Encargar">
          Los uniformes en la gimnasia aseguran la seguridad al ofrecer prendas diseñadas para la actividad física, promueven la cohesión del equipo al crear una identidad compartida y permiten realizar movimientos con libertad y comodidad, optimizando el desempeño en cada ejercicio.<br/><br/>

          Más información sobre el precio de neustros productos en nuestro número de whatsapp
        </TextCard>
      </div>
      {/* BONOS */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:max-w-5xl lg:mx-auto mb-6">
        <ProductSlider products={bonos} title="Bonos" />
        <TextCard title="Bonos" textButton="Comprar">
          Los bonos son descuentos que tenemos por cumplir ciertos requisitos, o hacer cierto tipo de tareas, si crees que cumples con alguno, comunicate con nosotros y mencionanos el nombre bono que deseas aplicar.
          <br/><br/>
          Más información sobre cómo aplicar a nuestros bonos en nuestra línea de whatsapp.
        </TextCard>
      </div>
      {/* Colchones */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:max-w-5xl lg:mx-auto mb-6">
        <div className="flex flex-col p-6 bg-[#000d35] rounded-lg shadow-lg text-white mb-6 items-center justify-between">
          <video src={colchonetas} controls className="w-3/4 h-auto rounded-lg"></video>
        </div>

        <TextCard title="Colchonetas inflables" textButton="Comprar">
          tenemos Colchonetas Airtrack para la venta, excelentes para seguir moejorando habilidades en la comodidad del hogar.
          <br/><br/>
          Hacemos envios a domicilios, escribenos a nuestra linea para mas información.
        </TextCard>
      </div>
      {/* OTROS ARTICULOS */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:max-w-5xl lg:mx-auto mb-6">
        <ProductSlider products={others} title="Bonos" />
        <TextCard title="Otros productos" textButton="Comprar">
          Guates:
          Los guantes en gimnasia olímpica brindan mejor agarre y protección, permitiendo un rendimiento seguro y confiable durante las rutinas.
          <br/><br/>
          Magnesio:
          El magnesio en la gimnasia proporciona mejor agarre al reducir la humedad en las manos y aumentar la fricción, ayudando a mantener un mejor control y seguridad en los movimientos.

          <br/><br/>
          Más información sobre nuestros productos en nuestra línea de whatsapp
        </TextCard>
      </div>
    </>
  );
}

export default ProductosServicios;
