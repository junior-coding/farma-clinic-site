import type { Product } from "@/data/products";

type ProductsGridProps = {
  products: Product[];
};

export default function ProductsGrid({ products }: ProductsGridProps) {
  return (
    <div className="products-grid">
      {products.map((p) => (
        <a
  key={p.slug}
  href={`/produto/${p.slug}`}
  className="product-card"
>

          <div className="product-img">Imagem do produto</div>
          <div className="product-badges">
            <span className="product-pill">{p.category}</span>
            {p.promoTag && (
              <span className="product-pill secondary">{p.promoTag}</span>
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
        </a>
      ))}
    </div>
  );
}
