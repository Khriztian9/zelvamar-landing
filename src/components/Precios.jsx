import './Precios.css';

export default function Accommodation() {
  return (
    <section id="accommodation" className="accommodation-section py-5">
      <div className="container">
        <h2 className="text-center text-teal mb-4" data-aos="fade-up">Alojamiento</h2>

        <div className="bg-dark bg-opacity-50 p-4 rounded shadow-lg mb-5" data-aos="fade-up">
          <p className="lead mb-3">
            El hotel está conformado por un conjunto de 6 cabañas independientes, limpias y acogedoras que combinan una arquitectura amigable con el ambiente. Ideales para descansar cómodamente y disfrutar de un entorno natural en medio de la selva chocoana.
          </p>
          <p>
            <strong>Tarifa 2025 - Temporada alta:</strong> $240.000 por persona (incluye desayuno, almuerzo y cena).<br />
            <em>*Junio a Octubre temporada de ballenas.</em>
          </p>
          <p>
            <strong>Tarifa 2025 - Temporada baja:</strong> $200.000 por persona (incluye desayuno, almuerzo y cena).
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-4" data-aos="fade-right">
            <div className="card h-100 bg-dark bg-opacity-75 text-white border-0 shadow rounded p-3">
              <h3 className="h5 text-teal mb-2">CABAÑA PRIVADA</h3>
              <p className="small">
                Capacidad para 2 personas frente al mar. 1 cama King, mosquiteros, baño privado, armario, mesa y balcón con vista al mar.
              </p>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up">
            <div className="card h-100 bg-dark bg-opacity-75 text-white border-0 shadow rounded p-3">
              <h3 className="h5 text-teal mb-2">CABAÑA FAMILIAR 4 Personas</h3>
              <p className="small">
                Capacidad para 4 personas. 1 cama King + 1 cama de 1.40 m, mosquiteros, baño privado, armario, mesa y balcón con vista al mar.
              </p>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-left">
            <div className="card h-100 bg-dark bg-opacity-75 text-white border-0 shadow rounded p-3">
              <h3 className="h5 text-teal mb-2">CABAÑA FAMILIAR 6 Personas</h3>
              <p className="small">
                Capacidad para 6 personas. 2 camas King, mosquiteros, baño privado, armario, mesa y balcón con vista al mar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
