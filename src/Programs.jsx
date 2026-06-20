import COLORS from "./constants/colors";
import FadeIn from "./components/FadeIn";
import AnimatedCounter from "./components/AnimatedCounter";

function ProgramsPage() {
  const programs = [
  { title: "Food Drive", desc: "Distributing free meals to underprivileged families and individuals across Kanpur & Ghaziabad every week.", icon: "🍱", color: "#e8f5e9" },
  { title: "Education Support", desc: "Providing free stationery, books, and educational resources to underprivileged children so no child is left behind.", icon: "📚", color: "#e3f2fd" },
  { title: "Hygiene & Health", desc: "Distributing free sanitary pads, soaps, and health kits to women and girls in underserved communities.", icon: "🧼", color: "#fce4ec" },
  { title: "Clothing Drive", desc: "Collecting and distributing clean clothes, blankets and essentials—especially during winters when need is highest.", icon: "👕", color: "#fff3e0" },
  { title: "Women Empowerment", desc: "Skill workshops, awareness drives, and mentorship programs focused on uplifting women in society.", icon: "💪", color: "#f3e5f5" },
  { title: "Student Internships", desc: "One of India's biggest student-led NGO offering internships to build empathy and leadership in young people.", icon: "🎓", color: "#e0f7fa" },
];
  return (
    <div style={{ paddingTop: 80 }}>
      <section style={{ padding: "80px 24px 60px", background: "linear-gradient(160deg, #e8f5e9, #fff)", textAlign: "center" }}>
        <FadeIn>
          <div style={{ fontSize: 12, color: COLORS.primary, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>What We Do</div>
          <h1 style={{ fontSize: "clamp(32px,5vw,54px)", fontWeight: 800, color: COLORS.text, marginBottom: 20 }}>Our Programs</h1>
          <p style={{ fontSize: 18, color: COLORS.textMuted, maxWidth: 560, margin: "0 auto" }}>
            Six pillars of impact — every one driven by our mission to uplift the underprivileged.
          </p>
        </FadeIn>
      </section>
      <section style={{ padding: "60px 24px 80px", background: "#fff" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))", gap: 28 }}>
          {programs.map((p, i) => (
            <FadeIn key={p.title} delay={i * 80}>
              <div style={{ borderRadius: 18, overflow: "hidden", border: `1px solid ${COLORS.border}`, background: "#fff", transition: "transform 0.2s, box-shadow 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(26,107,74,0.12)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ background: p.color, padding: "28px 28px 20px", display: "flex", alignItems: "center", gap: 16 }}>
                  <div style={{ fontSize: 40 }}>{p.icon}</div>
                  <h3 style={{ fontWeight: 800, fontSize: 20, color: COLORS.text }}>{p.title}</h3>
                </div>
                <div style={{ padding: "20px 28px 28px" }}>
                  <p style={{ color: COLORS.textMuted, fontSize: 15, lineHeight: 1.75 }}>{p.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
export default ProgramsPage;