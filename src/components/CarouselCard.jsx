import './CarouselCard.css';

export default function CarouselCard() {
  const images = Array.from({ length: 15 }, (_, i) => `/carrusel${i + 1}.jpg`);

  return (
    <section id="carousel-card" className="carousel-card-section bg-black text-white py-5">
      <div className="container" data-aos="fade-up">
        <div id="zelvamarCardCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {images.map((src, idx) => (
              <div className={`carousel-item${idx === 0 ? ' active' : ''}`} key={src}>
                <div className="carousel-card-wrapper">
                  <img src={src} alt={`Imagen ${idx + 1}`} className="carousel-card-img" />
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#zelvamarCardCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Anterior</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#zelvamarCardCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>
      </div>
    </section>
  );
}
