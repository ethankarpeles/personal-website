import { HashRouter, Routes, Route } from "react-router-dom";
import About from "@pages/About/About.tsx";
import Resume from "@pages/Resume/Resume.tsx";
import Library from "@pages/Musings/Library.tsx";
import Musings from "@pages/Musings/Musings.tsx";
import RationalPointsOnEllipticCurves from "@pages/Musings/RationalPointsOnEllipticCurves.tsx";

export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/musings" element={<Musings />} >
                    <Route index element={<Library />} />
                    <Route path="rational-points-on-elliptic-curves" element={<RationalPointsOnEllipticCurves />} />
                </Route>
                <Route path="/resume" element={<Resume />} />
            </Routes>
        </HashRouter>
    );
}