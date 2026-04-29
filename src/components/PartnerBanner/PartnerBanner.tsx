import styles from "./PartnerBanner.module.scss";

interface PartnerBannerProps {
  image: string;
  alt: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
}

export const PartnerBanner = ({
  image,
  alt,
  title,
  description,
  link,
  linkText,
}: PartnerBannerProps) => {
  return (
    <div
      className={styles.partnerBanner}
      style={{ backgroundImage: `url(${image})` }}
    >
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link}>{linkText}</a>
    </div>
  );
};
