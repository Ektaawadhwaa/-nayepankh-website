import COLORS from "./constants/colors";
import FadeIn from "./components/FadeIn";
import AnimatedCounter from "./components/AnimatedCounter";

function TeamPage() {
  const team = [
  { name: "Prashant Shukla", role: "Founder & President", initials: "PS", color: "#1a6b4a" },
  { name: "Volunteer Lead", role: "Operations Head", initials: "VL", color: "#f5a623" },
  { name: "Media Team", role: "Communications", initials: "MT", color: "#2196f3" },
  { name: "Field Team", role: "On-Ground Execution", initials: "FT", color: "#e91e63" },
];
  return (
    <div style={{ paddingTop: 80 }}>
      <section style={{ padding: "80px 24px 60px", background: "linear-gradient(160deg, #e8f5e9, #fff)", textAlign: "center" }}>
        <FadeIn>
          <div style={{ fontSize: 12, color: COLORS.primary, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Our People</div>
          <h1 style={{ fontSize: "clamp(32px,5vw,54px)", fontWeight: 800, color: COLORS.text, marginBottom: 20 }}>The Team</h1>
          <p style={{ fontSize: 18, color: COLORS.textMuted, maxWidth: 520, margin: "0 auto" }}>
            Passionate volunteers and leaders making change happen on the ground every single day.
          </p>
        </FadeIn>
      </section>
      <section style={{ padding: "60px 24px 80px", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: 28 }}>
          {team.map((m, i) => (
            <FadeIn key={m.name} delay={i * 100}>
              <div style={{ background: "#fff", borderRadius: 18, border: `1px solid ${COLORS.border}`, padding: "36px 24px", textAlign: "center", transition: "transform 0.2s, box-shadow 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(26,107,74,0.12)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ width: 72, height: 72, borderRadius: "50%", background: m.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, fontWeight: 800, color: "#fff", margin: "0 auto 18px" }}>{m.initials}</div>
                <h3 style={{ fontWeight: 700, fontSize: 17, color: COLORS.text, marginBottom: 6 }}>{m.name}</h3>
                <div style={{ fontSize: 14, color: COLORS.textMuted, fontWeight: 500 }}>{m.role}</div>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn style={{ textAlign: "center", marginTop: 60 }}>
          <div style={{ background: COLORS.bg, borderRadius: 16, padding: "40px 32px", maxWidth: 560, margin: "0 auto", border: `1px solid ${COLORS.border}` }}>
            <div style={{ fontSize: 40, marginBottom: 16 }}>🙌</div>
            <h2 style={{ fontWeight: 800, fontSize: 24, color: COLORS.text, marginBottom: 12 }}>Want to join us?</h2>
            <p style={{ color: COLORS.textMuted, fontSize: 16, lineHeight: 1.7, marginBottom: 24 }}>
              Whether you're a student, professional, or just someone who cares — there's a place for you at NayePankh.
            </p>
            <a href="mailto:contact@nayepankh.com" style={{ display: "inline-block", padding: "12px 28px", background: COLORS.primary, color: "#fff", borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: "none" }}>
              Get In Touch
            </a>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
export default TeamPage