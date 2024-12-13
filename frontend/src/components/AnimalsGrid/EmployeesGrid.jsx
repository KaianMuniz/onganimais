import React, { useState, useEffect } from 'react';

// Componente EmployeesGrid para exibir os funcionários
function EmployeesGrid() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  // Função para buscar os funcionários da API
  const fetchEmployees = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/employees');  // URL para obter os funcionários
      if (response.ok) {
        const data = await response.json();
        setEmployees(data);  // Atualiza o estado com os funcionários recebidos
      } else {
        console.error('Erro ao buscar os funcionários:', response.statusText);
      }
    } catch (error) {
      console.error('Erro de rede:', error);
    } finally {
      setLoading(false);
    }
  };

  // Chama a função de buscar os funcionários ao montar o componente
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
