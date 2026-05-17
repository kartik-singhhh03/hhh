import { useRef } from "react";

export default function Explore() {
  const cardsRef = useRef(null);

  const scrollLeft = () =>
    cardsRef.current?.scrollBy({ left: -380, behavior: "smooth" });
  const scrollRight = () =>
    cardsRef.current?.scrollBy({ left: 380, behavior: "smooth" });

  return (
    <section className="explore-section" id="explore">
      <div className="container">
        <div
          className="reveal"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div>
            <div className="section-label">Explore</div>
            <h2 className="section-title">The Hayat Island Advantage</h2>
            <p className="section-desc">
              Real coastal amenities, beach access, and apartment comfort give
              every HHH stay a stronger guest story.
            </p>
          </div>
          <div className="explore-scroll-btn">
            <button
              className="scroll-btn"
              id="explorePrev"
              onClick={scrollLeft}
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button
              className="scroll-btn"
              id="exploreNext"
              onClick={scrollRight}
            >
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
        <div className="explore-scroll-wrap">
          <div
            className="explore-cards"
            id="exploreCards"
            ref={cardsRef}
            style={{
              display: "flex",
              gap: "24px",
              overflowX: "auto",
              scrollbarWidth: "none",
              paddingBottom: "20px",
              scrollSnapType: "x mandatory",
            }}
          >
            <div className="explore-card reveal">
              <img
                src="/pacific-apt-16.webp"
                alt="Hayat Island beach beside Pacific apartments"
                loading="lazy"
              />
              <div className="explore-card-content">
                <div className="explore-card-tag">Beachfront</div>
                <div className="explore-card-title">Hayat Island Beach</div>
                <div className="explore-card-desc">
                  Clear coastal water and soft sand within easy reach of the
                  apartment.
                </div>
              </div>
            </div>
            <div className="explore-card reveal reveal-delay-1">
              <img
                src="/image-7.webp"
                alt="Bay Residences pool and apartment towers"
                loading="lazy"
              />
              <div className="explore-card-content">
                <div className="explore-card-tag">Resort Living</div>
                <div className="explore-card-title">Poolside Leisure</div>
                <div className="explore-card-desc">
                  A bright pool setting that helps guests settle into a relaxed
                  coastal rhythm.
                </div>
              </div>
            </div>
            <div className="explore-card reveal reveal-delay-2">
              <img
                src="/pacific-apt-12.webp"
                alt="Pacific apartment gym overlooking the sea"
                loading="lazy"
              />
              <div className="explore-card-content">
                <div className="explore-card-tag">Amenities</div>
                <div className="explore-card-title">Sea-View Fitness</div>
                <div className="explore-card-desc">
                  On-site fitness facilities support longer, more comfortable
                  guest stays.
                </div>
              </div>
            </div>
            <div className="explore-card reveal reveal-delay-3">
              <img
                src="/image-12.webp"
                alt="Pacific apartment living room and dining area"
                loading="lazy"
              />
              <div className="explore-card-content">
                <div className="explore-card-tag">Apartment Comfort</div>
                <div className="explore-card-title">Bright Living Spaces</div>
                <div className="explore-card-desc">
                  Light interiors, sea views, and practical layouts designed
                  for repeatable guest satisfaction.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
