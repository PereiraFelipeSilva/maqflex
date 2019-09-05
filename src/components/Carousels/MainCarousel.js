import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import BannerHome1 from '../../assets/3banner-home-2.jpg';
import BannerHome2 from '../../assets/5banner-home-3.jpg';
import BannerHome3 from '../../assets/6banner-home-4.jpg';
import BannerHome4 from '../../assets/7banner-home-5.jpg';
import '../../css/Carousel.css';

export default function MainCarousel() {

   const [index, setIndex] = useState(0);
   const [direction, setDirection] = useState(null);
 
   const handleSelect = (selectedIndex, e) => {
     setIndex(selectedIndex);
     setDirection(e.direction);
   };

  return (
    <Carousel
      activeIndex={index}
      direction={direction}
      onSelect={handleSelect}
      interval="2300"
    >
      <Carousel.Item>
        <img className="d-block w-100 carousel-item" src={BannerHome1} alt="first slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100 carousel-item" src={BannerHome2} alt="second slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100 carousel-item" src={BannerHome3} alt="third slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100 carousel-item" src={BannerHome4} alt="fourth slide" />
      </Carousel.Item>
    </Carousel>
  );
}