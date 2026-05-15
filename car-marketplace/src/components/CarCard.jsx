export default function CarCard({ car, onClick }) {
  const fmt = (n) => n.toLocaleString("es-MX", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  return (
    <div className="car-card" onClick={onClick}>
      <div className="car-image-wrap">
        <img src={car.image} alt={`${car.brand} ${car.model}`} className="car-image" />
        <span className="car-badge">{car.category === "electrico" ? "⚡ Eléctrico" : car.fuel}</span>
      </div>
      <div className="car-info">
        <p className="car-brand">{car.brand}</p>
        <h3 className="car-model">{car.model}</h3>
        <div className="car-specs">
          <span>{car.year}</span>
          <span className="dot">·</span>
          <span>{car.hp} CV</span>
          <span className="dot">·</span>
          <span>{car.transmission}</span>
        </div>
        <div className="car-footer">
          <span className="car-price">{fmt(car.price)}</span>
          <button className="card-btn">Ver detalles →</button>
        </div>
      </div>
    </div>
  );
}
