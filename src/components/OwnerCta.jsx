export default function OwnerCta() {
  return (
    <section className="owner-cta-section" id="owners">
      <div className="cta-bg-shapes">
        <div className="cta-shape cta-shape-1"></div>
        <div className="cta-shape cta-shape-2"></div>
      </div>
      <div className="container">
        <div className="owner-cta-content reveal">
          <div className="section-label" style={{ justifyContent: 'center', marginBottom: '20px', color: '#1C3240' }}>
            <span style={{ background: 'rgba(28,50,64,0.2)' }}></span>Property Owners
          </div>
          <h2>Transform Your Property<br />Into a High-Yield Asset</h2>
          <p>Partner with Holiday Home Host — Ras Al Khaimah&apos;s premiere short-term rental management company. Our 20% all-inclusive management fee covers complete premium operations, from listing to monthly payout.</p>
          <div className="cta-buttons">
            <a href="property-owners.html" className="btn-primary">
              <span className="material-symbols-outlined">home_work</span>
              List Your Property
            </a>
            <a href="roi-calculator.html" className="btn-outline" style={{ color: '#1C3240', borderColor: 'rgba(28,50,64,0.2)' }}>
              <span className="material-symbols-outlined">calculate</span>
              Calculate Your ROI
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
