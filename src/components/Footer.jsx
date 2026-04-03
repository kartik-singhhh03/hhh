import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo-main">HHH</div>
            <div className="logo-sub">Holiday Home Host</div>
            <p>Premium short-term rental management in Ras Al Khaimah — maximising owner returns and delivering exceptional guest experiences.</p>
            <div className="footer-social">
              <a href="#" className="social-icon" aria-label="Instagram"><span className="material-symbols-outlined">photo_camera</span></a>
              <a href="#" className="social-icon" aria-label="WhatsApp"><span className="material-symbols-outlined">chat_bubble</span></a>
              <a href="#" className="social-icon" aria-label="LinkedIn"><span className="material-symbols-outlined">work</span></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About HHH</Link></li>
              <li><Link to="/services">Our Services</Link></li>
              <li><Link to="/commission">Commission</Link></li>
              <li><Link to="/#contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Owners &amp; Partners</h4>
            <ul>
              <li><Link to="/property-owners">For Property Owners</Link></li>
              <li><Link to="/commission">Commission Structure</Link></li>
              <li><Link to="/how-it-works">How It Works</Link></li>
              <li><Link to="/roi-calculator">ROI Calculator</Link></li>
              <li><Link to="/partnerships">Partnerships</Link></li>
              <li><Link to="/real-estate-agencies">Real Estate Agencies</Link></li>
              <li><Link to="/partnership-agreements">Agreements</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:hello@holidayhomehost.ae">hello@holidayhomehost.ae</a></li>
              <li><a href="tel:+971501234567">+971 50 123 4567</a></li>
              <li>Hayat Island, Mina Al Arab</li>
              <li>Ras Al Khaimah, UAE</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 Holiday Home Host. All rights reserved.</span>
          <span><a href="#">Privacy Policy</a> &nbsp;·&nbsp; <a href="#">Terms of Service</a> &nbsp;·&nbsp; <a href="#">RAKTDA Licensed</a></span>
        </div>
      </div>
    </footer>
  );
}
