export default function Rooms() {
  return (
    <section id="rooms" className="py-5 bg-black text-white">
      <div className="container">
        <h2 className="text-center text-teal mb-5" data-aos="fade-up">Nuestras Habitaciones</h2>

        <div className="row">
          {/* Habitación 1 */}
          <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="100">
            <div className="card bg-dark border-0 shadow-lg h-100">
              <img src="/room1.jpg" className="card-img-top" alt="Suite Frente al Mar" />
              <div className="card-body">
                <h5 className="card-title text-teal">Suite Frente al Mar</h5>
                <p className="card-text text-light">
                  Vistas panorámicas al océano, cama king y balcón privado.
                </p>
              </div>
            </div>
          </div>

          {/* Habitación 2 */}
          <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="card bg-dark border-0 shadow-lg h-100">
              <img src="/room2.jpg" className="card-img-top" alt="Cabaña Ecológica" />
              <div className="card-body">
                <h5 className="card-title text-teal">Cabaña Ecológica</h5>
                <p className="card-text text-light">
                  Ideal para desconectar, con materiales sostenibles y rodeada de naturaleza.
                </p>
              </div>
            </div>
          </div>

          {/* Habitación 3 */}
          <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="300">
            <div className="card bg-dark border-0 shadow-lg h-100">
              <img src="/room3.jpg" className="card-img-top" alt="Suite Familiar" />
              <div className="card-body">
                <h5 className="card-title text-teal">Suite Familiar</h5>
                <p className="card-text text-light">
                  Espacio para toda la familia con cocina, dos dormitorios y terraza.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
