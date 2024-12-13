import { Link } from 'react-router-dom';
import styles from "./Header.module.css"

function Header() {
    return (
        <header className={styles.header}>
            <span>INOVALAB</span>
            <nav>
                {/* Normalmente não se utiliza o a no react, utiiza o LINK (NÃO SEI AINDA COMO USA) */}
                <Link to="/">Home</Link>
                <Link to="/list">Lista</Link>
                <Link to="/silvestre">Sobre</Link>
                <Link to="/donate">Doações</Link>
            </nav>
        </header>
    );
}

export default Header;