import React from "react";
import styles from "./Faq.module.css";

const source = [
    {
        summary: "Como funciona a ONG?",
        detail: "A ONG funciona da seguinte maneira: ela realiza o resgate de animais exóticos em situação de risco e trabalha com a reabilitação e reintegração deles ao habitat natural, quando possível."
    },
    {
        summary: "A ONG resgata os animais que são tratados?",
        detail: "Não, a ONG não resgata animais que já estão sendo tratados. Ela intervém apenas em casos de necessidade, como abandono ou maus tratos."
    },
    {
        summary: "Qual a área de atuação da ONG?",
        detail: "Atuamos em São Paulo e região, oferecendo suporte tanto para resgates quanto para conscientização sobre a preservação da fauna exótica."
    }
];

function Faq() {
    return (
        <div className={styles.faqContainer}>
            <h2 className={styles.title}>Perguntas Frequentes</h2>
            <div className={styles.faq}>
                {source.map((item, index) => (
                    <details key={index} className={styles.details}>
                        <summary className={styles.summary}>{item.summary}</summary>
                        <p className={styles.detail}>{item.detail}</p>
                    </details>
                ))}
            </div>
            <div className={styles.centerButton}>
                <button className={styles.faqButton}>Central de FAQ</button>
            </div>
        </div>
    );
}

export default Faq;
