import { Link } from "react-router-dom";

export default function OwnerCta() {
  return (
    <section className="owner-cta-section" id="owners">
      <div className="cta-bg-shapes">
        <div className="cta-shape cta-shape-1"></div>
        <div className="cta-shape cta-shape-2"></div>
      </div>
      <div className="container">
        <div className="owner-cta-content reveal">
          <div
            className="section-label"
            style={{ justifyContent: "center", marginBottom: "20px" }}
          >
            Property Owners
          </div>
          <h2>
            Transform Your Property
            <br />
            Into a High-Yield Asset
          </h2>
          <p>
            Partner with Holiday Home Host - Ras Al Khaimah&apos;s premier
            short-term rental management company. Our 20% all-inclusive
            management fee covers complete premium operations, from listing to
            monthly payout.
          </p>
          <div className="cta-buttons">
            <Link to="/property-owners" className="btn-primary">
              <span className="material-symbols-outlined">home_work</span>
              List Your Property
            </Link>
            <Link to="/roi-calculator" className="btn-outline">
              <span className="material-symbols-outlined">calculate</span>
              Calculate Your ROI
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
