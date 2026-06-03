import { useEffect } from "react";
import ContactForm from "../components/ContactForm";
import "./Contact.css";

const CONTACT_DETAILS = [
  {
    icon: "place",
    label: "Address",
    content: (
      <>
        Hayat Island, Mina Al Arab
        <br />
        Ras Al Khaimah, United Arab Emirates
      </>
    ),
  },
  {
    icon: "mail",
    label: "Email",
    content: (
      <a href="mailto:hello@holidayhomehost.ae">hello@holidayhomehost.ae</a>
    ),
  },
  {
    icon: "phone",
    label: "WhatsApp / Phone",
    content: <a href="tel:+971501234567">+971 50 123 4567</a>,
  },
  {
    icon: "schedule",
    label: "Response Time",
    content: "We reply within 2 hours",
  },
  {
    icon: "photo_camera",
    label: "Instagram",
    content: (
      <a
        href="https://www.instagram.com/holidayhomehost"
        target="_blank"
        rel="noopener noreferrer"
      >
        @holidayhomehost
      </a>
    ),
  },
];

export default function Contact() {
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
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="contact-page">
      <section className="contact-page-hero" aria-labelledby="contact-page-title">
        <div className="container">
          <div className="section-label">Contact Us</div>
          <h1 id="contact-page-title">Get In Touch With Holiday Home Host</h1>
          <p>
            Whether you&apos;re looking to book a luxury stay, list your property,
            or discuss a partnership, our team is here to help.
          </p>
        </div>
      </section>

      <section className="contact-page-body">
        <div className="container">
          <div className="contact-page-grid">
            <div className="contact-page-details reveal">
              <h2 className="contact-page-details-title">Contact Details</h2>
              <p className="contact-page-details-desc">
                Reach our team directly for guest bookings, owner onboarding, or
                partnership enquiries across Ras Al Khaimah.
              </p>
              {CONTACT_DETAILS.map((item) => (
                <div className="contact-detail" key={item.label}>
                  <div className="contact-detail-icon">
                    <span className="material-symbols-outlined" aria-hidden="true">
                      {item.icon}
                    </span>
                  </div>
                  <div className="contact-detail-text">
                    <strong>{item.label}</strong>
                    {item.content}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-page-form-wrap reveal reveal-delay-1">
              <h2 className="contact-page-form-title">Send Us a Message</h2>
              <p className="contact-page-form-desc">
                Complete the form below and we&apos;ll respond within two hours.
              </p>
              <ContactForm formId="contactPageForm" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
