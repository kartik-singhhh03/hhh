import { useEffect } from "react";

export function loadLodgifyScript(scriptId, scriptSrc) {
  const existing = document.getElementById(scriptId);

  if (existing?.dataset.loaded === "true") {
    existing.remove();
  } else if (existing) {
    return;
  }

  const script = document.createElement("script");
  script.id = scriptId;
  script.src = scriptSrc;
  script.defer = true;
  script.async = true;
  script.dataset.loaded = "false";
  script.onload = () => {
    script.dataset.loaded = "true";
  };

  document.body.appendChild(script);
}

export function useDeferredLodgifyScript({
  scriptId,
  scriptSrc,
  sectionId,
  rootMargin = "400px",
  idleTimeout = 3500,
}) {
  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (!section) return undefined;

    let loaded = false;
    const load = () => {
      if (loaded) return;
      loaded = true;
      loadLodgifyScript(scriptId, scriptSrc);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          load();
        }
      },
      { rootMargin },
    );

    observer.observe(section);

    const idleHandle = window.requestIdleCallback
      ? window.requestIdleCallback(() => load(), { timeout: idleTimeout })
      : window.setTimeout(load, idleTimeout);

    const onHashChange = () => {
      if (window.location.hash === `#${sectionId}`) {
        load();
      }
    };

    const onDocumentClick = (event) => {
      const target = event.target.closest(`a[href="#${sectionId}"]`);
      if (target) {
        load();
      }
    };

    window.addEventListener("hashchange", onHashChange);
    document.addEventListener("click", onDocumentClick, true);

    if (window.location.hash === `#${sectionId}`) {
      load();
    }

    return () => {
      observer.disconnect();
      if (window.requestIdleCallback) {
        window.cancelIdleCallback(idleHandle);
      } else {
        window.clearTimeout(idleHandle);
      }
      window.removeEventListener("hashchange", onHashChange);
      document.removeEventListener("click", onDocumentClick, true);
    };
  }, [scriptId, scriptSrc, sectionId, rootMargin, idleTimeout]);
}
