import { useEffect, useRef } from 'react';

export default function Experience() {
  const underlineRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Underline animation
    if (underlineRef.current) {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            underlineRef.current.classList.add('visible');
            obs.unobserve(underlineRef.current);
          }
        });
      }, { threshold: 0.5 });
      obs.observe(underlineRef.current);
      return () => obs.disconnect();
    }
  }, []);

  useEffect(() => {
    // Counter animation
    if (!containerRef.current) return;
    const counters = containerRef.current.querySelectorAll('.counter');
    
    const easeOut = (t) => 1 - Math.pow(1 - t, 3);
    
    const animateCounter = (el) => {
      const target = parseInt(el.dataset.target, 10);
      const duration = 1800;
      const start = performance.now();
      
      const step = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        el.textContent = Math.round(easeOut(progress) * target);
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = target;
      };
      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    counters.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="experience-section" id="experience" ref={containerRef}>
      <div className="container">
        <div className="experience-wrap">
          <div className="experience-image reveal">
            <img src="/image-12.webp" alt="Bright Pacific apartment living and dining area" loading="lazy" />
            <div className="experience-accent"></div>
          </div>
          <div className="experience-content reveal reveal-delay-2">
            <div className="section-label">About Holiday Home Host</div>
            <h2>
              <span className="animated-underline" id="expUnderline" ref={underlineRef}>Professional Management,</span><br />
              Exceptional<br />Results
            </h2>
            <p>Holiday Home Host is a premium short-term rental management company focused on transforming properties into high-performing vacation rentals across Ras Al Khaimah and the UAE.</p>
            <p>Our team brings decades of hospitality experience, delivering professional management, exceptional guest experiences, and strong financial performance for property owners. We combine operational excellence, technology, and market expertise to maximise occupancy, increase revenue, and maintain high service standards.</p>
            <div className="experience-stats">
              <div className="stat-item"><span className="stat-num counter" data-target="20">0</span><span className="stat-label">+ Years Experience</span></div>
              <div className="stat-item"><span className="stat-num counter" data-target="98">0</span><span className="stat-label">% Satisfaction</span></div>
              <div className="stat-item"><span className="stat-num counter" data-target="24">0</span><span className="stat-label">/ 7 Support</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
