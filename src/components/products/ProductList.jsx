import React, { useEffect, useMemo, useState } from "react";
import "./products.css";

import ProductGrid from "./ProductGrid";

import { useCart } from "../../context/CartContext";

const PRODUCTS_KEY = "products_stock_v1";

export default function ProductList() {

  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { addToCart } = useCart();

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        setError("");

        const cached = localStorage.getItem(PRODUCTS_KEY);
        if (cached) {
          setProducts(JSON.parse(cached));
          return;
        }

        const res = await fetch("/products.json");
        if (!res.ok) throw new Error(`Error HTTP: ${res.status}`);

        const data = await res.json();
        setProducts(Array.isArray(data) ? data : []);
      } catch (e) {
        setError(e?.message ?? "Error cargando productos");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  // Persistir stock actualizado
  useEffect(() => {
    if (products.length) {
      localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
    }
  }, [products]);

   //Restamos el stock y agregas al carrito
  const handleAdd = (product) => {
    const stockNum = Number(product.stock ?? 0);
    if (stockNum <= 0) return;

    // 1) agrega al carrito (setState del provider)
    addToCart(product);

    // 2) baja stock en productos (solo setProducts aquí)
    setProducts((prev) =>
      prev.map((p) =>
        p.id === product.id ? { ...p, stock: Number(p.stock ?? 0) - 1 } : p
      )
    );
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products;
    return products.filter((p) => (p.nombre ?? "").toLowerCase().includes(q));
  }, [products, query]);

  return (
    <section className="prod-wrap">
      <div className="prod-header">
        <div>
          <h2 className="prod-title">Catálogo</h2>
          <p className="prod-subtitle">Productos cargados desde un archivo JSON.</p>
        </div>

        <div className="search-wrap">
          <input
            className="prod-search"
            placeholder="Buscar por nombre..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <span className="search-icon" aria-hidden="true">
            {/* Lupa SVG */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 21l-4.3-4.3m1.8-5.2a7 7 0 11-14 0 7 7 0 0114 0z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </div>

      </div>

      {loading && <div className="prod-info">Cargando productos...</div>}
      {error && <div className="prod-error">No se pudo cargar: {error}</div>}

      {!loading && !error && (
        <ProductGrid products={filtered} onAdd={handleAdd} />
      )}
    </section>
  );
}