import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const bgRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (bgRef.current) {
            const factor = window.scrollY * 0.3;
            bgRef.current.style.transform = `scale(1) translateY(${factor}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero" id="hero">
      <div 
        className="hero-bg" 
        id="heroBg" 
        ref={bgRef}
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=2000')" }}
      ></div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-badge">
          <span className="material-symbols-outlined">verified</span>
          Premium Rental Management · Ras Al Khaimah, UAE
        </div>
        <h1 className="hero-title">Your Perfect Stay<br /><em>Awaits in Ras Al Khaimah</em></h1>
        <p className="hero-sub">Premium short-term rental management elevating holiday homes across Ras Al Khaimah and the UAE.</p>
        <div className="hero-buttons">
          <Link to="/property-owners" className="btn-primary">
            <span className="material-symbols-outlined">home_work</span>
            List Your Property
          </Link>
          <a href="#services" className="btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.5)' }} onClick={(e) => {
            e.preventDefault();
            document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            <span className="material-symbols-outlined">arrow_forward</span>
            Explore Our Services
          </a>
        </div>
      </div>
      <div 
        className="hero-scroll" 
        onClick={() => document.getElementById('trust')?.scrollIntoView({ behavior: 'smooth' })}
        role="button" 
        tabIndex="0" 
        aria-label="Scroll down"
      >
        <span>Scroll</span>
        <div className="hero-scroll-arrow">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>
    </section>
  );
}
