import React, { useState } from "react";
import type { Product } from "../../types/Product";
import styles from "./ProductModal.module.scss";
import { formatPrice } from "../../helpers/FormatPrice";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
}) => {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const handleDecrease = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 1;
    setQuantity(Math.max(1, value));
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>

        <div className={styles.modalLayout}>
          <div className={styles.modalImage}>
            <img src={product.photo} alt={product.productName} />
          </div>

          <div className={styles.modalInfo}>
            <h2 className={styles.productName}>{product.productName}</h2>

            <div className={styles.priceSection}>
              <span className={styles.price}>{formatPrice(product.price)}</span>
            </div>

            <p className={styles.productDescription}>
              {product.descriptionShort}
            </p>
            <a href="#" className={styles.moreDetailsLink}>
              Veja mais detalhes do produto
            </a>

            <div className={styles.modalActions}>
              <div className={styles.quantitySection}>
                <div className={styles.quantityControl}>
                  <button
                    type="button"
                    className={styles.quantityButton}
                    onClick={handleDecrease}
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className={styles.quantityInput}
                  />
                  <button
                    type="button"
                    className={styles.quantityButton}
                    onClick={handleIncrease}
                  >
                    +
                  </button>
                </div>
              </div>
              <button className={styles.buyButton}>Comprar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
