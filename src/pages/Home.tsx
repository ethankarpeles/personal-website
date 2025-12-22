import Navbar from "../components/Navbar.tsx";
import headshot from '../assets/professional-headshot.png'

export default function Home() {
    return (<>
        <Navbar />
        <About />
    </>);
}

function About() {
    const PMG = <a href='https://www.pmg.com/' target="_blank">PMG</a>;
    const UNT = <a href='https://www.unt.edu/' target="_blank">University of North Texas</a>;
    return (
        <article>
            <header>
                <h1>Hi, I'm Ethan Karpeles</h1>
                <h2><i>Incoming AI & Software Engineer, {PMG}</i></h2>
            </header>
            <section>
                <img src={headshot} className='headshot' />
                <p>Welcome! I am an incoming AI & Software Engineer I at {PMG} and a recent math graduate from the {UNT}. Currently, I am preparing for {PMG}'s Graduate Leadership Program.</p>
            </section>
        </article>
    );
}