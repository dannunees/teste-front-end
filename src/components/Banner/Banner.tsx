import styles from "./Banner.module.scss";

interface BannerProps {
  title: string;
  subtitle: React.ReactNode;
  buttonLabel: string;
  image: string;
}

export const Banner = ({
  title,
  subtitle,
  buttonLabel,
  image,
}: BannerProps) => {
  return (
    <>
      <div
        className={styles.banner}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="container">
          <h1 className={styles.bannerTitle}>{title}</h1>
          <p className={styles.bannerSubtitle}>{subtitle}</p>

          <button className={styles.bannerButton}>{buttonLabel}</button>
        </div>
      </div>
    </>
  );
};
