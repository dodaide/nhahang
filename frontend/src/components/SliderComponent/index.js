import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slide.css';
import { useState, useEffect } from 'react';

function SliderComponent() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch('/api/slide')
      .then(response => response.json())
      .then(data => {
        setSlides(data)
      });
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider container-fluid g-0">
      <Slider {...settings}>
        {slides.map(slide => (
          <div key={slide.id}>
            <img className='container-fluid g-0' src={slide.url} alt="slide-1" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderComponent ;
