import React from "react";

import ProductCard from "./ProductCard";

export default function ProductGrid( {products, onAdd} ) {

  if (!products?.length) return <div className="prod-info">No hay productos.</div>;

  return (
    <div className="pc-grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onAdd={onAdd} />
      ))}
    </div>
  );
    
}
