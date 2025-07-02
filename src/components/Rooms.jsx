export default function Rooms() {
  return (
    <section id="rooms" className="py-5 bg-black text-white">
      <div className="container">
        <h2 className="text-center text-teal mb-5" data-aos="fade-up">Instalaciones</h2>

        <div className="row">
          {/* Habitación 1 */}
          <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="100">
            <div className="card bg-dark border-0 shadow-lg h-100">
              <img src="/room1.jpeg" className="card-img-top" alt="Suite Frente al Mar" />
              <div className="card-body">
                <h5 className="card-title text-teal">Restaurante</h5>
                <p className="card-text text-light">
                  Con la mejor vista para disfrutar sabores que combinan comida internacional con sabores del pacifico colombiano. Contamos con menú para vegetarianos o con requerimientos especiales
                </p>
              </div>
            </div>
          </div>

          {/* Habitación 2 */}
          <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="card bg-dark border-0 shadow-lg h-100">
              <img src="/room2.jpeg" className="card-img-top" alt="Cabaña Ecológica" />
              <div className="card-body">
                <h5 className="card-title text-teal">Bar</h5>
                <p className="card-text text-light">
                  Nuestro bar se especializa en exaltar el sabor del viche, el licor ancestral del pacífico colombiano
                </p>
              </div>
            </div>
          </div>

          {/* Habitación 3 */}
          <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="300">
            <div className="card bg-dark border-0 shadow-lg h-100">
              <img src="/room3.jpeg" className="card-img-top" alt="Suite Familiar" />
              <div className="card-body">
                <h5 className="card-title text-teal">Zona de playa y cascadas</h5>
                <p className="card-text text-light">
                  Una caminata para conocer playa Cuevita un lugar lleno de agua dulce mar y selva.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
