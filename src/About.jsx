import COLORS from "./constants/colors";
import FadeIn from "./components/FadeIn";
import AnimatedCounter from "./components/AnimatedCounter";

function AboutPage() {
  return (
    <div style={{ paddingTop: 80 }}>
      <section style={{ padding: "80px 24px 60px", background: "linear-gradient(160deg, #e8f5e9, #fff)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <FadeIn>
            <div style={{ fontSize: 12, color: COLORS.primary, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Who We Are</div>
            <h1 style={{ fontSize: "clamp(32px,5vw,54px)", fontWeight: 800, color: COLORS.text, marginBottom: 20 }}>About NayePankh Foundation</h1>
            <p style={{ fontSize: 18, color: COLORS.textMuted, lineHeight: 1.8 }}>
              A UP Government registered NGO committed to uplifting underprivileged communities through compassion, action, and student-driven leadership.
            </p>
          </FadeIn>
        </div>
      </section>

      <section style={{ padding: "60px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
            <FadeIn>
              <h2 style={{ fontSize: 28, fontWeight: 800, color: COLORS.text, marginBottom: 16 }}>Our Mission</h2>
              <p style={{ color: COLORS.textMuted, fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
                NayePankh Foundation exists to serve mankind. Our name — meaning "new wings" — reflects our belief that every underprivileged person deserves the chance to soar.
              </p>
              <p style={{ color: COLORS.textMuted, fontSize: 16, lineHeight: 1.8 }}>
                We work across Kanpur, Ghaziabad, and several other cities, running programs in food distribution, education, hygiene, women's empowerment, and more.
              </p>
            </FadeIn>
            <FadeIn delay={120}>
              <h2 style={{ fontSize: 28, fontWeight: 800, color: COLORS.text, marginBottom: 16 }}>Our Vision</h2>
              <p style={{ color: COLORS.textMuted, fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
                We envision an India where no person goes hungry, no child misses education due to poverty, and every woman has access to basic dignity and hygiene.
              </p>
              <p style={{ color: COLORS.textMuted, fontSize: 16, lineHeight: 1.8 }}>
                By harnessing the energy of India's youth, we are building a student movement that transforms communities from within.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 24px", background: COLORS.bg }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <FadeIn style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: 32, fontWeight: 800, color: COLORS.text }}>Registrations & Recognition</h2>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))", gap: 20 }}>
            {["UP Government Registered NGO", "80G Tax Exemption", "12A Registration", "Newspaper Coverage – Multiple Publications"].map((item, i) => (
              <FadeIn key={item} delay={i * 80}>
                <div style={{ background: "#fff", borderRadius: 14, padding: "22px 24px", border: `1px solid ${COLORS.border}`, display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: "#e8f5e9", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>✅</div>
                  <div style={{ fontWeight: 600, color: COLORS.text, fontSize: 15, lineHeight: 1.5 }}>{item}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <FadeIn>
            <div style={{ background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryLight})`, borderRadius: 20, padding: "48px 40px" }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>💬</div>
              <blockquote style={{ fontSize: 22, fontWeight: 700, color: "#fff", lineHeight: 1.6, fontStyle: "italic", marginBottom: 20 }}>
                "If we all do something, then together there is no problem that we cannot solve!"
              </blockquote>
              <div style={{ color: "rgba(255,255,255,0.9)", fontWeight: 600 }}>— Prashant Shukla</div>
              <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}>Founder & President, NayePankh Foundation</div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
export default AboutPage;