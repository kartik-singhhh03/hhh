import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function RoiCalculator() {
  const [nightly, setNightly] = useState(650);
  const [occupancy, setOccupancy] = useState(75);
  const [expenses, setExpenses] = useState(2000);

  // Derived state
  const daysPerMonth = 30.4;
  const grossMonthly = nightly * daysPerMonth * (occupancy / 100);
  const netMonthly = grossMonthly - expenses;
  const yearlyGross = grossMonthly * 12;

  useEffect(() => {
    window.scrollTo(0, 0);
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/image-8.webp')" }}></div>
        <div className="page-hero-overlay"></div>
        <div className="container">
          <div className="section-label">ROI Calculator</div>
          <h1>Estimate Your<br /><em style={{ color: "#B8D0DC" }}>Property Revenue</em></h1>
          <p>See how much your Ras Al Khaimah holiday home could earn with HHH management.</p>
        </div>
      </div>

      {/* CALCULATOR SECTION */}
      <section style={{ background: "var(--dark-bg)" }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", maxWidth: "620px", margin: "0 auto 20px" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>Interactive Tool</div>
            <h2 className="section-title" style={{ textAlign: "center" }}>Rental Revenue Calculator</h2>
            <p className="section-desc" style={{ textAlign: "center", margin: "0 auto" }}>Adjust the sliders below to see your estimated monthly and annual rental income based on your property's rates and occupancy.</p>
          </div>

          <div className="calculator-wrap">
            {/* Inputs */}
            <div className="calculator-form reveal">
              <h3>Your Property Details</h3>

              <div className="range-group">
                <label htmlFor="nightlyRange">
                  Nightly Rate (AED)
                  <span id="nightlyVal">AED {nightly.toLocaleString()}</span>
                </label>
                <input 
                  type="range" 
                  id="nightlyRange" 
                  min="200" 
                  max="2500" 
                  step="50" 
                  value={nightly} 
                  onChange={(e) => setNightly(Number(e.target.value))} 
                />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: ".72rem", color: "var(--text-muted)", marginTop: "6px" }}>
                  <span>AED 200</span><span>AED 2,500</span>
                </div>
              </div>

              <div className="range-group">
                <label htmlFor="occupancyRange">
                  Occupancy Rate
                  <span id="occupancyVal">{occupancy}%</span>
                </label>
                <input 
                  type="range" 
                  id="occupancyRange" 
                  min="20" 
                  max="100" 
                  step="5" 
                  value={occupancy} 
                  onChange={(e) => setOccupancy(Number(e.target.value))} 
                />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: ".72rem", color: "var(--text-muted)", marginTop: "6px" }}>
                  <span>20%</span><span>100%</span>
                </div>
              </div>

              <div className="range-group">
                <label htmlFor="expensesRange">
                  Monthly Expenses (AED)
                  <span id="expensesVal">AED {expenses.toLocaleString()}</span>
                </label>
                <input 
                  type="range" 
                  id="expensesRange" 
                  min="500" 
                  max="10000" 
                  step="250" 
                  value={expenses} 
                  onChange={(e) => setExpenses(Number(e.target.value))} 
                />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: ".72rem", color: "var(--text-muted)", marginTop: "6px" }}>
                  <span>AED 500</span><span>AED 10,000</span>
                </div>
              </div>

              <div style={{ marginTop: "24px", padding: "20px", background: "rgba(144,203,220,.06)", borderRadius: "12px", fontSize: ".82rem", color: "var(--text-muted)", lineHeight: 1.8 }}>
                <strong style={{ color: "var(--primary-light)", display: "block", marginBottom: "6px" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline", verticalAlign: "middle", marginRight: "6px" }}><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                  What expenses should I include?
                </strong>
                Service charges, utilities, cleaning fees, HHH management fee (15%), DTCM fees, and any maintenance provisions.
              </div>
            </div>

            {/* Results */}
            <div className="calculator-results reveal reveal-delay-2">
              <div className="result-card">
                <div className="result-label">Estimated Monthly Revenue (Gross)</div>
                <div className="result-value" id="monthlyResult">AED {Math.round(grossMonthly).toLocaleString()}</div>
                <div className="result-sub">Before management fee and expenses</div>
              </div>

              <div className="result-card">
                <div className="result-label">Estimated Annual Revenue (Gross)</div>
                <div className="result-value" id="yearlyResult">AED {Math.round(yearlyGross).toLocaleString()}</div>
                <div className="result-sub">Based on 12-month projection</div>
              </div>

              <div className="result-card" style={{ background: "rgba(144,203,220,.1)", borderColor: "var(--primary)" }}>
                <div className="result-label">Estimated Monthly Net Income</div>
                <div className="result-value" id="netResult">AED {Math.round(netMonthly).toLocaleString()}</div>
                <div className="result-sub">After all monthly expenses</div>
              </div>

              <div style={{ background: "rgba(255,255,255,.88)", border: "1px solid rgba(144,203,220,.12)", borderRadius: "16px", padding: "24px", marginTop: "4px" }}>
                <div style={{ fontSize: ".78rem", color: "var(--text-muted)", lineHeight: 1.8 }}>
                  <strong style={{ color: "var(--text-dark)", display: "block", marginBottom: "8px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline", verticalAlign: "middle", marginRight: "6px" }}><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
                    Market Context
                  </strong>
                  Hayat Island 1-bed apartments on our portfolio achieve an average nightly rate of <strong style={{ color: "var(--primary)" }}>AED 620–720</strong> and occupancy of <strong style={{ color: "var(--primary)" }}>78–85%</strong> year-round, driven by strong leisure and corporate demand.
                </div>
              </div>

              <Link to="/contact" className="btn-primary-dark" style={{ textAlign: "center", justifyContent: "center", marginTop: "8px" }}>
                Get Your Free Revenue Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ASSUMPTIONS NOTE */}
      <section style={{ background: "var(--luxury-dark)", padding: "60px 0" }}>
        <div className="container">
          <div className="reveal" style={{ maxWidth: "780px", margin: "0 auto", textAlign: "center" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>How We Calculate</div>
            <h2 className="section-title" style={{ textAlign: "center", fontSize: "1.8rem" }}>Methodology &amp; Assumptions</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px", marginTop: "36px", textAlign: "left" }}>
              <div style={{ background: "rgba(255,255,255,.88)", borderRadius: "16px", padding: "24px" }}>
                <div style={{ color: "var(--primary)", marginBottom: "12px" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                </div>
                <h4 style={{ fontFamily: "'DM Sans',sans-serif", fontSize: ".9rem", color: "var(--text-dark)", marginBottom: "8px" }}>Days Per Month</h4>
                <p style={{ fontSize: ".82rem", color: "var(--text-muted)", lineHeight: 1.7 }}>We use 30.4 average days per month across the year to calculate a realistic monthly figure.</p>
              </div>
              <div style={{ background: "rgba(255,255,255,.88)", borderRadius: "16px", padding: "24px" }}>
                <div style={{ color: "var(--primary)", marginBottom: "12px" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                </div>
                <h4 style={{ fontFamily: "'DM Sans',sans-serif", fontSize: ".9rem", color: "var(--text-dark)", marginBottom: "8px" }}>Gross vs Net</h4>
                <p style={{ fontSize: ".82rem", color: "var(--text-muted)", lineHeight: 1.7 }}>Gross revenue is before expenses. Net income subtracts your entered monthly expenses from gross.</p>
              </div>
              <div style={{ background: "rgba(255,255,255,.88)", borderRadius: "16px", padding: "24px" }}>
                <div style={{ color: "var(--primary)", marginBottom: "12px" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                </div>
                <h4 style={{ fontFamily: "'DM Sans',sans-serif", fontSize: ".9rem", color: "var(--text-dark)", marginBottom: "8px" }}>Indicative Only</h4>
                <p style={{ fontSize: ".82rem", color: "var(--text-muted)", lineHeight: 1.7 }}>Results are estimates. Actual earnings vary by property, season, and market conditions. Contact us for a precise assessment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
