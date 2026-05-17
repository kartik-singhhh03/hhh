import { useState } from "react";

export default function Contact() {
  const [btnText, setBtnText] = useState("Send Enquiry");
  const [disabled, setDisabled] = useState(false);

  const showToast = (message, duration = 4000) => {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.textContent = message;
    toast.style.transform = "translateY(0)";
    toast.style.opacity = "1";
    setTimeout(() => {
      toast.style.transform = "translateY(80px)";
      toast.style.opacity = "0";
    }, duration);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBtnText("Sending...");
    setDisabled(true);

    setTimeout(() => {
      showToast("Enquiry sent! We'll get back to you within 2 hours.");
      e.target.reset();
      setBtnText("Send Enquiry");
      setDisabled(false);
    }, 1400);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="reveal">
          <div className="section-label">Get In Touch</div>
          <h2 className="section-title">Partner With Us</h2>
          <p className="section-desc">
            Ready to list your property or want to learn more about our
            management services? Reach out and our team will respond within 2
            hours.
          </p>
        </div>
        <div className="contact-wrap">
          <div className="reveal reveal-delay-1">
            <div className="contact-detail">
              <div className="contact-detail-icon">
                <span className="material-symbols-outlined">place</span>
              </div>
              <div className="contact-detail-text">
                <strong>Address</strong>Hayat Island, Mina Al Arab
                <br />
                Ras Al Khaimah, United Arab Emirates
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-icon">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div className="contact-detail-text">
                <strong>Email</strong>
                <a href="mailto:hello@holidayhomehost.ae">
                  hello@holidayhomehost.ae
                </a>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-icon">
                <span className="material-symbols-outlined">phone</span>
              </div>
              <div className="contact-detail-text">
                <strong>WhatsApp / Phone</strong>
                <a href="tel:+971501234567">+971 50 123 4567</a>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-icon">
                <span className="material-symbols-outlined">schedule</span>
              </div>
              <div className="contact-detail-text">
                <strong>Response Time</strong>We reply within 2 hours
              </div>
            </div>
          </div>

          <form
            className="contact-form reveal reveal-delay-2"
            id="contactForm"
            noValidate
            onSubmit={handleSubmit}
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="ownerName">Full Name</label>
                <input
                  type="text"
                  id="ownerName"
                  name="name"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="ownerEmail">Email Address</label>
                <input
                  type="email"
                  id="ownerEmail"
                  name="email"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="ownerPhone">Phone / WhatsApp</label>
                <input
                  type="tel"
                  id="ownerPhone"
                  name="phone"
                  placeholder="+971 50 000 0000"
                />
              </div>
              <div className="form-group">
                <label htmlFor="ownerPropertyType">Property Type</label>
                <select id="ownerPropertyType" name="propertyType">
                  <option value="">Select property type</option>
                  <option value="studio">Studio Apartment</option>
                  <option value="1bed">1 Bedroom Apartment</option>
                  <option value="2bed">2 Bedroom Apartment</option>
                  <option value="3bed">3+ Bedroom Apartment</option>
                  <option value="villa">Villa / Townhouse</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="ownerLocation">Property Location</label>
              <input
                type="text"
                id="ownerLocation"
                name="location"
                placeholder="e.g. Hayat Island, Mina Al Arab, RAK"
              />
            </div>
            <div className="form-group">
              <label htmlFor="ownerMessage">Tell us about your property</label>
              <textarea
                id="ownerMessage"
                name="message"
                rows="4"
                placeholder="Any questions about our management services, commission structure, or getting started..."
              ></textarea>
            </div>
            <div className="form-submit">
              <button
                type="submit"
                className="btn-primary-dark"
                id="contactSubmitBtn"
                style={{ width: "100%", justifyContent: "center" }}
                disabled={disabled}
              >
                <span className="material-symbols-outlined">send</span>
                {btnText}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
