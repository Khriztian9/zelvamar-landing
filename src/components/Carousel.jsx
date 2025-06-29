import './Carousel.css';

export default function Carousel() {
  const images = Array.from({ length: 15 }, (_, i) => `/carrusel${i + 1}.jpg`);

  return (
    <section id="carousel" className="carousel-section py-5 bg-black text-white">
      <div className="container" data-aos="fade-up">
        <div id="hotelCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {images.map((src, idx) => (
              <div className={`carousel-item${idx === 0 ? ' active' : ''}`} key={src}>
                <img src={src} className="d-block w-100" alt={`Slide ${idx + 1}`} />
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#hotelCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#hotelCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}
