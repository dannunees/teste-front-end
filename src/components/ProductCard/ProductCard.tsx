import styles from "./ProductCard.module.scss";
import type { Product } from "../../types/Product";
import { formatPrice } from "../../helpers/FormatPrice";

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <div
      className={styles.productCard}
      onClick={() => onClick(product)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick(product);
        }
      }}
    >
      <img src={product.photo} alt={product.productName} />
      <h3>{product.productName}</h3>
      <p className={styles.oldPrice}>{formatPrice(30.9)}</p>
      <p className={styles.price}>{formatPrice(product.price)}</p>
      <p className={styles.descriptionApi}>{product.descriptionShort}</p>
      <p className={styles.description}>ou 2x de R$ 49,95 sem juros</p>
      <p className={styles.frete}>Frete grátis</p>
      <button>Comprar</button>
    </div>
  );
}
