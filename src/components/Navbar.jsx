import { useState,useEffect } from "react";
import COLORS from "../constants/colors";
function Navbar({ page, setPage, menuOpen, setMenuOpen }) {
  const pages = ["Home", "About", "Programs", "Team", "Gallery", "Donate"];


  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.92)", backdropFilter: "blur(10px)", borderBottom: scrolled ? `1px solid ${COLORS.border}` : "1px solid transparent", boxShadow: scrolled ? "0 2px 20px rgba(26,107,74,0.08)" : "none", transition: "all 0.3s ease", padding: "0 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <button onClick={() => { setPage("Home"); setMenuOpen(false); }} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 38, height: 38, borderRadius: "50%", background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryLight})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🕊️</div>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontWeight: 700, fontSize: 15, color: COLORS.primary, lineHeight: 1.1 }}>NayePankh</div>
            <div style={{ fontSize: 10, color: COLORS.textMuted, letterSpacing: 0.5 }}>FOUNDATION</div>
          </div>
        </button>
        <div style={{ display: "flex", gap: 4, alignItems: "center" }} className="desktop-nav">
          {pages.map(p => (
            <button key={p} onClick={() => { setPage(p); setMenuOpen(false); }} style={{ padding: "7px 14px", borderRadius: 8, border: "none", background: page === p ? COLORS.primary : "transparent", color: page === p ? "#fff" : COLORS.textMuted, fontWeight: page === p ? 600 : 500, fontSize: 14, cursor: "pointer", transition: "all 0.2s" }}>
              {p}
            </button>
          ))}
        </div>
        <button onClick={() => setMenuOpen(o => !o)} style={{ display: "none", background: "none", border: "none", cursor: "pointer", fontSize: 24, color: COLORS.primary }} className="hamburger">☰</button>
      </div>
      {menuOpen && (
        <div style={{ background: "#fff", borderTop: `1px solid ${COLORS.border}`, padding: "12px 24px 16px" }}>
          {pages.map(p => (
            <button key={p} onClick={() => { setPage(p); setMenuOpen(false); }} style={{ display: "block", width: "100%", textAlign: "left", padding: "10px 0", border: "none", background: "none", color: page === p ? COLORS.primary : COLORS.text, fontWeight: page === p ? 700 : 500, fontSize: 16, cursor: "pointer", borderBottom: `1px solid ${COLORS.border}` }}>
              {p}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
export default Navbar