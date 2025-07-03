import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import './Carousel3D.css';

const images = Array.from({ length: 9 }, (_, i) => `/carousel${i + 1}.jpeg`);

export default function Carousel3D() {
  return (
    <section id="carousel-3d" className="carousel-3d-section bg-black text-white py-5">
      <div className="container" data-aos="fade-up">
        <h2 className="text-center mb-4">Galería fotográfica</h2>
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          navigation
          loop
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Navigation]}
          className="swiper-container"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} className="swiper-slide-custom">
              <img src={src} alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
