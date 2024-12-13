import React, { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimalsGrid from "../components/AnimalsGrid/AnimalsGrid";
import EmployeesGrid from "../components/AnimalsGrid/EmployeesGrid";
import AnimalHistoryGrid from "../components/AnimalsGrid/AnimalHistoryGrid";

function List() {
    const [selectedAnimalId, setSelectedAnimalId] = useState(null);

   
    const handleAnimalClick = (id) => {
        setSelectedAnimalId(id);
    };

    return (
        <>
            <Header />
            <br /><br /><br /><br />
            <AnimalsGrid onAnimalClick={handleAnimalClick} />
            {selectedAnimalId && <AnimalHistoryGrid animalId={selectedAnimalId} />}
            <EmployeesGrid />
            <Footer />
        </>
    );
}

export default List;
