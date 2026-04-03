import { useEffect } from "react";

/* ─────────────────────────────────────────────
   LODGIFY SEARCH BAR
   Script is loaded globally once; the widget
   container is rendered per-component instance.
   Brand colours are applied via CSS custom props
   scoped to the host element.
───────────────────────────────────────────── */

const SCRIPT_SRC =
  "https://app.lodgify.com/portable-search-bar/stable/renderPortableSearchBar.js";

const SCRIPT_ID = "lodgify-psb-script";

function loadSearchBarScript() {
  if (document.getElementById(SCRIPT_ID)) return; // already injected

  const script = document.createElement("script");
  script.id = SCRIPT_ID;
  script.src = SCRIPT_SRC;
  script.defer = true;
  script.async = true;
  document.body.appendChild(script);
}

export default function LodgifySearchBar() {
  useEffect(() => {
    // Only runs client-side (safe for SSR / Vite SSG builds)
    loadSearchBarScript();
    // No cleanup — script persists globally for reuse across pages
  }, []);

  return (
    <section className="lodgify-search-section" aria-label="Search availability">
      <div className="container">
        <div className="lodgify-search-inner">
          {/* Section heading keeps SEO content above the fold */}
          <div className="lodgify-search-heading reveal">
            <div className="section-label">Check Availability</div>
            <h2 className="lodgify-search-title">
              Find Your Perfect Dates
            </h2>
          </div>

          {/* Lodgify mounts its widget into this div */}
          <div className="lodgify-widget-host lodgify-search-host">
            <div
              id="lodgify-search-bar"
              data-website-id="625170"
              data-language-id="1"
              data-currency="AED"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
