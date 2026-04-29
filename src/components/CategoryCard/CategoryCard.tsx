import styles from "./CategoryCard.module.scss";

interface CategoryCardProps {
  title: string;
  image: string;
}

export function CategoryCard({ title, image }: CategoryCardProps) {
  return (
    <div className={styles.categoryCard}>
      <div className={styles.categoryCardImage}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.categoryCardTitle}>
        <h3>{title}</h3>
      </div>
    </div>
  );
}
