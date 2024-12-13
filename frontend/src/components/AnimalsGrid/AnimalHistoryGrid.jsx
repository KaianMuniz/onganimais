import React, { useState, useEffect } from 'react';


function AnimalHistoryGrid({ animalId }) {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  
  const fetchAnimalHistory = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/animal_history/${animalId}`);  
      if (response.ok) {
        const data = await response.json();
        setHistory(data);  
      } else {
        console.error('Erro ao buscar o histórico do animal:', response.statusText);
      }
    } catch (error) {
      console.error('Erro de rede:', error);
    } finally {
      setLoading(false);
    }
  };

  
  useEffect(() => {
    fetchAnimalHistory();
  }, [animalId]);

  return (
    <section>
      <h2>Histórico do Animal</h2>
      {loading ? (
        <p>Carregando histórico...</p>
      ) : (
        <div className="grid">
          {history.length > 0 ? (
            history.map((record, index) => (
              <div key={index} className="history-card">
                <p><strong>Evento:</strong> {record.event}</p>
                <p><strong>Descrição:</strong> {record.description}</p>
                <p><strong>Data:</strong> {new Date(record.date).toLocaleDateString()}</p>
              </div>
            ))
          ) : (
            <p>Este animal não possui histórico registrado.</p>
          )}
        </div>
      )}
    </section>
  );
}

export default AnimalHistoryGrid;
