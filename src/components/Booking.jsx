import './Booking.css';


import { useState } from 'react';

export default function Booking() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    fechaEntrada: '',
    fechaSalida: '',
    tipoHabitacion: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', form);
    // 🛠️ Aquí se integrará con backend más adelante
  };

  return (
    <section id="booking" className="bg-light text-dark py-5">
      <div className="container">
        <h2 className="text-center mb-4 text-teal" data-aos="fade-up">Reserva tu estancia</h2>

        <form
          onSubmit={handleSubmit}
          data-aos="fade-up"
          className="mx-auto bg-white p-4 shadow rounded"
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

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Fecha de entrada</label>
              <input
                type="date"
                className="form-control"
                name="fechaEntrada"
                value={form.fechaEntrada}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Fecha de salida</label>
              <input
                type="date"
                className="form-control"
                name="fechaSalida"
                value={form.fechaSalida}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold">Tipo de habitación</label>
            <select
              className="form-select"
              name="tipoHabitacion"
              value={form.tipoHabitacion}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="Suite Frente al Mar">Suite Frente al Mar</option>
              <option value="Cabaña Ecológica">Cabaña Ecológica</option>
              <option value="Suite Familiar">Suite Familiar</option>
            </select>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-teal px-5 py-2">
              Enviar Reserva
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
