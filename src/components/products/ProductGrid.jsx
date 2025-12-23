import React from "react";

import ProductCard from "./ProductCard";

export default function ProductGrid( {products} ) {

    if (!products?.length) {
    return <div className="prod-info">No hay productos para mostrar.</div>;
  }

  return (
    <div className="pc-grid">
      {products.map((p) => (
        <ProductCard key={p.id ?? `${p.nombre}-${p.precio}`} product={p} />
      ))}
    </div>
  );
    
}
