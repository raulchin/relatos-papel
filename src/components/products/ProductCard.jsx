import React from "react";

import { useCart } from "../../context/CartContext";

export default function ProductCard( {product}) {
    
    const { nombre, precio, stock, url } = product;

    const stockNum = Number(stock ?? 0);

    const status = stockNum <= 0 ? "Agotado" : stockNum <= 5 ? "Bajo stock" : "Disponible";

    const priceText = new Intl.NumberFormat("es-EC", {
    style: "currency",
    currency: "USD",
  }).format(Number(precio ?? 0));

  const { addToCart } = useCart();

  return (
    <article className="pc-card">
      <div className="pc-imgWrap">
        <img className="pc-img" src={url} alt={nombre} loading="lazy"/>
        <span
            className={
            "pc-badge " +
            (status === "Disponible"
              ? "pc-badge--ok"
              : status === "Bajo stock"
              ? "pc-badge--warn"
              : "pc-badge--bad"
            )
          }>
            {status}
        </span>
      </div>

      <div className="pc-body">
          <h3 className="pc-title">{nombre}</h3>
          <div className="pc-row">
            <span className="pc-label">Precio</span>
            <span className="pc-value">{priceText}</span>
          </div>

          <div className="pc-row">
            <span className="pc-label">Stock</span>
            <span className="pc-value">{stockNum}</span>
          </div>

          <button
          className="pc-btn"
          type="button"
          disabled={stockNum <= 0}
          onClick={() => addToCart(product) }
        >
          {stockNum <= 0 ? "Sin stock" : "Agregar"}
        </button>
        
      </div>
    </article>
  );

}