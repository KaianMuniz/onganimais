import React, { useState } from 'react';
import './App.css'; // Estilos globais do app
import AnimalsGrid from './components/AnimalsGrid/AnimalsGrid'; // Importando o componente AnimalsGrid
import AnimalHistoryGrid from './components/AnimalsGrid/AnimalHistoryGrid'; // Importando o componente AnimalHistoryGrid

function App() {
  const [selectedAnimalId, setSelectedAnimalId] = useState(null);  // Estado para armazenar o animal selecionado

  // Função para tratar a seleção de um animal
  const handleAnimalSelect = (id) => {
    setSelectedAnimalId(id);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sistema de Gestão de Animais Exóticos</h1>
      </header>
      <main>
        {/* Passando a função de seleção para o componente AnimalsGrid */}
        <AnimalsGrid onAnimalClick={handleAnimalSelect} />

        {/* Exibindo o histórico do animal selecionado, se houver */}
        {selectedAnimalId && <AnimalHistoryGrid animalId={selectedAnimalId} />}
      </main>
    </div>
  );
}

export default App;
