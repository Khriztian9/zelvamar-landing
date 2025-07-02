import React from "react";

const MapaZelvamar = () => {
  return (
    <section
      className="container-fluid d-flex flex-column justify-content-center align-items-center text-white py-5"
      style={{
        backgroundImage: "url('/Heromap.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container bg-dark bg-opacity-75 p-4 rounded shadow" style={{ maxWidth: "900px" }}>
        <h2 className="mb-4 text-center">¿Cómo llegar?</h2>

        <p className="mb-3">
          Para llegar a <strong>Origen Zelvamar</strong> se puede tomar un avión desde Bogotá, Medellín, Cali o Cartago con destino al aeropuerto <strong>José Celestino Mutis</strong> de Bahía Solano. <br />
          Aerolíneas que viajan a Bahía Solano:
        </p>
        <ul>
          <li><a href="https://www.satena.com" target="_blank" rel="noopener noreferrer" className="text-teal">https://www.satena.com</a></li>
          <li><a href="https://clicair.co/" target="_blank" rel="noopener noreferrer" className="text-teal">https://clicair.co/</a></li>
          <li><a href="https://moonflights.com.co/" target="_blank" rel="noopener noreferrer" className="text-teal">https://moonflights.com.co/</a></li>
        </ul>

        <p>
          Al llegar al aeropuerto debes tomar una van o un mototaxi (tuk tuk) con destino hacia el corregimiento del Valle (40 minutos aprox), y finalmente desde el Valle tomar una moto hacia Playa Cuevita (10 minutos aprox).<br />
          <strong>¡Nosotros te ayudamos con la logística del transporte desde el aeropuerto en Bahía Solano!</strong>
        </p>

        <div
          className="mapa-container mt-4"
          style={{
            width: "100%",
            height: "400px",
            overflow: "hidden",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          }}
        >
          <iframe
            title="Ubicación Origen Zelvamar"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.8469490092734!2d-77.4099971!3d6.0755549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e493b5941324511%3A0xa800c11cc77eb3d9!2sOrigen%20Zelvamar!5e1!3m2!1ses!2sco!4v1719949241552!5m2!1ses!2sco"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapaZelvamar;
