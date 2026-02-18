const offices = [
  { name: "Pensacola", href: "/locations/pensacola" },
  { name: "Fort Walton Beach", href: "/locations/fort-walton-beach" },
  { name: "Crestview", href: "/locations/crestview" },
  { name: "Destin / Miramar Beach", href: "/locations/destin" },
  { name: "Mobile", href: "/locations/mobile" },
];

export default function HomePage() {
  return (
    <main
      style={{
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
        background: "#0b1220",
        minHeight: "100vh",
        padding: "56px 20px",
        color: "#e8eefc",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <header style={{ marginBottom: 28 }}>
          <div style={{ display: "inline-block", padding: "6px 10px", borderRadius: 999, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
            Personal Injury Law Firm
          </div>

          <h1 style={{ fontSize: 44, lineHeight: 1.1, margin: "16px 0 10px" }}>
            Dean &amp; Camper, P.A.
          </h1>

          <p style={{ fontSize: 18, color: "rgba(232,238,252,0.8)", maxWidth: 720 }}>
            Personal Injury Lawyers Serving Florida and Alabama. Office hours Mon–Fri 8:00–5:00,
            with attorneys available 24/7 for after-hours and weekend appointments.
          </p>
        </header>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: 18,
            alignItems: "start",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 16,
              padding: 22,
            }}
          >
            <h2 style={{ fontSize: 22, margin: "0 0 12px" }}>Our Offices</h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
                gap: 12,
              }}
            >
              {offices.map((o) => (
                <a
                  key={o.name}
                  href={o.href}
                  style={{
                    display: "block",
                    padding: 16,
                    borderRadius: 14,
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    color: "#e8eefc",
                    textDecoration: "none",
                  }}
                >
                  <div style={{ fontWeight: 700 }}>{o.name}</div>
                  <div style={{ marginTop: 6, fontSize: 13, color: "rgba(232,238,252,0.75)" }}>
                    View office details &amp; directions →
                  </div>
                </a>
              ))}
            </div>
          </div>

          <aside
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 16,
              padding: 22,
            }}
          >
            <h3 style={{ margin: 0, fontSize: 18 }}>Free Consultation</h3>
            <p style={{ marginTop: 10, color: "rgba(232,238,252,0.8)", lineHeight: 1.5 }}>
              Call now to speak with our team. No fee unless we win.
            </p>

            <a
              href="tel:+18504333077"
              style={{
                display: "inline-block",
                marginTop: 10,
                padding: "10px 14px",
                borderRadius: 12,
                background: "#f5c451",
                color: "#0b1220",
                fontWeight: 800,
                textDecoration: "none",
              }}
            >
              Call Pensacola: (850) 433-3077
            </a>

            <div style={{ marginTop: 14, fontSize: 13, color: "rgba(232,238,252,0.75)" }}>
              Prefer another office? Select a location from the list.
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}

