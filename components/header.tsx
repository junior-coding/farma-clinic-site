"use client";

import Image from "next/image";

type HeaderProps = {
  search: string;
  setSearch: (value: string) => void;
};

export default function Header({ search, setSearch }: HeaderProps) {
  return (
    <>
      <div className="top-bar">
        Envio rápido para Lousada e arredores · Aconselhamento farmacêutico
        personalizado
      </div>

      <header>
        <div className="header-main">
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

          <div className="search-box">
            <span>🔍</span>
            <input
              type="text"
              placeholder="Pesquisa por produto, marca ou necessidade…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="header-actions">
            <div className="header-action">
              <span className="icon">👤</span>
              <span>Entrar / Registar</span>
            </div>
            <div className="header-action">
              <span className="icon">🛒</span>
              <span>Carrinho</span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
