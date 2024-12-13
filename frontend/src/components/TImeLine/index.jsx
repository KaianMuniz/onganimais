import React, { useState } from "react";
import styles from "./TimeLine.module.css";

const timelineData = [
    {
        year: 2020,
        title: "Fundação da ONGÓTICOS",
        description:
            "Em 2020, a ONGÓTICOS foi fundada com o objetivo de resgatar e reabilitar animais exóticos em situação de vulnerabilidade.",
    },
    {
        year: 2021,
        title: "Campanha de Conscientização",
        description:
            "Lançamos nossa primeira campanha de conscientização sobre a preservação de espécies exóticas, alcançando mais de 2.000 pessoas.",
    },
    {
        year: 2022,
        title: "Parcerias com Escolas",
        description:
            "Estabelecemos parcerias com escolas locais para promover a educação ambiental e a proteção dos animais exóticos.",
    },
    {
        year: 2023,
        title: "Projeto 'Vozes da Floresta'",
        description:
            "Iniciamos o projeto 'Vozes da Floresta', visando a recuperação de habitats naturais e a reintegração de espécies exóticas em seu ambiente de origem.",
    },
];

function TimeLine() {
    return (
        <div className={styles.timeline}>
            <h1 className={styles.title}>Linha do Tempo da ONGÓTICOS</h1>
            {timelineData.map((event, index) => (
                <TimelineEvent key={index} event={event} />
            ))}
        </div>
    );
}

function TimelineEvent({ event }) {
    const [expanded, setExpanded] = useState(false);

    const toggleDescription = () => {
        setExpanded(!expanded);
    };

    return (
        <div className={styles.event}>
            <div className={styles.year} onClick={toggleDescription}>
                {event.year}
            </div>
            <div className={styles.details}>
                <h2 className={styles.eventTitle}>{event.title}</h2>
                {expanded && <p className={styles.description}>{event.description}</p>}
                <button onClick={toggleDescription} className={styles.link}>
                    {expanded ? "Ver menos" : "Ver mais"}
                </button>
            </div>
        </div>
    );
}

export default TimeLine;
