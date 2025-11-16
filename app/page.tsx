import Image from "next/image";

const products = [
  {
    name: "Rotina Completa Pele Oleosa",
    category: "Dermocosmética",
    promoTag: "-20%",
    price: "39,90 €",
    oldPrice: "49,90 €",
    skin: "Pele oleosa / acneica",
  },
  {
    name: "Sérum Vitamina C Iluminador",
    category: "Skin Care",
    promoTag: "",
    price: "24,90 €",
    oldPrice: "",
    skin: "Pele baça / manchas ligeiras",
  },
  {
    name: "Protetor Solar Diário SPF50+",
    category: "Solar",
    promoTag: "",
    price: "18,90 €",
    oldPrice: "",
    skin: "Todos os tipos de pele",
  },
  {
    name: "Base Fluida Clinic Cover",
    category: "Maquilhagem",
    promoTag: "",
    price: "23,90 €",
    oldPrice: "",
    skin: "Pele sensível · vários tons",
  },
  {
    name: "Creme Reparador de Barreira",
    category: "Skin Care",
    promoTag: "-15%",
    price: "21,50 €",
    oldPrice: "25,30 €",
    skin: "Pele seca / sensibilizada",
  },
  {
    name: "Gel Limpeza Suave Bebé",
    category: "Bebé & Mamã",
    promoTag: "",
    price: "11,90 €",
    oldPrice: "",
    skin: "Pele delicada do bebé",
  },
  {
    name: "Coffret Maquilhagem Dia-a-dia",
    category: "Maquilhagem",
    promoTag: "-25%",
    price: "29,90 €",
    oldPrice: "39,90 €",
    skin: "Todos os tipos",
  },
  {
    name: "Hidratante Oil-Free",
    category: "Dermocosmética",
    promoTag: "",
    price: "19,90 €",
    oldPrice: "",
    skin: "Pele mista a oleosa",
  },
];

export default function Home() {
  return (
    <div className="site">
      {/* TOP BAR */}
      <div className="top-bar">
        Envio rápido para Lousada e arredores · Aconselhamento farmacêutico
        personalizado
      </div>

      {/* HEADER */}
      <header>
        <div className="header-main">
          <div className="logo">
          <Image
  src="/logo-farma-clinic.jpg"
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

        <nav className="nav-cats">
          <div className="nav-cats-inner">
            <button className="cat-pill active">Todos</button>
            <button className="cat-pill">Skin care</button>
            <button className="cat-pill">Dermocosmética</button>
            <button className="cat-pill">Maquilhagem</button>
            <button className="cat-pill">Bebé & Mamã</button>
            <button className="cat-pill">Proteção solar</button>
            <button className="cat-pill">Em promoção</button>
          </div>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-banner">
            <div>
              <div className="hero-eyebrow">Farma Clinic · Lousada</div>
              <h1 className="hero-title">
                Cuidados de pele, saúde e maquilhagem com aconselhamento de
                farmácia.
              </h1>
              <p className="hero-sub">
                Explora a nossa seleção de dermocosmética, skin care e
                maquilhagem, com apoio de equipa farmacêutica para encontrares o
                produto certo para ti.
              </p>
              <div className="hero-tags">
                <span className="hero-tag">Dermocosmética de referência</span>
                <span className="hero-tag">Marcas de farmácia</span>
                <span className="hero-tag">Rotinas personalizadas</span>
              </div>
            </div>
            <div className="hero-cta">
              <button className="btn-primary">
                Ver novidades <span>→</span>
              </button>
              <span className="hero-note">
                Fala connosco para montarmos a tua rotina de cuidados de pele.
              </span>
            </div>
          </div>

          <div className="hero-side">
            <div className="mini-banner">
              <div>
                <strong>Campanha Skin Care</strong>
                <span>Até -25% em marcas selecionadas.</span>
              </div>
              <span className="mini-badge">Promo</span>
            </div>
            <div className="mini-banner">
              <div>
                <strong>Consultas de aconselhamento</strong>
                <span>Marca na loja Farma Clinic em Lousada.</span>
              </div>
              <span className="mini-tag">Saúde & Beleza</span>
            </div>
            <div className="mini-banner">
              <div>
                <strong>Maquilhagem de farmácia</strong>
                <span>Bases, corretores e batons para pele sensível.</span>
              </div>
              <span className="mini-tag">Novidades</span>
            </div>
          </div>
        </section>

        {/* PRODUTOS */}
        <section>
          <div className="section-header">
            <div>
              <h2>Produtos em destaque</h2>
              <p>
                Algumas sugestões de dermocosmética e maquilhagem da Farma
                Clinic.
              </p>
            </div>
          </div>

          <div className="products-grid">
            {products.map((p) => (
              <article key={p.name} className="product-card">
                <div className="product-img">Imagem do produto</div>
                <div className="product-badges">
                  <span className="product-pill">{p.category}</span>
                  {p.promoTag && (
                    <span className="product-pill secondary">
                      {p.promoTag}
                    </span>
                  )}
                </div>
                <div className="product-name">{p.name}</div>
                <div className="product-skin">{p.skin}</div>
                <div className="product-bottom">
                  <div>
                    <div className="product-price">{p.price}</div>
                    {p.oldPrice && (
                      <div className="product-old">{p.oldPrice}</div>
                    )}
                  </div>
                  <button className="btn-add">Adicionar</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SOBRE + CONTACTO */}
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

        <footer>
          © {new Date().getFullYear()} Farma Clinic · Lousada. Todos os
          direitos reservados.
        </footer>
      </main>
    </div>
  );
}
