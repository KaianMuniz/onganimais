import React, { useState } from 'react';
import styles from './DoacaoSection.module.css';

function DoacaoSection() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [valor, setValor] = useState('');
  const [metodo, setMetodo] = useState('credito');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Obrigado pela sua doação de R$ ${valor}! Sua contribuição ajuda a proteger a natureza.`);
  };

  return (
    <section id="doacoes" className={styles.doacoesSection}>
      <div className={styles.container}>
        <h2>🌱 Ajude a Reintegrar a Vida Selvagem! 🌱</h2>
        <p>
          Contribua com sua doação para ajudar a ONGÓTICOS a fornecer o tratamento necessário para os animais e reinseri-los à natureza. 
          Cada doação é um passo a mais para um mundo mais sustentável!
        </p>

        <div className={styles.doacaoForm}>
          <h3>Faça sua Doação</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="nome" className={styles.label}>Nome Completo:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className={styles.input}
              required
            />

            <label htmlFor="email" className={styles.label}>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              required
            />

            <label htmlFor="valor" className={styles.label}>Valor da Doação (em R$):</label>
            <input
              type="number"
              id="valor"
              name="valor"
              min="10"
              step="5"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
              className={styles.input}
              required
            />

            <label htmlFor="metodo" className={styles.label}>Método de Pagamento:</label>
            <select
              id="metodo"
              name="metodo"
              value={metodo}
              onChange={(e) => setMetodo(e.target.value)}
              className={styles.select}
              required
            >
              <option value="credito">Cartão de Crédito</option>
              <option value="debito">Cartão de Débito</option>
              <option value="boleto">Boleto Bancário</option>
            </select>

            <button type="submit" className={styles.btnDoar}>Doar Agora</button>
          </form>
        </div>

        <div className={styles.informacoes}>
          <h3>Outras Formas de Ajudar</h3>
          <ul>
            <li>Doações em alimentos e medicamentos para os animais.</li>
            <li>Voluntariado em ações de acolhimento e reintegração dos animais.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default DoacaoSection;
