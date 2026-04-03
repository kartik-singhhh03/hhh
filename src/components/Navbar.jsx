import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`nav ${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}
      id="mainNav"
    >
      <Link to="/" className="nav-logo" onClick={closeMenu}>
        <span className="logo-main">HHH</span>
        <span className="logo-sub">Holiday Home Host</span>
      </Link>
      <ul className="nav-links" id="navLinks">
        <li>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="/property-owners" onClick={closeMenu}>
            For Owners
          </Link>
        </li>
        <li>
          <Link to="/services" onClick={closeMenu}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/commission" onClick={closeMenu}>
            Commission
          </Link>
        </li>
        <li>
          <Link to="/how-it-works" onClick={closeMenu}>
            How It Works
          </Link>
        </li>
        <li>
          <Link to="/partnerships" onClick={closeMenu}>
            Partnerships
          </Link>
        </li>
        <li>
          <a
            href="#contact"
            className="nav-cta"
            onClick={(e) => {
              e.preventDefault();
              closeMenu();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            List Your Property
          </a>
        </li>
      </ul>
      <button
        className="nav-hamburger"
        id="navHamburger"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}
