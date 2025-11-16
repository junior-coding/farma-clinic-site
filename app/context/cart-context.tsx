"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type CartItem = {
  slug: string;
  name: string;
  price: number;
  quantity: number;
};

type CartContextValue = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (slug: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // carregar do localStorage
  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) {
      setCart(JSON.parse(stored));
    }
  }, []);

  // guardar no localStorage sempre que mudar
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(newItem: CartItem) {
    setCart((current) => {
      const existing = current.find((i) => i.slug === newItem.slug);

      if (existing) {
        return current.map((i) =>
          i.slug === newItem.slug
            ? { ...i, quantity: i.quantity + newItem.quantity }
            : i
        );
      }

      return [...current, newItem];
    });

    setIsOpen(true); // abre o carrinho
  }

  function removeFromCart(slug: string) {
    setCart((c) => c.filter((i) => i.slug !== slug));
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        totalItems: cart.reduce((acc, item) => acc + item.quantity, 0),
        totalPrice: cart.reduce(
          (acc, item) => acc + item.quantity * item.price,
          0
        ),
        isOpen,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
