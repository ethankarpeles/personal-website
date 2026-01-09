import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@styles/global.css'
import "katex/dist/katex.min.css";
import WebsiteRoutes from "./WebsiteRoutes";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <WebsiteRoutes />
        </BrowserRouter>
    </StrictMode>,
)
