import { cars, categories } from "../data/cars";
import CarCard from "./CarCard";

export default function CarGrid({ filter, setFilter, onSelect }) {
  const filtered = filter === "all" ? cars : cars.filter(c => c.category === filter);

  return (
    <section className="car-grid-section">
      <div className="section-header">
        <h2 className="section-title">Nuestro inventario</h2>
        <div className="filter-tabs">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`filter-tab ${filter === cat.id ? "active" : ""}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
      <div className="car-grid">
        {filtered.map(car => (
          <CarCard key={car.id} car={car} onClick={() => onSelect(car)} />
        ))}
      </div>
    </section>
  );
}
