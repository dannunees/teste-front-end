import styles from "./Banner.module.scss";

export const Banner = () => {
  return (
    <>
      <div className={styles.banner}>
        <div className="container">
          <h1 className={styles.bannerTitle}>
            Venha conhecer nossas promoções
          </h1>
          <p className={styles.bannerSubtitle}>
            <strong>50% Off</strong> nos produtos
          </p>

          <button className={styles.bannerButton}>Ver produto</button>
        </div>
      </div>
    </>
  );
};
