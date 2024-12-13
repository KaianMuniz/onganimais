import React from 'react';
import './CardAnimals.module.css';

function CardAnimals({ name, species, age, careDuration, image }) {
  return (
    <div className="card">
      <img src={image} alt={`${name} - ${species}`} />
      <div className="card-info">
        <h3>{name.toUpperCase()}</h3>
        <p>Espécie: {species.toUpperCase()}</p>
        <p>Idade: {age} ANOS</p>
        <p>Período em cuidados: {careDuration} MESES</p>
      </div>
    </div>
  );
}

export default CardAnimals;
