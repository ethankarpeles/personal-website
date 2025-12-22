import styles from '../styles/Navbar.module.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link to="/" className={styles.navlogolink}>
                <img src={logo} className={styles.navlogo} />
            </Link>
            <div className={styles.navlinks}>
                <Link to="/" className={styles.navlink}>Home</Link>
                <Link to="/resume" className={styles.navlink}>Resume</Link>
            </div>
        </nav>
    );
}