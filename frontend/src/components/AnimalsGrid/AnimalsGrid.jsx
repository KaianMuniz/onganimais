import React, { useState, useEffect } from 'react';

// Componente AnimalsGrid para exibir os animais
function AnimalsGrid() {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);

  // Função para buscar os animais da API
  const fetchAnimals = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/animals', {
        credentials: 'same-origin', // Isso vai garantir que os cookies não sejam enviados, se não necessários
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        setAnimals(data);
      } else {
        console.error('Erro ao buscar os animais:', response.statusText);
      }
    } catch (error) {
      console.error('Erro de rede:', error);
    } finally {
      setLoading(false);
    }
  };
  

  // Chama a função de buscar os animais ao montar o componente
  useEffect(() => {
    fetchAnimals();
  }, []);

  return (
    <section>
      <h2>Animais</h2>
      {loading ? (
        <p>Carregando animais...</p>
      ) : (
        <div className="grid">
          {animals.map((animal) => (
            <div key={animal.id} className="animal-card">
              <h3>{animal.name}</h3>
              <p>{animal.species}, {animal.age} anos</p>
              <p>Tempo de matrícula: {animal.enrollment_duration} meses</p>
              <img src={animal.image_url} alt={animal.name} width="100" />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default AnimalsGrid;
