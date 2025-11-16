"use client";

import { useCart } from "@/app/context/cart-context";

export default function CartSidebar() {
  const { cart, removeFromCart, totalPrice, isOpen, closeCart } = useCart();

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: isOpen ? 0 : "-380px",
        width: "380px",
        height: "100vh",
        background: "white",
        boxShadow: "0 0 20px rgba(0,0,0,0.15)",
        padding: "20px",
        transition: "right 0.3s ease",
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <button
        onClick={closeCart}
        style={{ marginBottom: "20px", textAlign: "left" }}
      >
        ← Fechar
      </button>

      <h2 style={{ marginBottom: "20px" }}>Carrinho</h2>

      <div style={{ flexGrow: 1 }}>
        {cart.length === 0 && <p>O carrinho está vazio.</p>}

        {cart.map((item) => (
          <div
            key={item.slug}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "15px",
              borderBottom: "1px solid #eee",
              paddingBottom: "10px",
            }}
          >
            <div>
              <strong>{item.name}</strong>
              <br />
              Quantidade: {item.quantity}
              <br />
              Preço: {(item.price * item.quantity).toFixed(2)} €
            </div>

            <button onClick={() => removeFromCart(item.slug)}>🗑️</button>
          </div>
        ))}
      </div>

      <div>
        <h3>Total: {totalPrice.toFixed(2)} €</h3>
        <button
          style={{
            width: "100%",
            padding: "12px",
            background: "#4aa7ff",
            color: "white",
            borderRadius: "20px",
            border: "none",
            fontWeight: "bold",
            marginTop: "10px",
          }}
        >
          Finalizar compra
        </button>
      </div>
    </div>
  );
}
