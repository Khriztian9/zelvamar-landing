export default function Hero() {
  return (
    <section
      id="hero"
      className="d-flex align-items-center justify-content-center text-center"
      style={{
        height: "100vh",
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#000",
      }}
    >
      <div data-aos="fade-up" className="p-4 bg-dark bg-opacity-50 rounded">
        <img src="/zelvamar-logo.png" alt="Zelvamar" style={{ width: "150px", marginBottom: "20px" }} />
        <h1 className="fw-bold mb-3">Un refugio natural en el Pacífico</h1>
        <a href="#booking" className="btn btn-teal px-4 py-2">Reservar ahora</a>
      </div>
    </section>
  );
}
