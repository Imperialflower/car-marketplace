export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-eyebrow">Colección 2024</p>
        <h1 className="hero-title">
          Conduce lo<br />
          <span className="hero-accent">extraordinario</span>
        </h1>
        <p className="hero-subtitle">
          Vehículos de alto desempeño seleccionados para quienes no aceptan compromisos.
        </p>
        <div className="hero-actions">
          <button className="btn-primary">Ver catálogo</button>
          <button className="btn-ghost">Agendar prueba</button>
        </div>
      </div>
      <div className="hero-stats">
        <div className="stat"><span className="stat-num">240+</span><span className="stat-label">Modelos</span></div>
        <div className="stat-divider" />
        <div className="stat"><span className="stat-num">12</span><span className="stat-label">Marcas</span></div>
        <div className="stat-divider" />
        <div className="stat"><span className="stat-num">98%</span><span className="stat-label">Clientes satisfechos</span></div>
      </div>
    </section>
  );
}
