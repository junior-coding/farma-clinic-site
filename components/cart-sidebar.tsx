"use client";

import { useCart } from "@/app/context/cart-context";

export default function CartSidebar() {
  const {
    cart,
    removeFromCart,
    totalPrice,
    isOpen,
    closeCart,
    clearCart,
  } = useCart();

  return (
    <aside className={`cart-sidebar ${isOpen ? "open" : ""}`}>
      <div className="cart-header">
        <h2>Carrinho</h2>
        <button className="cart-close" onClick={closeCart}>
          ✕
        </button>
      </div>

      <div className="cart-body">
        {cart.length === 0 && (
          <p className="cart-empty">O carrinho está vazio.</p>
        )}

        {cart.map((item) => (
          <div key={item.slug} className="cart-item">
            <div>
              <strong>{item.name}</strong>
              <div className="cart-item-extra">
                Quantidade: {item.quantity}
              </div>
              <div className="cart-item-extra">
                Preço: {(item.price * item.quantity).toFixed(2)} €
              </div>
            </div>

            <button
              className="cart-remove"
              onClick={() => removeFromCart(item.slug)}
            >
              🗑️
            </button>
          </div>
        ))}
      </div>

      <div className="cart-footer">
        <div className="cart-total">
          <span>Total:</span>
          <strong>{totalPrice.toFixed(2)} €</strong>
        </div>

        <div className="cart-footer-buttons">
          <button className="btn-outline" onClick={clearCart}>
            Limpar carrinho
          </button>
          <button className="btn-primary">Finalizar compra</button>
        </div>
      </div>
    </aside>
  );
}
