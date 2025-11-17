"use client";

import { useCart } from "@/app/context/cart-context";
import type { Product } from "@/data/products";

type Props = {
  products: Product[];
};

export default function ProductsGrid({ products }: Props) {
  const { addToCart } = useCart();

  function handleAddToCart(p: Product, e: React.MouseEvent) {
    e.preventDefault(); // impede navegar para a página de produto

    const priceNumber = parseFloat(
      p.price.replace("€", "").replace(",", ".").trim()
    );

    addToCart({
      slug: p.slug,
      name: p.name,
      price: priceNumber,
      quantity: 1,
    });
  }

  return (
    <div id="produtos" className="products-grid">
      {products.map((p) => (
        <a
          key={p.slug}
          href={`/produto/${p.slug}`}
          className="product-card"
        >
          <div className="product-card-inner">
            <div className="product-img-placeholder" />
            <div className="product-pill-row">
              <span className="product-pill category">{p.category}</span>
              {p.promoTag && (
                <span className="product-pill promo">{p.promoTag}</span>
              )}
            </div>
            <h3 className="product-title">{p.name}</h3>
            <p className="product-skin">{p.skin}</p>

            <div className="product-bottom-row">
              <div>
                <span className="product-price">{p.price}</span>
                {p.oldPrice && (
                  <span className="product-old-price">{p.oldPrice}</span>
                )}
              </div>

              <button
                className="btn-add-cart"
                onClick={(e) => handleAddToCart(p, e)}
              >
                Adicionar
              </button>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
