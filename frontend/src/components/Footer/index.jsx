import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerText}>
          <p>
          A ONG Exóticos em Ação é dedicada ao resgate, reabilitação e proteção de animais exóticos que se encontram em situações de risco. Nossa missão é proporcionar um refúgio seguro para esses animais, vítimas de tráfico, maus-tratos ou abandono, oferecendo cuidados especializados, alimentação adequada e acompanhamento veterinário.
          </p>
        </div>

        <div className={styles.footerLinks}>
          <div>
            <h4>INOVALAB</h4>
            <ul>
              <li><a href="#">Início</a></li>
              <li><a href="#">Exóticos</a></li>
              <li><a href="#">Silvestre</a></li>
              <li><a href="#">Relatórios</a></li>
            </ul>
          </div>

          <div>
            <h4>Links úteis</h4>
            <ul>
              <li><a href="#">Perguntas Frequentes (FAQ)</a></li>
              <li><a href="#">Sobre nós</a></li>
              <li><a href="#">PLACEHOLDA</a></li>
            </ul>
          </div>

          <div>
            <h4>Como ajudar</h4>
            <ul>
              <li><a href="#">Doação</a></li>
              <li><a href="#">Apadrinhamento</a></li>
              <li><a href="#">Ser voluntário</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© 2024 | INOVALAB.TECNOLOGIA Todos os direitos reservados.</p>
        <a href="#">Política de privacidade</a>
      </div>
    </footer>
  );
}

export default Footer;
