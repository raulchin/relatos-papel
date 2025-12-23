import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);

const STORAGE_KEY = "cart_items_v1";

function loadCartFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => loadCartFromStorage());

  // Persistir en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addToCart = (product) => {
    setItems((prev) => {
      const idx = prev.findIndex((i) => i.id === product.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + 1 };
        return copy;
      }
      return [
        ...prev,
        {
          id: product.id,
          nombre: product.nombre,
          precio: product.precio,
          url: product.url,
          qty: 1,
        },
      ];
    });
  };

  const removeOne = (id) => {
    setItems((prev) => {
      const idx = prev.findIndex((i) => i.id === id);
      if (idx < 0) return prev;

      const copy = [...prev];
      const item = copy[idx];

      if (item.qty <= 1) {
        copy.splice(idx, 1);
        return copy;
      }

      copy[idx] = { ...item, qty: item.qty - 1 };
      return copy;
    });
  };

  const removeItem = (id) => setItems((prev) => prev.filter((i) => i.id !== id));

  const clearCart = () => setItems([]);

  const cartCount = useMemo(
    () => items.reduce((sum, i) => sum + (Number(i.qty) || 0), 0),
    [items]
  );

  const cartTotal = useMemo(
    () => items.reduce((sum, i) => sum + (Number(i.precio) || 0) * (Number(i.qty) || 0), 0),
    [items]
  );

  const value = { items, addToCart, removeOne, removeItem, clearCart, cartCount, cartTotal };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de <CartProvider>");
  return ctx;
}
