import { useEffect, useState } from "react";
import COLORS from "./constants/colors";
import FadeIn from "./components/FadeIn";
import AnimatedCounter from "./components/AnimatedCounter"; 
function HomePage({ setPage }) {
   const programs = [
  { title: "Food Drive", desc: "Distributing free meals to underprivileged families and individuals across Kanpur & Ghaziabad every week.", icon: "🍱", color: "#e8f5e9" },
  { title: "Education Support", desc: "Providing free stationery, books, and educational resources to underprivileged children so no child is left behind.", icon: "📚", color: "#e3f2fd" },
  { title: "Hygiene & Health", desc: "Distributing free sanitary pads, soaps, and health kits to women and girls in underserved communities.", icon: "🧼", color: "#fce4ec" },
  { title: "Clothing Drive", desc: "Collecting and distributing clean clothes, blankets and essentials—especially during winters when need is highest.", icon: "👕", color: "#fff3e0" },
  { title: "Women Empowerment", desc: "Skill workshops, awareness drives, and mentorship programs focused on uplifting women in society.", icon: "💪", color: "#f3e5f5" },
  { title: "Student Internships", desc: "One of India's biggest student-led NGO offering internships to build empathy and leadership in young people.", icon: "🎓", color: "#e0f7fa" },
];
  const stats = [
  { value: "2,00,000+", label: "Lives Impacted", icon: "❤️" },
  { value: "500+", label: "Volunteers", icon: "🤝" },
  { value: "5+", label: "Cities Covered", icon: "🏙️" },
  { value: "3+", label: "Years of Service", icon: "📅" },
];

  const [heroVisible, setHeroVisible] = useState(false);
  useEffect(() => { setTimeout(() => setHeroVisible(true), 80); }, []);
  return (
    <div>
      {/* Hero */}
      <section style={{ minHeight: "100vh", background: `linear-gradient(160deg, #e8f5e9 0%, #f0fdf4 40%, #e3f9ee 100%)`, display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "100px 24px 60px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none", overflow: "hidden" }}>
          {[...Array(6)].map((_, i) => (
            <div key={i} style={{ position: "absolute", borderRadius: "50%", background: `rgba(26,107,74,0.04)`, width: 200 + i * 100, height: 200 + i * 100, top: `${10 + i * 12}%`, left: `${-5 + i * 18}%`, animation: `float${i % 2 === 0 ? "A" : "B"} ${6 + i}s ease-in-out infinite` }} />
          ))}
        </div>
        <div style={{ maxWidth: 760, position: "relative", opacity: heroVisible ? 1 : 0, transform: heroVisible ? "translateY(0)" : "translateY(40px)", transition: "all 0.9s cubic-bezier(0.23,1,0.32,1)" }}>
          <div style={{ display: "inline-block", background: COLORS.primary, color: "#fff", fontSize: 12, fontWeight: 600, letterSpacing: 1.5, padding: "6px 18px", borderRadius: 20, marginBottom: 24, textTransform: "uppercase" }}>
            UP Govt. | 80G &amp; 12A Registered NGO
          </div>
          <h1 style={{ fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 800, color: COLORS.text, lineHeight: 1.15, marginBottom: 20 }}>
            It's that easy to bring a<br />
            <span style={{ color: COLORS.primary, position: "relative" }}>
              Smile on Their Faces
              <svg style={{ position: "absolute", bottom: -6, left: 0, right: 0, width: "100%", height: 8 }} viewBox="0 0 300 8" preserveAspectRatio="none">
                <path d="M0 6 Q75 1 150 5 Q225 9 300 4" stroke={COLORS.accent} strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p style={{ fontSize: 20, color: COLORS.textMuted, marginBottom: 36, lineHeight: 1.7, maxWidth: 560, margin: "0 auto 36px" }}>
            We don't ask for much — just help us with what you can. Be it Money, Skill or Your Time.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={() => setPage("Donate")} style={{ padding: "14px 36px", background: COLORS.primary, color: "#fff", border: "none", borderRadius: 12, fontWeight: 700, fontSize: 16, cursor: "pointer", boxShadow: "0 8px 24px rgba(26,107,74,0.28)", transition: "transform 0.2s, box-shadow 0.2s" }}
              onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 12px 30px rgba(26,107,74,0.36)"; }}
              onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 8px 24px rgba(26,107,74,0.28)"; }}>
              ❤️ Donate Now
            </button>
            <button onClick={() => setPage("About")} style={{ padding: "14px 36px", background: "transparent", color: COLORS.primary, border: `2px solid ${COLORS.primary}`, borderRadius: 12, fontWeight: 700, fontSize: 16, cursor: "pointer", transition: "all 0.2s" }}
              onMouseEnter={e => { e.target.style.background = COLORS.primary; e.target.style.color = "#fff"; }}
              onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = COLORS.primary; }}>
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: COLORS.primary, padding: "52px 24px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px,1fr))", gap: 32 }}>
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 100} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 36, marginBottom: 8 }}>{s.icon}</div>
              <div style={{ fontSize: "clamp(26px,4vw,38px)", fontWeight: 800, color: "#fff", lineHeight: 1 }}>
                <AnimatedCounter target={s.value} />
              </div>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", marginTop: 6, fontWeight: 500 }}>{s.label}</div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* About snippet */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <FadeIn>
            <div style={{ fontSize: 12, color: COLORS.primary, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>About Us</div>
            <h2 style={{ fontSize: "clamp(26px,4vw,38px)", fontWeight: 800, color: COLORS.text, marginBottom: 20, lineHeight: 1.25 }}>Think global,<br />Act local.</h2>
            <p style={{ color: COLORS.textMuted, fontSize: 17, lineHeight: 1.8, marginBottom: 24 }}>
              NayePankh Foundation is a non-governmental organisation with a strong desire to help the society and make it a better place for all. We are one of the biggest student-led NGOs in India with operations in Kanpur, Ghaziabad, and beyond.
            </p>
            <p style={{ color: COLORS.textMuted, fontSize: 17, lineHeight: 1.8, marginBottom: 28 }}>
              Service to mankind is the service to god. Let's revolutionise the society together!
            </p>
            <button onClick={() => setPage("About")} style={{ padding: "12px 28px", background: COLORS.primary, color: "#fff", border: "none", borderRadius: 10, fontWeight: 600, fontSize: 15, cursor: "pointer" }}>
              Our Story →
            </button>
          </FadeIn>
          <FadeIn delay={150}>
            <div style={{ background: "linear-gradient(135deg, #e8f5e9, #c8e6d6)", borderRadius: 20, padding: 40, textAlign: "center" }}>
              <div style={{ fontSize: 80, marginBottom: 16 }}>🕊️</div>
              <blockquote style={{ fontSize: 20, fontWeight: 700, color: COLORS.primary, lineHeight: 1.5, margin: "0 0 16px", fontStyle: "italic" }}>
                "If we all do something, then together there is no problem that we cannot solve!"
              </blockquote>
              <div style={{ fontWeight: 600, color: COLORS.text, fontSize: 14 }}>— Prashant Shukla</div>
              <div style={{ color: COLORS.textMuted, fontSize: 13 }}>Founder & President, NayePankh Foundation</div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Programs preview */}
      <section style={{ padding: "80px 24px", background: COLORS.bg }}>
        <FadeIn style={{ textAlign: "center", marginBottom: 52 }}>
          <div style={{ fontSize: 12, color: COLORS.primary, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>What We Do</div>
          <h2 style={{ fontSize: "clamp(26px,4vw,38px)", fontWeight: 800, color: COLORS.text }}>Our Programs</h2>
        </FadeIn>
        <div style={{ maxWidth: 1060, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))", gap: 24 }}>
          {programs.slice(0, 3).map((p, i) => (
            <FadeIn key={p.title} delay={i * 80}>
              <div style={{ background: "#fff", borderRadius: 16, padding: 28, border: `1px solid ${COLORS.border}`, height: "100%", transition: "transform 0.2s, box-shadow 0.2s", cursor: "default" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 36px rgba(26,107,74,0.12)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: p.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, marginBottom: 18 }}>{p.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 18, color: COLORS.text, marginBottom: 10 }}>{p.title}</h3>
                <p style={{ color: COLORS.textMuted, fontSize: 15, lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <button onClick={() => setPage("Programs")} style={{ padding: "12px 32px", background: "transparent", color: COLORS.primary, border: `2px solid ${COLORS.primary}`, borderRadius: 10, fontWeight: 600, fontSize: 15, cursor: "pointer" }}>
            View All Programs →
          </button>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 24px", background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryLight})`, textAlign: "center" }}>
        <FadeIn>
          <h2 style={{ fontSize: "clamp(26px,4vw,42px)", fontWeight: 800, color: "#fff", marginBottom: 16 }}>Join the Movement</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 18, marginBottom: 36, maxWidth: 480, margin: "0 auto 36px" }}>
            Join our team and make a difference in the lives of those in need.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={() => setPage("Donate")} style={{ padding: "14px 36px", background: COLORS.accent, color: "#fff", border: "none", borderRadius: 12, fontWeight: 700, fontSize: 16, cursor: "pointer", boxShadow: "0 6px 20px rgba(0,0,0,0.2)" }}>
              Donate Now
            </button>
            <button onClick={() => setPage("About")} style={{ padding: "14px 36px", background: "rgba(255,255,255,0.15)", color: "#fff", border: "2px solid rgba(255,255,255,0.5)", borderRadius: 12, fontWeight: 700, fontSize: 16, cursor: "pointer" }}>
              Volunteer With Us
            </button>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
export default HomePage;