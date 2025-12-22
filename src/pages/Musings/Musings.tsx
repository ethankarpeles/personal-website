import { Outlet } from 'react-router-dom';
import Navbar from '@components/Navbar/Navbar.tsx';
import Footer from '@components/Footer/Footer.tsx';

export default function Library() {
    return (<>
        <Navbar />
        <Content />
        <Footer />
    </>);
}

function Content() {
    return <article>
        <Outlet />
    </article>;
}