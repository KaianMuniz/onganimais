import React, { useState, useEffect } from 'react';


function EmployeesGrid() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  
  const fetchEmployees = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/employees');  
      if (response.ok) {
        const data = await response.json();
        setEmployees(data);  
      } else {
        console.error('Erro ao buscar os funcionários:', response.statusText);
      }
    } catch (error) {
      console.error('Erro de rede:', error);
    } finally {
      setLoading(false);
    }
  };

  
  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <section>
      <h2>Funcionários</h2>
      {loading ? (
        <p>Carregando funcionários...</p>
      ) : (
        <div className="grid">
          {employees.map((employee) => (
            <div key={employee.id} className="employee-card">
              <h3>{employee.name}</h3>
              <p>{employee.position}</p>
              <p>{employee.experience_years} anos de experiência</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default EmployeesGrid;
