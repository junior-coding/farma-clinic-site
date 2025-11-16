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
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "1.5rem",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div style={{ marginBottom: "1.5rem" }}>
        <a href="/" style={{ color: "#2563eb" }}>
          ← Voltar
        </a>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: "2rem",
          marginBottom: "2rem",
        }}
      >
        {/* IMAGEM */}
        <div
          style={{
            background: "linear-gradient(135deg, #f1fbf6, #edf7ff)",
            height: "300px",
            borderRadius: "16px",
            boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.9rem",
            color: "#6b7280",
          }}
        >
          Imagem do produto
        </div>

        {/* INFO DO PRODUTO */}
        <div>
          <span
            style={{
              background: "#e1f4ff",
              padding: "3px 10px",
              borderRadius: "20px",
              fontSize: "0.8rem",
              fontWeight: 600,
              color: "#2563eb",
            }}
          >
            {product.category}
          </span>

          <h1
            style={{
              fontSize: "1.8rem",
              margin: "0.8rem 0 0.5rem",
              fontWeight: 700,
            }}
          >
            {product.name}
          </h1>

          <p style={{ color: "#6b7280", marginBottom: "1rem" }}>
            {product.skin}
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "1rem",
              marginBottom: "1rem",
            }}
          >
            <span style={{ fontSize: "1.6rem", fontWeight: 700 }}>
              {product.price}
            </span>

            {product.oldPrice && (
              <span
                style={{
                  textDecoration: "line-through",
                  color: "#9ca3af",
                  fontSize: "1rem",
                }}
              >
                {product.oldPrice}
              </span>
            )}

            {product.promoTag && (
              <span
                style={{
                  background: "#fee2e2",
                  color: "#b91c1c",
                  padding: "4px 10px",
                  borderRadius: "16px",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                }}
              >
                {product.promoTag}
              </span>
            )}
          </div>

          <button
            onClick={() =>
              addToCart({
                slug: product.slug,
                name: product.name,
                price: priceNumber,
                quantity: 1,
              })
            }
            style={{
              background: "#7bc7f3",
              border: "none",
              padding: "10px 20px",
              borderRadius: "30px",
              color: "#fff",
              fontWeight: 600,
              cursor: "pointer",
              marginBottom: "1.5rem",
            }}
          >
            Adicionar ao carrinho 🛒
          </button>

          <h3
            style={{
              marginBottom: "0.5rem",
              marginTop: "1rem",
              fontSize: "1.2rem",
            }}
          >
            Descrição do produto
          </h3>

          <p style={{ color: "#4b5563", lineHeight: "1.5" }}>
            Este produto é ideal para quem procura cuidados eficazes e seguros na
            área de {product.category.toLowerCase()}. Para mais informações,
            contacta a equipa da Farma Clinic em Lousada — estamos sempre
            disponíveis para ajudar.
          </p>
        </div>
      </div>

      {related.length > 0 && (
        <section style={{ marginTop: "2rem" }}>
          <h2 style={{ fontSize: "1.4rem", marginBottom: "1rem" }}>
            Produtos relacionados
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1rem",
            }}
          >
            {related.map((p) => (
              <a
                key={p.slug}
                href={`/produto?slug=${p.slug}`}
                style={{
                  textDecoration: "none",
                  color: "#111",
                  borderRadius: "12px",
                  padding: "1rem",
                  background: "#fff",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                }}
              >
                <div
                  style={{
                    height: "100px",
                    borderRadius: "10px",
                    background:
                      "linear-gradient(135deg, #f1fbf6, #edf7ff)",
                    marginBottom: "0.6rem",
                  }}
                />
                <div style={{ fontWeight: 600 }}>{p.name}</div>
                <div
                  style={{ color: "#6b7280", fontSize: "0.85rem" }}
                >
                  {p.price}
                </div>
              </a>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
