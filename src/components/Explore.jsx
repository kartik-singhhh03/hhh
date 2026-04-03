import { useRef } from 'react';

export default function Explore() {
  const cardsRef = useRef(null);

  const scrollLeft = () => cardsRef.current?.scrollBy({ left: -380, behavior: 'smooth' });
  const scrollRight = () => cardsRef.current?.scrollBy({ left: 380, behavior: 'smooth' });

  return (
    <section className="explore-section" id="explore">
      <div className="container">
        <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div className="section-label">Explore</div>
            <h2 className="section-title">The RAK Advantage</h2>
            <p className="section-desc">Ras Al Khaimah is one of the UAE&apos;s fastest-growing tourism destinations — and HHH puts your property at the heart of it.</p>
          </div>
          <div className="explore-scroll-btn">
            <button className="scroll-btn" id="explorePrev" onClick={scrollLeft}><span className="material-symbols-outlined">arrow_back</span></button>
            <button className="scroll-btn" id="exploreNext" onClick={scrollRight}><span className="material-symbols-outlined">arrow_forward</span></button>
          </div>
        </div>
        <div className="explore-scroll-wrap">
          <div className="explore-cards" id="exploreCards" ref={cardsRef} style={{ display: 'flex', gap: '24px', overflowX: 'auto', scrollbarWidth: 'none', paddingBottom: '20px', scrollSnapType: 'x mandatory' }}>
            <div className="explore-card reveal">
              <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80" alt="Jebel Jais" loading="lazy" />
              <div className="explore-card-content">
                <div className="explore-card-tag">Adventure</div>
                <div className="explore-card-title">Jebel Jais</div>
                <div className="explore-card-desc">UAE&apos;s highest peak — thrilling zip-lines, via ferrata, and breathtaking vistas.</div>
              </div>
            </div>
            <div className="explore-card reveal reveal-delay-1">
              <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80" alt="Al Marjan Island" loading="lazy" />
              <div className="explore-card-content">
                <div className="explore-card-tag">Island Life</div>
                <div className="explore-card-title">Al Marjan Island</div>
                <div className="explore-card-desc">Man-made island paradise with luxury resorts, marina, and crystal waters.</div>
              </div>
            </div>
            <div className="explore-card reveal reveal-delay-2">
              <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80" alt="Beach" loading="lazy" />
              <div className="explore-card-content">
                <div className="explore-card-tag">Beach &amp; Leisure</div>
                <div className="explore-card-title">Luxury Beaches</div>
                <div className="explore-card-desc">Pristine sandy shores, beach clubs, and golden sunsets over the Arabian Gulf.</div>
              </div>
            </div>
            <div className="explore-card reveal reveal-delay-3">
              <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80" alt="Dining" loading="lazy" />
              <div className="explore-card-content">
                <div className="explore-card-tag">Culture &amp; Cuisine</div>
                <div className="explore-card-title">World-Class Dining</div>
                <div className="explore-card-desc">Waterfront restaurants and authentic Emirati cuisine.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
