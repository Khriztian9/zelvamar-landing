import './Footer.css';


export default function Footer() {
  return (
    <footer className="bg-black text-white py-4" id="contact">
      <div className="container" data-aos="fade-up">
        <div className="row text-center text-md-start">
          {/* Columna 1: Logo y descripción */}
          <div className="col-md-4 mb-3">
            <img src="/zelvamar-logo.png" alt="Zelvamar" style={{ height: '50px' }} />
            <p className="mt-3 text-muted">
              ZELVAMAR es un refugio natural entre el mar y la montaña. Vive la experiencia del Pacífico colombiano.
            </p>
          </div>

          {/* Columna 2: Contacto */}
          <div className="col-md-4 mb-3">
            <h5 className="text-teal">Contacto</h5>
            <p className="mb-1"><i className="bi bi-envelope"></i> reservas@zelvamar.com</p>
            <p className="mb-1"><i className="bi bi-telephone"></i> +57 310 123 4567</p>
            <p><i className="bi bi-geo-alt"></i> Sapzurro, Chocó, Colombia</p>
          </div>

          {/* Columna 3: Redes */}
          <div className="col-md-4 mb-3">
            <h5 className="text-teal">Síguenos</h5>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
                <a href="https://facebook.com" className="text-white"><i className="bi bi-facebook fs-4"></i></a>
                <a href="https://instagram.com" className="text-white"><i className="bi bi-instagram fs-4"></i></a>
                <a href="https://wa.me/573101234567" className="text-white"><i className="bi bi-whatsapp fs-4"></i></a>

            </div>
          </div>
        </div>

        <hr className="border-gray" />
        <p className="text-center text-muted mb-0">© {new Date().getFullYear()} ZELVAMAR. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
