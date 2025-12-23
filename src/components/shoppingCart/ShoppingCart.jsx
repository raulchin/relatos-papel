import React from "react";

import { Link } from "react-router-dom";

import { useCart } from "../../context/CartContext";

import "./ShoppingCart.css";

export default function ShoppingCart(){
 
    const { items, cartTotal, addToCart, removeOne, removeItem, clearCart } = useCart();

    const totalText = new Intl.NumberFormat("es-EC", {
    style: "currency",
    currency: "USD",
  }).format(cartTotal);

  if (!items.length) {
    return (
      <div className="cart-wrap">
        <div className="cart-card cart-empty">
          <h2 className="cart-title">Tu carrito está vacío</h2>
          <p className="cart-muted">Agrega productos desde la sección de productos.</p>
          <Link className="cart-btn cart-btnPrimary" to="/products">
            Ir a productos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-wrap">
      <div className="cart-header">
        <div>
          <h2 className="cart-title">Carrito</h2>
          <p className="cart-muted">Revisa tus productos antes de continuar.</p>
        </div>

        <button className="cart-btn cart-btnGhost" onClick={clearCart} type="button">
          Vaciar carrito
        </button>
      </div>

      <div className="cart-grid">
        <div className="cart-list">
          {items.map((i) => {
            const lineTotal = (Number(i.precio) || 0) * (Number(i.qty) || 0);
            const lineText = new Intl.NumberFormat("es-EC", {
              style: "currency",
              currency: "USD",
            }).format(lineTotal);

            return (
              <div className="cart-item" key={i.id}>
                <img className="cart-img" src={i.url} alt={i.nombre} />

                <div className="cart-info">
                  <div className="cart-name">{i.nombre}</div>
                  <div className="cart-sub">
                    <span className="cart-price">
                      ${Number(i.precio ?? 0).toFixed(2)}
                    </span>
                    <span className="cart-dot">•</span>
                    <span className="cart-lineTotal">{lineText}</span>
                  </div>
                </div>

                <div className="cart-actions">
                  <div className="cart-qty">
                    <button
                      className="cart-qtyBtn"
                      type="button"
                      onClick={() => removeOne(i.id)}
                      aria-label="Quitar uno"
                    >
                      −
                    </button>

                    <span className="cart-qtyValue">{i.qty}</span>

                    <button
                      className="cart-qtyBtn"
                      type="button"
                      onClick={() => addToCart(i)}
                      aria-label="Agregar uno"
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="cart-remove"
                    type="button"
                    onClick={() => removeItem(i.id)}
                  >
                    Quitar
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Resumen */}
        <aside className="cart-summary">
          <h3 className="cart-summaryTitle">Resumen</h3>

          <div className="cart-row">
            <span className="cart-muted">Subtotal</span>
            <strong>{totalText}</strong>
          </div>

          <div className="cart-row">
            <span className="cart-muted">Envío</span>
            <strong>$0.00</strong>
          </div>

          <hr className="cart-hr" />

          <div className="cart-row cart-totalRow">
            <span>Total</span>
            <strong className="cart-total">{totalText}</strong>
          </div>

          <button className="cart-btn cart-btnPrimary" type="button">
            Continuar
          </button>

          <Link className="cart-btn cart-btnLink" to="/products">
            Seguir comprando
          </Link>
        </aside>
      </div>
    </div>
  );
}
