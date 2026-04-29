import { FacebookIcon, InstagramIcon, LinkedinIcon } from "../Icons";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={`${styles.footerTopContainer} container`}>
          <div className={styles.footerTopLeft}>
            <img src="/assets/logo-footer.png" alt="Logo Econverse" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className={styles.footerTopSocial}>
              <a href="#" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="#" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="#" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
            </div>
          </div>
          <hr />
          <div className={styles.footerTopRight}>
            <div className={styles.footerLinks}>
              <ul>
                <li>
                  <h3>Institucional</h3>
                </li>

                <li>
                  <a href="#">Sobre Nós</a>
                </li>

                <li>
                  <a href="#">Movimento</a>
                </li>

                <li>
                  <a href="#">Trabalhe conosco</a>
                </li>
              </ul>

              <ul>
                <li>
                  <h3>Ajuda</h3>
                </li>

                <li>
                  <a href="#">Suporte</a>
                </li>

                <li>
                  <a href="#">Fale Conosco</a>
                </li>

                <li>
                  <a href="#">Perguntas Frequentes</a>
                </li>
              </ul>

              <ul>
                <li>
                  <h3>Termos</h3>
                </li>

                <li>
                  <a href="#">Termos e Condições</a>
                </li>

                <li>
                  <a href="#">Política de Privacidade</a>
                </li>

                <li>
                  <a href="#">Troca e Devolução</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={`${styles.footerBottomContainer} container`}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </footer>
  );
};
