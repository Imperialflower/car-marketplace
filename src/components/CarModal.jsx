export default function CarModal({ car, onClose }) {
  const fmt = (n) => n.toLocaleString("es-MX", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="modal-image-wrap">
          <img src={car.image} alt={`${car.brand} ${car.model}`} className="modal-image" />
        </div>
        <div className="modal-body">
          <p className="modal-brand">{car.brand} · {car.year}</p>
          <h2 className="modal-title">{car.model}</h2>
          <p className="modal-desc">{car.description}</p>
          <div className="modal-specs">
            <div className="spec-item"><span className="spec-label">Potencia</span><span className="spec-val">{car.hp} CV</span></div>
            <div className="spec-item"><span className="spec-label">Combustible</span><span className="spec-val">{car.fuel}</span></div>
            <div className="spec-item"><span className="spec-label">Transmisión</span><span className="spec-val">{car.transmission}</span></div>
            <div className="spec-item"><span className="spec-label">Color</span><span className="spec-val">{car.color}</span></div>
          </div>
          <div className="modal-footer">
            <div>
              <p className="modal-price-label">Precio</p>
              <p className="modal-price">{fmt(car.price)}</p>
            </div>
            <div className="modal-actions">
              <button className="btn-ghost-sm">Financiar</button>
              <button className="btn-primary-sm">Comprar ahora</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
