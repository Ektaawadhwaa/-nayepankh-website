import COLORS from "./constants/colors";
import FadeIn from "./components/FadeIn";
import AnimatedCounter from "./components/AnimatedCounter";
import { useState } from "react";
function GalleryPage() {
  const galleryItems = [
    { emoji: "🍱", label: "Food Drive – Kanpur", bg: "#e8f5e9" },
    { emoji: "📚", label: "Book Distribution", bg: "#e3f2fd" },
    { emoji: "🧼", label: "Hygiene Kits", bg: "#fce4ec" },
    { emoji: "👕", label: "Clothing Drive", bg: "#fff3e0" },
    { emoji: "🎓", label: "Student Volunteers", bg: "#f3e5f5" },
    { emoji: "❤️", label: "Community Event", bg: "#e0f7fa" },
    { emoji: "💪", label: "Women's Workshop", bg: "#fce4ec" },
    { emoji: "🌟", label: "Annual Meet 2023", bg: "#fff9c4" },
    { emoji: "🤝", label: "Partner Collaboration", bg: "#e8f5e9" },
  ];
  const [active, setActive] = useState(null);
  return (
    <div style={{ paddingTop: 80 }}>
      <section style={{ padding: "80px 24px 60px", background: "linear-gradient(160deg, #e8f5e9, #fff)", textAlign: "center" }}>
        <FadeIn>
          <div style={{ fontSize: 12, color: COLORS.primary, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Our Work in Action</div>
          <h1 style={{ fontSize: "clamp(32px,5vw,54px)", fontWeight: 800, color: COLORS.text, marginBottom: 20 }}>Gallery</h1>
          <p style={{ fontSize: 18, color: COLORS.textMuted, maxWidth: 480, margin: "0 auto" }}>
            Snapshots of impact — real moments from our drives and events across India.
          </p>
        </FadeIn>
      </section>
      <section style={{ padding: "40px 24px 80px", background: "#fff" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px,1fr))", gap: 20 }}>
          {galleryItems.map((item, i) => (
            <FadeIn key={item.label} delay={i * 60}>
              <div onClick={() => setActive(active === i ? null : i)} style={{ borderRadius: 16, overflow: "hidden", cursor: "pointer", border: `2px solid ${active === i ? COLORS.primary : COLORS.border}`, transition: "all 0.25s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.03)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(26,107,74,0.14)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ background: item.bg, height: 180, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 64 }}>
                  {item.emoji}
                </div>
                <div style={{ padding: "14px 18px", background: "#fff" }}>
                  <div style={{ fontWeight: 600, fontSize: 15, color: COLORS.text }}>{item.label}</div>
                  {active === i && <div style={{ fontSize: 13, color: COLORS.primary, marginTop: 4 }}>NayePankh Foundation</div>}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
export default GalleryPage