const reviews = [
  {
    text: '"HHH transformed my investment property into a high-performing asset. The team\'s professionalism and transparent reporting exceeded every expectation - my revenue surpassed projections from month one."',
    avatar: "K",
    name: "Khalid A.",
    country: "Property Owner - Abu Dhabi",
  },
  {
    text: '"An absolutely breathtaking stay. The check-in was seamless, the apartment spotless, and the team was available whenever we needed them. We will definitely return."',
    avatar: "S",
    name: "Sarah M.",
    country: "Guest - United Kingdom",
  },
  {
    text: '"I was nervous about renting my apartment, but the HHH team made everything effortless - from photos to guests to monthly reports. The income has been incredible."',
    avatar: "N",
    name: "Nadia S.",
    country: "Property Owner - Dubai",
  },
];

export default function Reviews() {
  return (
    <section className="reviews-section" id="reviews">
      <div className="container">
        <div className="reveal" style={{ textAlign: "center" }}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            Reviews
          </div>
          <h2 className="section-title" style={{ textAlign: "center" }}>
            What Guests &amp; Owners Say
          </h2>
          <p className="section-desc" style={{ margin: "0 auto" }}>
            Genuine experiences from our valued guests and property owner
            partners from around the world.
          </p>
        </div>

        <div className="reviews-slider reveal reveal-delay-1">
          <div className="reviews-track" id="reviewsTrack">
            {reviews.map((review) => (
              <div key={review.name} className="review-card">
                <div className="review-stars">{"\u2605\u2605\u2605\u2605\u2605"}</div>
                <p className="review-text">{review.text}</p>
                <div className="review-author">
                  <div className="review-avatar">{review.avatar}</div>
                  <div>
                    <div className="review-name">{review.name}</div>
                    <div className="review-country">{review.country}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
