import Navbar from "../components/Navbar.tsx";
import resume from "../assets/resume.pdf"

export default function Resume() {
    return (<>
        <Navbar />
        <FileView />
    </>);
}

function FileView() {
    return (
        <iframe src={resume}></iframe>
    );
}