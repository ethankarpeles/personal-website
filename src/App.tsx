import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Resume from "./pages/Resume.tsx";

export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
        </HashRouter>
    );
}