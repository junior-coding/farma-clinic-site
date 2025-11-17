"use client";

import { useParams } from "next/navigation";
import { products, type Product } from "@/data/products";
import ProductPageClient from "@/components/productpageclient";

export default function ProductPage() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug;

  if (!slug) {
    return (
      <main
        style={{
          padding: "2rem",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <h1>Produto não encontrado</h1>
        <p>Não foi possível ler o identificador do produto na URL.</p>
        <p>
          <a href="/" style={{ color: "#2563eb" }}>
            ← Voltar à loja
          </a>
        </p>
      </main>
    );
  }

  const product: Product | undefined = products.find(
    (p) => p.slug === slug
  );

  if (!product) {
    return (
      <main
        style={{
          padding: "2rem",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <h1>Produto não encontrado</h1>
        <p>
          Não existe nenhum produto com o slug <code>{slug}</code> em{" "}
          <code>data/products.ts</code>.
        </p>
        <p>
          <a href="/" style={{ color: "#2563eb" }}>
            ← Voltar à loja
          </a>
        </p>
      </main>
    );
  }

  const related = products.filter(
    (p) => p.category === product.category && p.slug !== product.slug
  );

  return <ProductPageClient product={product} related={related} />;
}
