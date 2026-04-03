import { useEffect } from "react";

/* ─────────────────────────────────────────────
   LODGIFY BOOKING BOX
   Separate script URL from the search bar.
   Same singleton-loading pattern — injected once
   globally; never duplicated on re-renders.
───────────────────────────────────────────── */

const SCRIPT_SRC =
  "https://app.lodgify.com/portable-booking-box/stable/renderPortableBookingBox.js";

const SCRIPT_ID = "lodgify-bnb-script";

function loadBookingBoxScript() {
  if (document.getElementById(SCRIPT_ID)) return; // already injected

  const script = document.createElement("script");
  script.id = SCRIPT_ID;
  script.src = SCRIPT_SRC;
  script.defer = true;
  script.async = true;
  document.body.appendChild(script);
}

export default function LodgifyBookingBox() {
  useEffect(() => {
    // Only runs client-side
    loadBookingBoxScript();
    // No cleanup — script persists globally for reuse across pages
  }, []);

  return (
    <section className="lodgify-booking-section" aria-label="Book now">
      <div className="container">
        <div className="lodgify-booking-inner">
          {/* Section heading */}
          <div className="lodgify-booking-heading reveal">
            <div className="section-label">Instant Booking</div>
            <h2 className="lodgify-booking-title">
              Book Your Stay
            </h2>
            <p className="section-desc">
              Select your dates and secure your luxury sea-view retreat on
              Hayat Island, Ras Al Khaimah.
            </p>
          </div>

          {/* Lodgify mounts its widget into this div */}
          <div className="lodgify-widget-host lodgify-booking-host">
            <div
              id="lodgify-book-now-box"
              data-website-id="625170"
              data-rental-id="761286"
              data-slug="holiday-home-host"
              data-language-id="1"
              data-currency="AED"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
