"use client";

import { useCart } from "@/app/context/cart-context";
import type { Product } from "@/data/products";

type Props = {
  product: Product;
  related: Product[];
};

export default function ProductPageClient({ product, related }: Props) {
  const { addToCart } = useCart();

  const priceNumber = parseFloat(
    product.price.replace("€", "").replace(",", ".").trim()
  );

  return (
    <main className="product-page">
      {/* Link voltar */}
      <div className="product-page-back">
        <a href="/">← Voltar à loja</a>
      </div>

      {/* Bloco principal */}
      <section className="product-page-main">
        {/* Imagem / placeholder */}
        <div className="product-page-media">
          <div className="product-page-media-placeholder">
            Imagem do produto
          </div>
        </div>

        {/* Informação do produto */}
        <div className="product-page-info">
          <span className="product-page-category">{product.category}</span>

          <h1 className="product-page-title">{product.name}</h1>

          <p className="product-page-skin">{product.skin}</p>

          <div className="product-page-price-row">
            <div>
              <span className="product-page-price">{product.price}</span>
              {product.oldPrice && (
                <span className="product-page-old-price">
                  {product.oldPrice}
                </span>
              )}
              {product.promoTag && (
                <span className="product-page-promo-pill">
                  {product.promoTag}
                </span>
              )}
            </div>
          </div>

          <div className="product-page-actions">
            <button
              className="btn-product-add"
              onClick={() =>
                addToCart({
                  slug: product.slug,
                  name: product.name,
                  price: priceNumber,
                  quantity: 1,
                })
              }
            >
              Adicionar ao carrinho 🛒
            </button>

            <p className="product-page-note">
              Envio rápido para Lousada e arredores · Aconselhamento
              farmacêutico incluído.
            </p>
          </div>

          <div className="product-page-description">
            <h3>Descrição do produto</h3>
            <p>
              Este produto é ideal para quem procura cuidados eficazes e
              seguros na área de{" "}
              {product.category.toLowerCase()}. Para mais informações, contacta
              a equipa da Farma Clinic em Lousada — estamos sempre disponíveis
              para ajudar.
            </p>
          </div>
        </div>
      </section>

      {/* Produtos relacionados */}
      {related.length > 0 && (
        <section className="product-related">
          <h2>Produtos relacionados</h2>
          <div className="product-related-grid">
            {related.map((p) => (
              <a
                key={p.slug}
                href={`/produto/${p.slug}`}
                className="product-related-card"
              >
                <div className="product-related-image" />
                <div className="product-related-name">{p.name}</div>
                <div className="product-related-price">{p.price}</div>
              </a>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
