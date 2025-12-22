import Navbar from "../components/Navbar.tsx";
import headshot from '../assets/professional-headshot.png'
import { AiFillFacebook, AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

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
                <div>
                    <p>Welcome! I am an incoming AI & Software Engineer I at {PMG} and a recent math graduate from the {UNT}. Currently, I am preparing for {PMG}'s Graduate Leadership Program.</p>
                    <Socials />
                </div>
                <img src={headshot} className='headshot' />
            </section>
        </article>
    );
}

function Socials() {
    return <>
        <a href='https://www.linkedin.com/in/ethankarpeles/'>
            <AiFillLinkedin className='social' />
        </a>
        <a href='https://github.com/ethankarpeles'>
            <AiFillGithub className='social' />
        </a>
        <a href='https://www.facebook.com/ethan.karpeles'>
            <AiFillFacebook className='social' />
        </a>
        <a href='https://www.instagram.com/ethan.karpeles/'>
            <AiFillInstagram className='social' />
        </a>
    </>;
}