import { products } from "@/data/products";
import ProductPageClient from "@/components/productpageclient";
import { notFound } from "next/navigation";

type PageProps = {
  searchParams?: { slug?: string };
};

export default function ProductPage({ searchParams }: PageProps) {
  const slug = searchParams?.slug;

  if (!slug) {
    return (
      <main
        style={{
          padding: "2rem",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <h1>Produto não encontrado</h1>
        <p>Falta o parâmetro <code>slug</code> na URL.</p>
        <p>
          <a href="/" style={{ color: "#2563eb" }}>
            ← Voltar à loja
          </a>
        </p>
      </main>
    );
  }

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return notFound();
  }

  const related = products.filter(
    (p) => p.category === product.category && p.slug !== product.slug
  );

  // Aqui só passamos dados simples para o componente cliente
  return <ProductPageClient product={product} related={related} />;
}
