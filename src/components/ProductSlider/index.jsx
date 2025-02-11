// components/ProductSlider.jsx

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ContainerText from '../ContainerText';

const ProductSlider = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Siempre muestra un solo producto
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000, 
  };

  return (
    <div className="">
      <ContainerText>
        <div>
          <Slider {...settings}>
            {products.map((product) => (
              <div key={product.id} className="p-4 ">
                <img src={product.img} alt={product.name} className="w-full h-auto rounded-lg" />
                <h3 className="text-lg text-center mt-4 text-white">{product.name}</h3>
              </div>
            ))}
          </Slider>
        </div>
      </ContainerText>
    </div>
  );
};

export default ProductSlider;
