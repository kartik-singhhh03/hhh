import { useEffect } from "react";
import { polishLodgifyWidget } from "./lodgifyTheme";
import { useDeferredLodgifyScript } from "../lib/deferredLodgifyScript";

const SCRIPT_SRC =
  "https://app.lodgify.com/book-now-box/stable/renderBookNowBox.js";

const SCRIPT_ID = "lodgify-bnb-script";

export default function LodgifyBookingBox() {
  useDeferredLodgifyScript({
    scriptId: SCRIPT_ID,
    scriptSrc: SCRIPT_SRC,
    sectionId: "lodgify-booking",
    rootMargin: "300px",
    idleTimeout: 12000,
  });

  useEffect(() => polishLodgifyWidget("lodgify-book-now-box"), []);

  return (
    <section
      className="lodgify-booking-section"
      id="lodgify-booking"
      aria-label="Book your stay"
    >
      <div className="container">
        <div className="lodgify-booking-inner">
          <div className="lodgify-booking-copy reveal">
            <div className="section-label">Instant Booking</div>
            <h2>Reserve the Hayat Island Apartment</h2>
            <p>
              Use the live Lodgify booking widget to choose dates, confirm the
              price, and continue to checkout.
            </p>
          </div>

          <div className="lodgify-booking-stack">
            <div className="lodgify-widget-host lodgify-booking-host reveal reveal-delay-1">
              <div
                id="lodgify-book-now-box"
              data-website-id="625170"
              data-rental-id="761286"
              data-slug="holiday-home-host"
              data-language-code="en"
              data-currency="AED"
              data-currency-code="AED"
              data-new-tab="true"
              data-version="stable"
              data-has-guests-breakdown
              data-check-in-label="Check-in"
              data-check-out-label="Check-out"
              data-guests-label="Guests"
              data-guests-singular-label="{{NumberOfGuests}} guest"
              data-guests-plural-label="{{NumberOfGuests}} guests"
              data-location-input-label="Location"
              data-total-price-label="Total price:"
              data-select-dates-to-see-price-label="Select dates to see total price"
              data-minimum-price-per-night-first-label="From"
              data-minimum-price-per-night-second-label="per night"
              data-book-button-label="Book Now"
              data-guests-breakdown-label="Guests"
              data-adults-label='{"one":"adult","other":"adults"}'
              data-adults-description="Ages {minAge} or above"
              data-children-label='{"one":"child","other":"children"}'
              data-children-description="Ages {minAge}-{maxAge}"
              data-children-not-allowed-label="Not suitable for children"
              data-infants-label='{"one":"infant","other":"infants"}'
              data-infants-description="Under {maxAge}"
              data-infants-not-allowed-label="Not suitable for infants"
              data-pets-label='{"one":"pet","other":"pets"}'
              data-pets-not-allowed-label="Not allowed"
              data-done-label="Done"
            />
            </div>
            <p className="lodgify-booking-note">Rates are shown in AED per night.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
