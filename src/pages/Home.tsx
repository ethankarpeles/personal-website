import Navbar from "../components/Navbar.tsx";
import headshot from '../assets/professional-headshot.png'

export default function Home() {
    return (<>
        <Navbar />
        <About />
    </>);
}

function About() {
    return (
        <article>
            <header>
                <h1>Hi, I'm Ethan Karpeles</h1>
                <h2><i>Incoming AI & Software Engineer, <a href='https://www.pmg.com/' target="_blank">PMG</a></i></h2>
            </header>
            <section>
                <img src={headshot} className='headshot' />
                <p>Welcome! I am an incoming AI & Software Engineer I at <a href='https://www.pmg.com/' target="_blank">PMG</a> and a recent mathematics graduate from the <a href='https://www.unt.edu/' target="_blank">University of North Texas</a>.</p>
            </section>
        </article>
    );
}