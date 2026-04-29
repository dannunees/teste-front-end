import styles from "./Newsletter.module.scss";

export const Newsletter = () => {
  return (
    <div className={styles.newsLetter}>
      <div className={`container ${styles.newsLetterContainer}`}>
        <div className={styles.newsLetterContent}>
          <h2>Inscreva-se na nossa newsletter</h2>
          <p>
            Assine a nossa newsletter e receba as novidades e conteúdos
            exclusivos da Econverse.
          </p>
        </div>
        <div className={styles.newsLetterForm}>
          <form>
            <div className={styles.formRow}>
              <input
                type="text"
                placeholder="Digite seu nome"
                className={styles.inputName}
              />
              <input
                type="email"
                placeholder="Digite seu e-mail"
                className={styles.inputEmail}
              />
              <button type="submit" className={styles.btnSubscribe}>
                Inscrever
              </button>
            </div>
            <div className={styles.checkboxContainer}>
              <input
                type="checkbox"
                id="terms"
                className={styles.checkboxTerms}
              />
              <label htmlFor="terms">Aceito os termos e condições</label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
