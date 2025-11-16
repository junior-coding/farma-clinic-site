"use client";

import { useMemo, useState } from "react";
import Header from "@/components/header";
import Hero from "@/components/hero";
import ProductsGrid from "@/components/productsgrid";
import Footer from "@/components/footer";
import { products } from "@/data/products";

const categories = [
  { id: "all", label: "Todos" },
  { id: "Skin Care", label: "Skin care" },
  { id: "Dermocosmética", label: "Dermocosmética" },
  { id: "Maquilhagem", label: "Maquilhagem" },
  { id: "Bebé & Mamã", label: "Bebé & Mamã" },
  { id: "Solar", label: "Proteção solar" },
  { id: "Promo", label: "Em promoção" },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [search, setSearch] = useState<string>("");

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      if (activeCategory === "Promo") {
        if (!p.promoTag) return false;
      } else if (activeCategory !== "all" && p.category !== activeCategory) {
        return false;
      }

      if (!search.trim()) return true;

      const q = search.toLowerCase();
      return (
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.skin.toLowerCase().includes(q)
      );
    });
  }, [activeCategory, search]);

  return (
    <div className="site">
      <Header search={search} setSearch={setSearch} />

      <nav className="nav-cats">
        <div className="nav-cats-inner">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={
                "cat-pill" + (activeCategory === cat.id ? " active" : "")
              }
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </nav>

      <main>
        <Hero />

        <section>
          <div className="section-header">
            <div>
              <h2>Produtos em destaque</h2>
              <p>
                Algumas sugestões de dermocosmética e maquilhagem da Farma
                Clinic.
              </p>
            </div>
            <p style={{ fontSize: "0.85rem", color: "#6b7280" }}>
              A mostrar {filteredProducts.length} produto(s)
            </p>
          </div>

          <ProductsGrid products={filteredProducts} />
        </section>

        <section>
          <div className="section-header">
            <h2>Farma Clinic Lousada</h2>
            <p>Saúde, bem-estar e beleza num só espaço.</p>
          </div>

          <div className="two-col">
            <article className="card">
              <h3>Quem somos</h3>
              <p>
                A <strong>Farma Clinic</strong> junta o melhor da farmácia e da
                dermocosmética, com uma equipa preparada para te ajudar em temas
                como acne, pele sensível, envelhecimento, manchas ou escolha de
                maquilhagem adequada ao teu tipo de pele.
              </p>
              <p>
                Se preferires, podes falar connosco antes de comprar: explicamos
                como usar cada produto e ajudamos-te a montar uma rotina
                simples, eficaz e segura.
              </p>
            </article>

            <article className="card">
              <h3>Contacto e localização</h3>
              <div className="contact-grid">
                <div>
                  <div className="contact-label">Morada</div>
                  <div>Lousada · (coloca aqui a morada completa da loja)</div>
                </div>
                <div>
                  <div className="contact-label">Telefone / WhatsApp</div>
                  <div>
                    Tel: <a href="tel:+351000000000">+351 000 000 000</a>
                    <br />
                    WhatsApp: <a href="#">+351 000 000 000</a>
                  </div>
                </div>
                <div>
                  <div className="contact-label">Horário</div>
                  <div>Seg – Sex: 9h00 – 19h00 · Sáb: 9h00 – 13h00</div>
                </div>
                <div>
                  <div className="contact-label">Redes sociais</div>
                  <div>
                    Instagram: <a href="#">@farma.clinic.lousada</a>
                    <br />
                    Facebook: <a href="#">Farma Clinic Lousada</a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
