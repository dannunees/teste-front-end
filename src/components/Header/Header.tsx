import styles from "./Header.module.scss";
import {
  ShieldIcon,
  BagIcon,
  HeartIcon,
  UserIcon,
  CartIcon,
  CardIcon,
  FreteIcon,
  LogoIcon,
} from "../Icons";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerTop}>
          <div className={styles.topItem}>
            <ShieldIcon />
            <p>
              Compra <strong>100% segura</strong>
            </p>
          </div>
          <div className={styles.topItem}>
            <FreteIcon />
            <p>
              <strong>Frete grátis</strong> acima de R$ 200
            </p>
          </div>
          <div className={styles.topItem}>
            <CardIcon />
            <p>
              <strong>Parcele</strong> suas compras
            </p>
          </div>
        </div>

        <div className={styles.headerMiddle}>
          <LogoIcon />

          <div className={styles.searchBox}>
            <input
              type="text"
              placeholder="O que você está procurando?"
              className={styles.searchInput}
            />
          </div>

          <div className={styles.headerIcons}>
            <BagIcon />
            <HeartIcon />
            <UserIcon />
            <CartIcon />
          </div>
        </div>

        <div className={styles.headerBottom}>
          <nav>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <a href="#">TODAS CATEGORIAS</a>
              </li>
              <li className={styles.navItem}>
                <a href="#">SUPERMERCADO</a>
              </li>
              <li className={styles.navItem}>
                <a href="#">LIVROS</a>
              </li>
              <li className={styles.navItem}>
                <a href="#">MODA</a>
              </li>
              <li className={styles.navItem}>
                <a href="#">LANÇAMENTOS</a>
              </li>
              <li className={styles.navItem}>
                <a href="#">OFERTAS DO DIA</a>
              </li>
              <li className={styles.navItem}>
                <a href="#">ASSINATURA</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
