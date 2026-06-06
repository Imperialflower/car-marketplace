export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="brand-icon">◈</span>
        <span className="brand-name">APEX<span className="brand-accent">Motors</span></span>
      </div>
      <div className="navbar-links">
        <a href="#">Inventario</a>
        <a href="#">Financiamiento</a>
        <a href="#">Nosotros</a>
        <button className="nav-cta">Contactar</button>
      </div>
    </nav>
  );
}
