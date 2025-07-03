import './Footer.css';


export default function Footer() {
  return (
    <footer className="bg-black text-white py-4" id="contact">
      <div className="container" data-aos="fade-up">
        <div className="row text-center text-md-start">          

          {/* Columna 2: Contacto */}
          <div className="col-md-4 mb-3">
            <h5 className="text-teal">Contacto</h5>
            <p className="mb-1"><i className="bi bi-envelope"></i> origenzelvamar.choco@gmail.com</p>
            <p className="mb-1"><i className="bi bi-telephone"></i> +57 322 752 9866</p>
            <p><i className="bi bi-geo-alt"></i> Bahia Solano, Chocó, Colombia</p>
          </div>

          {/* Columna 3: Redes */}
          <div className="col-md-4 mb-3">
            <h5 className="text-teal">Síguenos</h5>
              <div className="d-flex gap-3 justify-content-center justify-content-md-start">
                <a href="https://www.instagram.com/origenzelvamar/" target="_blank" rel="noopener noreferrer" className="text-white">
                  <i className="bi bi-instagram fs-3"></i>
                </a>
                <a href="https://www.tripadvisor.com/Hotel_Review-g1222140-d25187054-Reviews-Zelvamar-Bahia_Solano_Choco_Department_Colombia.html" target="_blank" rel="noopener noreferrer" className="text-white">
                  <i className="bi bi-tripadvisor fs-3"></i>
                </a>
            </div>
          </div>
        </div>

        <hr className="border-gray" />
        <p className="text-center text-muted mb-0">© {new Date().getFullYear()} ZELVAMAR. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}