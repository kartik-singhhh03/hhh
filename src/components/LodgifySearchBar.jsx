import { useEffect } from "react";
import { polishLodgifyWidget } from "./lodgifyTheme";
import { useDeferredLodgifyScript } from "../lib/deferredLodgifyScript";

const SCRIPT_SRC =
  "https://app.lodgify.com/portable-search-bar/stable/renderPortableSearchBar.js";

const SCRIPT_ID = "lodgify-psb-script";

export default function LodgifySearchBar() {
  useDeferredLodgifyScript({
    scriptId: SCRIPT_ID,
    scriptSrc: SCRIPT_SRC,
    sectionId: "lodgify-search",
    rootMargin: "600px",
    idleTimeout: 4000,
  });

  useEffect(() => polishLodgifyWidget("lodgify-search-bar"), []);

  return (
    <section
      className="lodgify-search-section"
      id="lodgify-search"
      aria-label="Search availability"
    >
      <div className="container">
        <div className="lodgify-search-card reveal">
          <div className="lodgify-search-copy">
            <div className="section-label">Check Availability</div>
            <h2>Find Your Perfect Dates</h2>
            <p>
              Search live availability for the Hayat Island apartment and move
              straight into the booking flow.
            </p>
          </div>

          <div className="lodgify-widget-host lodgify-search-host">
            <div
              id="lodgify-search-bar"
              data-website-id="625170"
              data-language-code="en"
              data-currency="AED"
              data-currency-code="AED"
              data-search-page-url="https://www.holidayhomehost.ae/en/all-properties"
              data-dates-check-in-label="Check-in"
              data-dates-check-out-label="Check-out"
              data-guests-counter-label="Guests"
              data-guests-input-singular-label="{{NumberOfGuests}} guest"
              data-guests-input-plural-label="{{NumberOfGuests}} guests"
              data-location-input-label="Location"
              data-search-button-label="Search"
              data-new-tab="true"
              data-version="stable"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
