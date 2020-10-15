import React from 'react';
import './Carousel.css';
import Slider from "react-slick";
import carousel1 from '../../../utilities/images/carousel-1.png';
import carousel2 from '../../../utilities/images/carousel-2.png';
import carousel3 from '../../../utilities/images/carousel-3.png';
import carousel4 from '../../../utilities/images/carousel-4.png';
import carousel5 from '../../../utilities/images/carousel-5.png';

const Carousel = () => {

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className='carouselContainer'>
      <h1 className="carouselHeader text-center">Here are some of <span className='text-success'>our work</span></h1>
      <div className="container mainContainer">
        <div>

          <Slider {...settings}>
            <div className='carouselItem'>
              <img src={carousel1} alt="" />
            </div>
            <div className='carouselItem'>
              <img src={carousel2} alt="" />
            </div>
            <div className='carouselItem'>
              <img src={carousel5} alt="" />
            </div  >
            <div className='carouselItem'>
              <img src={carousel4} alt="" />
            </div>
            <div className='carouselItem'>
              <img src={carousel5} alt="" />
            </div >
            <div className='carouselItem'>
              <img src={carousel1} alt="" />
            </div>
            <div className='carouselItem'>
              <img src={carousel2} alt="" />
            </div>
            <div className='carouselItem'>
              <img src={carousel5} alt="" />
            </div>
            <div className='carouselItem'>
              <img src={carousel4} alt="" />
            </div>
          </Slider>
        </div>


      </div>

    </div>
  );
};

export default Carousel;