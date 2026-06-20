import COLORS,{pages} from "../constants/colors";
function Footer({ setPage }) {
  return (
    <footer style={{ background: COLORS.text, color: "#fff", padding: "52px 24px 28px" }}>
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: 40, marginBottom: 40 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 34, height: 34, borderRadius: "50%", background: COLORS.primary, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🕊️</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15 }}>NayePankh Foundation</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", letterSpacing: 0.5 }}>GOVT. REG. NGO</div>
              </div>
            </div>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>
              Uplifting underprivileged communities across India through food, education, hygiene and hope.
            </p>
          </div>
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: 16, fontSize: 14, textTransform: "uppercase", letterSpacing: 1, color: "rgba(255,255,255,0.5)" }}>Quick Links</h4>
            {pages.map(p => (
              <div key={p} style={{ marginBottom: 8 }}>
                <button onClick={() => setPage(p)} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.75)", cursor: "pointer", fontSize: 15, padding: 0, textAlign: "left" }}>{p}</button>
              </div>
            ))}
          </div>
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: 16, fontSize: 14, textTransform: "uppercase", letterSpacing: 1, color: "rgba(255,255,255,0.5)" }}>Contact</h4>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.75)", lineHeight: 2 }}>
              📧 contact@nayepankh.com<br />
              📱 +91 8318500748<br /> 
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
              {[["Instagram", "https://www.instagram.com/nayepankhfoundation"], ["LinkedIn", "https://www.linkedin.com/company/nayepankh"], ["Facebook", "https://www.facebook.com/nayepankhfoundation"]].map(([label, url]) => (
                <a key={label} href={url} target="_blank" rel="noopener noreferrer" style={{ padding: "6px 12px", background: "rgba(255,255,255,0.1)", borderRadius: 8, color: "#fff", fontSize: 13, textDecoration: "none", fontWeight: 500 }}>{label}</a>
              ))}
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: 24, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>© 2024 NayePankh Foundation. All rights reserved.</div>
          <div style={{ display: "flex", gap: 20 }}>
            {["Terms and Conditions", "Privacy Policy"].map(l => (
              <span key={l} style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", cursor: "pointer" }}>{l}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer