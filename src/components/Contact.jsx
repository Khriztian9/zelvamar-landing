import './Contact.css';


import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Mensaje enviado:', form);
    // 🛠️ Aquí se integrará con backend más adelante
  };

  return (
    <section id="booking" className="bg-light text-dark py-5">
      <div className="container">
        <h2 className="text-center mb-4 text-teal" data-aos="fade-up">Contáctanos</h2>

        <form
          onSubmit={handleSubmit}
          data-aos="fade-up"
          className="contact-form mx-auto bg-white p-4 shadow rounded"
          style={{ maxWidth: '600px' }}
        >
          <div className="mb-3">
            <label className="form-label fw-semibold">Nombre completo</label>
            <input
              type="text"
              className="form-control"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              required
              placeholder="Ej: Juan Pérez"
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Correo electrónico</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="ejemplo@correo.com"
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold">Mensaje</label>
            <textarea
              className="form-control"
              name="mensaje"
              rows="4"
              value={form.mensaje}
              onChange={handleChange}
              required
              placeholder="Escribe tu mensaje"
            />
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-teal px-5 py-2">Enviar</button>
          </div>
        </form>
      </div>
    </section>
  );
}
