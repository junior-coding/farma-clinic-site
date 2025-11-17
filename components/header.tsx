"use client";

import Image from "next/image";
import { useCart } from "@/app/context/cart-context";

type HeaderProps = {
  search: string;
  setSearch: (value: string) => void;
};

export default function Header({ search, setSearch }: HeaderProps) {
  const { totalItems, openCart } = useCart();

  return (
    <>
      <div className="top-bar">
        Envio rápido para Lousada e arredores · Aconselhamento farmacêutico
        personalizado
      </div>

      <header>
        <div className="header-main">
          {/* LOGO */}
          <div className="logo">
            <Image
              src="/logo-farma-clinic.png"
              alt="Farma Clinic"
              width={220}
              height={80}
              className="logo-img"
              priority
            />
            <small>Lousada</small>
          </div>

          {/* PESQUISA */}
          <div className="search-box">
            <span>🔍</span>
            <input
              type="text"
              placeholder="Pesquisa por produto, marca ou necessidade…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* AÇÕES */}
          <div className="header-actions">
            {/* ENTRAR / REGISTAR */}
            <button className="header-action header-action--ghost">
              <span>Entrar / Registar</span>
            </button>

            {/* CARRINHO */}
            <button
              className="header-action header-action--cart"
              onClick={openCart}
            >
              <span>Carrinho</span>
              {totalItems > 0 && (
                <span className="cart-badge">{totalItems}</span>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
