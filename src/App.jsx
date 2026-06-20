import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HomePage from './Home'
import DonatePage from './Donate'
import GalleryPage from './Gallery'
import TeamPage from './Team'
import ProgramsPage from './Programs'
import Footer from './components/Footer'
import AboutPage from './About'


   const pageMap = { Home: HomePage, About: AboutPage, Programs: ProgramsPage, Team: TeamPage, Gallery: GalleryPage, Donate: DonatePage };
export default function App() {
  const [page, setPage] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [page]);

   const PageComponent = pageMap[page];

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", background: "#fff", minHeight: "100vh" }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        h1,h2,h3,h4 { margin: 0; }
        p { margin: 0; }
        @keyframes floatA { 0%,100%{transform:translateY(0) scale(1)} 50%{transform:translateY(-20px) scale(1.02)} }
        @keyframes floatB { 0%,100%{transform:translateY(0) scale(1)} 50%{transform:translateY(18px) scale(0.98)} }
        @media(max-width:640px){
          .desktop-nav{display:none!important}
          .hamburger{display:block!important}
          section > div[style*="grid-template-columns: 1fr 1fr"]{grid-template-columns:1fr!important}
        }
        input:focus { border-color: #1a6b4a !important; box-shadow: 0 0 0 3px rgba(26,107,74,0.12); }
        ::-webkit-scrollbar{width:6px} ::-webkit-scrollbar-track{background:#f1f1f1} ::-webkit-scrollbar-thumb{background:#c8e6d6;border-radius:3px}
      `}</style>
      <Navbar page={page} setPage={setPage} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <PageComponent setPage={setPage} />
      </main>
      <Footer setPage={setPage} />
    </div>
  );
}
