import './Navbar.css';


export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top px-4 py-3">
      <a className="navbar-brand d-flex align-items-center" href="#hero">
        <img src="/zelvamar-logoblanco.png" alt="Zelvamar Logo" />
        <span className="fw-bold text-white">ZELVAMAR</span>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav gap-3">
          <li className="nav-item"><a className="nav-link" href="#hero">Inicio</a></li>
          <li className="nav-item"><a className="nav-link" href="#rooms">Instalaciones</a></li>
          <li className="nav-item"><a className="nav-link" href="#booking">Contáctenos</a></li>
        </ul>
      </div>
    </nav>
  );
}

