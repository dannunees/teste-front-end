import styles from "./BrandsCard.module.scss";

interface BrandsCardProps {
  image: string;
  alt: string;
}

export function BrandsCard({ image, alt }: BrandsCardProps) {
  return (
    <div className={styles.brandsCard}>
      <img src={image} alt={alt} />
    </div>
  );
}
