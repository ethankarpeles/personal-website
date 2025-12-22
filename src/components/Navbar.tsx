import styles from '../styles/Navbar.module.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <img src={logo} className={styles.navlogo} />
            <div className={styles.navlinks}>
                <Link to="/" className={styles.navlink}>Home</Link>
            </div>
        </nav>
    );
}