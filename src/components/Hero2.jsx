import './Hero2.css';

export default function Hero2() {
  return (
    <section
      id="hero2"
      className="d-flex align-items-center justify-content-center text-center"
      style={{
        height: '100vh',
        backgroundImage: "url('/Hero2.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#000',
      }}
    >
      <div data-aos="fade-up" className="hero2-content p-4 bg-dark bg-opacity-50 rounded">
        <p className="mb-3">
          Un paraíso natural para descansar al frente del mar , desconectar y disfrutar de la magia del Pacifico Chocoano.
        </p>
        <p className="mb-4">
          En el corazón del Pacífico colombiano, en el corregimiento del valle, Bahía Solano, en playa Cuevita en el sector de Coredó a 30 minutos del Parque Nacional Natural Utría, con 9 kilometros de playas casi vírgenes  Origen Zelvamar te ofrece una experiencia única:
        </p>
        <ul className="list-unstyled mb-0">
          <li>6 cabañas privadas frente al mar </li>
          <li>Baño privado</li>
          <li>Balcón con vista a la playa  y la selva</li>
          <li>Entorno tranquilo y 100% natural</li>
          <li>Gastronomía Local </li>
          <li>Privacidad, silencio y confort</li>
        </ul>
      </div>
    </section>
  );
}
