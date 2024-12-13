import React, { useState } from 'react';
import './App.css'; 
import AnimalsGrid from './components/AnimalsGrid/AnimalsGrid'; 
import AnimalHistoryGrid from './components/AnimalsGrid/AnimalHistoryGrid'; 

function App() {
  const [selectedAnimalId, setSelectedAnimalId] = useState(null);  

  
  const handleAnimalSelect = (id) => {
    setSelectedAnimalId(id);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sistema de Gestão de Animais Exóticos</h1>
      </header>
      <main>
        {}
        <AnimalsGrid onAnimalClick={handleAnimalSelect} />

        {}
        {selectedAnimalId && <AnimalHistoryGrid animalId={selectedAnimalId} />}
      </main>
    </div>
  );
}

export default App;
