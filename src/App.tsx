import { HashRouter, Routes, Route } from "react-router-dom";
import About from "@pages/About/About.tsx";
import Resume from "@pages/Resume/Resume.tsx";

export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
        </HashRouter>
    );
}