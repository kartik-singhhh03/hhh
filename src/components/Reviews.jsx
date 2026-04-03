import { useState, useEffect, useRef } from 'react';

const reviews = [
  {
    stars: '★★★★★',
    text: '"HHH transformed my investment property into a high-performing asset. The team\'s professionalism and transparent reporting exceeded every expectation — my revenue surpassed projections from month one."',
    avatar: 'K',
    name: 'Khalid A.',
    country: 'Property Owner · Abu Dhabi'
  },
  {
    stars: '★★★★★',
    text: '"An absolutely breathtaking stay. The check-in was seamless, the apartment spotless, and the team was available whenever we needed them. We will definitely return."',
    avatar: 'S',
    name: 'Sarah M.',
    country: 'Guest · United Kingdom'
  },
  {
    stars: '★★★★★',
    text: '"I was nervous about renting my apartment, but the HHH team made everything effortless — from photos to guests to monthly reports. The income has been incredible."',
    avatar: 'N',
    name: 'Nadia S.',
    country: 'Property Owner · Dubai'
  },
  {
    stars: '★★★★★',
    text: '"The transparency is what I love most. I always know exactly how my property is performing — the dashboards are clear and the team responds within minutes."',
    avatar: 'O',
    name: 'Omar J.',
    country: 'Property Owner · Germany'
  },
  {
    stars: '★★★★★',
    text: '"A truly premium experience from start to finish. The property was immaculate, the service hotel-level, and the location in Ras Al Khaimah simply stunning."',
    avatar: 'P',
    name: 'Priya & Raj',
    country: 'Guests · India'
  },
  {
    stars: '★★★★★',
    text: '"The onboarding process was effortless. From staging to dynamic pricing, HHH handles every detail seamlessly. Our occupancy rate has doubled since switching management."',
    avatar: 'L',
    name: 'Liam T.',
    country: 'Property Owner · UK'
  },
  {
    stars: '★★★★★',
    text: '"We spent two weeks at a beachfront villa managed by HHH. The attention to detail, luxury amenities, and immediate guest support made it a perfect family vacation."',
    avatar: 'A',
    name: 'Aisha K.',
    country: 'Guest · Saudi Arabia'
  },
  {
    stars: '★★★★★',
    text: '"Consistent monthly payouts and crystal-clear communication. I finally feel like my property is in safe hands without having to micromanage anything. Highly recommended."',
    avatar: 'M',
    name: 'Maxim P.',
    country: 'Property Owner · Russia'
  },
  {
    stars: '★★★★★',
    text: '"A flawlessly executed management service. We loved the welcome basket and the pristine condition of our condo block in Mina Al Arab. They know luxury."',
    avatar: 'E',
    name: 'Elena D.',
    country: 'Property Owner · Italy'
  }
];

export default function Reviews() {
  return (
    <section className="reviews-section" id="reviews">
      <div className="container">
        <div className="reveal" style={{ textAlign: 'center' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Reviews</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>What Guests &amp; Owners Say</h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>Genuine experiences from our valued guests and property owner partners from around the world.</p>
        </div>
        
        <div className="reviews-slider reveal reveal-delay-1">
          <div className="reviews-marquee-track">
            {/* Double the array for seamless infinite looping */}
            {[...reviews, ...reviews].map((r, i) => (
              <div key={i} className="review-card marquee-card">
                <div className="review-stars">{r.stars}</div>
                <p className="review-text">{r.text}</p>
                <div className="review-author">
                  <div className="review-avatar">{r.avatar}</div>
                  <div>
                    <div className="review-name">{r.name}</div>
                    <div className="review-country">{r.country}</div>
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
