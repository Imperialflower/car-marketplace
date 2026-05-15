import { useState } from "react";
import Hero from "./components/Hero";
import CarGrid from "./components/CarGrid";
import CarModal from "./components/CarModal";
import Navbar from "./components/Navbar";
import "./App.css";

export default function App() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("all");

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <CarGrid filter={filter} setFilter={setFilter} onSelect={setSelected} />
      {selected && <CarModal car={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
