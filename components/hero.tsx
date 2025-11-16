export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-banner">
        <div>
          <div className="hero-eyebrow">Farma Clinic · Lousada</div>
          <h1 className="hero-title">
            Cuidados de pele, saúde e maquilhagem com aconselhamento de
            farmácia.
          </h1>
          <p className="hero-sub">
            Explora a nossa seleção de dermocosmética, skin care e maquilhagem,
            com apoio de equipa farmacêutica para encontrares o produto certo
            para ti.
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
  );
}
