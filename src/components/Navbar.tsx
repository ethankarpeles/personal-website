import '../styles/Navbar.module.css';
import { Link } from 'react-router-dom';

const logoLocation = './src/assets/logo.svg';

export default function Navbar() {
    return (
        <nav>
            <img src={logoLocation} />
            <div>
                <Link to="/">Home</Link>
            </div>
        </nav>
    );
}