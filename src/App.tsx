import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "@pages/About/About.tsx";
import Resume from "@pages/Resume/Resume.tsx";
import Library from "@pages/Musings/Library.tsx";
import Musings from "@pages/Musings/Musings.tsx";
import { articles } from "@routes/articles";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/musings" element={<Musings />} >
                    <Route index element={<Library />} />
                    {articles.map((a) => (
                        <Route key={a.path} path={a.path} element={<a.component />} />
                    ))}
                </Route>
                <Route path="/resume" element={<Resume />} />
            </Routes>
        </BrowserRouter>
    );
}