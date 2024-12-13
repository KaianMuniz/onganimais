import React from "react";
import styles from "./Help.module.css";

function Help() {
  return (
    <section className={styles.helpSection}>
      <div className={styles.card}>
        <div className={styles.overlay}>
          <h2 className={styles.title}>Faça uma doação</h2>
          <p className={styles.description}>Ajude a manter nosso trabalho</p>
          <button className={styles.button}>Saiba mais</button>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.overlay}>
          <h2 className={styles.title}>Seja uma madrinha ou padrinho</h2>
          <p className={styles.description}>Custee os cuidados de um animal</p>
          <button className={styles.button}>Saiba mais</button>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.overlay}>
          <h2 className={styles.title}>Quero adotar!</h2>
          <p className={styles.description}>Candidate-se para a adoção responsável</p>
          <button className={styles.button}>Saiba mais</button>
        </div>
      </div>
    </section>
  );
}

export default Help;
