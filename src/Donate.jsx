import COLORS from "./constants/colors";
import FadeIn from "./components/FadeIn";
import AnimatedCounter from "./components/AnimatedCounter";
import { useState } from "react";
function DonatePage() {
  const [amount, setAmount] = useState(500);
  const [custom, setCustom] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const presets = [100, 500, 1000, 2500];
  const finalAmount = custom ? parseInt(custom) || 0 : amount;

  const handleSubmit = () => {
    if (!name || !email) return alert("Please fill in your name and email.");
    setSubmitted(true);
  };

  if (submitted) return (
    <div style={{ paddingTop: 80, minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "120px 24px" }}>
      <FadeIn style={{ textAlign: "center", maxWidth: 500 }}>
        <div style={{ fontSize: 80, marginBottom: 20 }}>🎉</div>
        <h2 style={{ fontWeight: 800, fontSize: 32, color: COLORS.primary, marginBottom: 16 }}>Thank You, {name}!</h2>
        <p style={{ fontSize: 18, color: COLORS.textMuted, lineHeight: 1.7 }}>
          Your generous donation of ₹{finalAmount.toLocaleString("en-IN")} will help us bring smiles to many faces. We'll send confirmation to {email}.
        </p>
        <p style={{ fontSize: 14, color: COLORS.textMuted, marginTop: 12 }}>Your donation is tax-exempt under Section 80G of the Indian Income Tax Act.</p>
        <button onClick={() => setSubmitted(false)} style={{ marginTop: 28, padding: "12px 28px", background: COLORS.primary, color: "#fff", border: "none", borderRadius: 10, fontWeight: 600, fontSize: 15, cursor: "pointer" }}>
          Make Another Donation
        </button>
      </FadeIn>
    </div>
  );

  return (
    <div style={{ paddingTop: 80 }}>
      <section style={{ padding: "80px 24px 60px", background: "linear-gradient(160deg, #e8f5e9, #fff)", textAlign: "center" }}>
        <FadeIn>
          <div style={{ fontSize: 12, color: COLORS.primary, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Make a Difference</div>
          <h1 style={{ fontSize: "clamp(32px,5vw,54px)", fontWeight: 800, color: COLORS.text, marginBottom: 20 }}>Donate Today</h1>
          <p style={{ fontSize: 18, color: COLORS.textMuted, maxWidth: 500, margin: "0 auto" }}>
            Your donations are tax-exempted under 80G of the Indian Income Tax Act.
          </p>
        </FadeIn>
      </section>
      <section style={{ padding: "40px 24px 80px", background: "#fff" }}>
        <div style={{ maxWidth: 540, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ background: COLORS.bg, borderRadius: 20, padding: "40px 36px", border: `1px solid ${COLORS.border}` }}>
              <h2 style={{ fontWeight: 800, fontSize: 22, color: COLORS.text, marginBottom: 24 }}>Choose an Amount</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10, marginBottom: 16 }}>
                {presets.map(p => (
                  <button key={p} onClick={() => { setAmount(p); setCustom(""); }} style={{ padding: "12px 4px", borderRadius: 10, border: `2px solid ${amount === p && !custom ? COLORS.primary : COLORS.border}`, background: amount === p && !custom ? COLORS.primary : "#fff", color: amount === p && !custom ? "#fff" : COLORS.text, fontWeight: 700, fontSize: 15, cursor: "pointer", transition: "all 0.15s" }}>
                    ₹{p}
                  </button>
                ))}
              </div>
              <input type="number" placeholder="Or enter custom amount (₹)" value={custom} onChange={e => setCustom(e.target.value)} style={{ width: "100%", padding: "12px 16px", borderRadius: 10, border: `1px solid ${COLORS.border}`, fontSize: 16, marginBottom: 24, boxSizing: "border-box", outline: "none",  background: "#fff", 
    color: COLORS.text, }} />
              <div style={{ borderTop: `1px solid ${COLORS.border}`,
               paddingTop: 24, marginBottom: 24 }}>
                <h3 style={{ fontWeight: 700, fontSize: 17, color: COLORS.text, marginBottom: 14 }}>Your Details</h3>
                <input type="text" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} style={{ width: "100%", padding: "12px 16px", borderRadius: 10, border: `1px solid ${COLORS.border}`,
                 background: "#fff",  
    color: COLORS.text,
                 fontSize: 15, marginBottom: 12, boxSizing: "border-box", outline: "none" }} />
                <input type="email" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} style={{ width: "100%", padding: "12px 16px", 
                   background: "#fff", 
    color: COLORS.text,borderRadius: 10, border: `1px solid ${COLORS.border}`, fontSize: 15, boxSizing: "border-box", outline: "none" }} />
              </div>
              <div style={{ background: "#e8f5e9", borderRadius: 10, padding: "14px 18px", marginBottom: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: COLORS.textMuted, fontWeight: 500 }}>Total Donation</span>
                <span style={{ fontWeight: 800, fontSize: 22, color: COLORS.primary }}>₹{finalAmount.toLocaleString("en-IN")}</span>
              </div>
              <button onClick={handleSubmit} style={{ width: "100%", padding: "16px", background: COLORS.primary, color: "#fff", border: "none", borderRadius: 12, fontWeight: 800, fontSize: 17, cursor: "pointer", boxShadow: "0 6px 20px rgba(26,107,74,0.28)", transition: "transform 0.2s" }}
                onMouseEnter={e => e.target.style.transform = "translateY(-2px)"}
                onMouseLeave={e => e.target.style.transform = "translateY(0)"}>
                ❤️ Donate ₹{finalAmount.toLocaleString("en-IN")}
              </button>
              <p style={{ fontSize: 13, color: COLORS.textMuted, textAlign: "center", marginTop: 14 }}>100% secure • Tax-exempt under 80G</p>
            </div>
          </FadeIn>
          <FadeIn delay={100} style={{ marginTop: 28, textAlign: "center" }}>
            <p style={{ color: COLORS.textMuted, fontSize: 15 }}>
              Questions? Reach us at{" "}
              <a href="mailto:contact@nayepankh.com" style={{ color: COLORS.primary, fontWeight: 600 }}>contact@nayepankh.com</a>
              {" "}or call <a href="tel:+918318500748" style={{ color: COLORS.primary, fontWeight: 600 }}>+91 8318500748</a>
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
export default DonatePage;