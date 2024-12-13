import React, { useState } from "react";
import styles from "./About.module.css";
import jaguar from "../../assets/jaguar.png";

function About() {
    const [expanded, setExpanded] = useState(false);

    const toggleText = () => {
        setExpanded(!expanded);
    };

    return (
        <div className={styles.section}>
            <div className={styles.content}>
                <h1 className={styles.title}>Conheça a ONG de animais exóticos, ONGÓTICOS!!</h1>
                <p className={styles.paragraph}>
                A ONGÓTICOS é uma organização dedicada ao resgate e à reabilitação de animais exóticos em situação de vulnerabilidade. Com foco na preservação da biodiversidade, promovemos a conscientização e a educação ambiental, buscando um futuro mais sustentável para todas as espécies.
                </p>
                {expanded && (
                    <>
                        <p className={styles.paragraph}>
                        Em 2023, a ONGÓTICOS lançou o projeto "Vozes da Floresta", que visa a recuperação de habitats naturais e a reintegração de espécies exóticas em seu ambiente de origem. Além disso, promovemos campanhas de adoção responsável e ações de sensibilização, alcançando mais de 5.000 pessoas em nossa comunidade.
                        </p>
                        <p className={styles.paragraph}>
                        Lutar pela defesa dos direitos animais por meio de ações ativas e preventivas, que valorizem práticas sustentáveis e potencializem forças para uma transformação integrada.
                        </p>
                    </>
                )}
                <button onClick={toggleText} className={styles.link}>
                    {expanded ? "Ler menos" : "Ler mais"}
                </button>
            </div>
            <div className={styles.media}>
                <img
                    src={jaguar}
                    alt="Imagem do Jaguar"
                    className={styles.image}
                />
            </div>
        </div>
    );
}

export default About;