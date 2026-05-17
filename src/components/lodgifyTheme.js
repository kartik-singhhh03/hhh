const BUTTON_SELECTOR =
  'button, input[type="button"], input[type="submit"], a, [role="button"]';

const AED_AFTER_AMOUNT_PATTERN =
  /From\s+([0-9][0-9,.\s]*)\s*(?:\u062F\.?\u0625|\u0625\.?\u062F|\u0644|AED)?\s*per night/gi;

const AED_BEFORE_AMOUNT_PATTERN =
  /From\s+(?:\u062F\.?\u0625|\u0625\.?\u062F|\u0644|AED)\s*([0-9][0-9,.\s]*)\s*per night/gi;

const PRICE_LINE_BEFORE_AMOUNT =
  /^From\s+(?:\u062F\.?\u0625|\u0625\.?\u062F|\u0644|AED)\s*([0-9][0-9,.\s]*)\s*per night$/i;

const PRICE_LINE_AFTER_AMOUNT =
  /^From\s+([0-9][0-9,.\s]*)\s*(?:\u062F\.?\u0625|\u0625\.?\u062F|\u0644|AED)?\s*per night$/i;

const LODGIFY_ICON_TEXT_PATTERN = /\bG_People\b/g;

function normalizeLodgifyIconText(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = [];

  while (walker.nextNode()) {
    nodes.push(walker.currentNode);
  }

  nodes.forEach((node) => {
    const nextValue = node.nodeValue?.replace(LODGIFY_ICON_TEXT_PATTERN, "").trim();
    if (typeof nextValue === "string" && nextValue !== node.nodeValue) {
      node.nodeValue = nextValue;
    }
  });
}

function normalizeAedPriceElements(root) {
  root.querySelectorAll("p, span, div").forEach((element) => {
    const text = element.textContent?.replace(/\s+/g, " ").trim();
    if (!text || text.length > 80 || !text.includes("From") || !/per night/i.test(text)) {
      return;
    }

    const beforeMatch = text.match(PRICE_LINE_BEFORE_AMOUNT);
    const afterMatch = text.match(PRICE_LINE_AFTER_AMOUNT);
    const amount = beforeMatch?.[1] ?? afterMatch?.[1];

    if (amount && /[\u062F\u0625]|\u0644/.test(text)) {
      element.textContent = `From AED ${amount.trim()} per night`;
    }
  });
}

function normalizeAedPriceText(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = [];

  while (walker.nextNode()) {
    nodes.push(walker.currentNode);
  }

  nodes.forEach((node) => {
    const nextValue = node.nodeValue
      ?.replace(AED_BEFORE_AMOUNT_PATTERN, (_, amount) => {
        return `From AED ${amount.trim()} per night`;
      })
      .replace(AED_AFTER_AMOUNT_PATTERN, (_, amount) => {
        return `From AED ${amount.trim()} per night`;
      });

    if (nextValue && nextValue !== node.nodeValue) {
      node.nodeValue = nextValue;
    }
  });
}

function themeWidgetButtons(root) {
  root.querySelectorAll(BUTTON_SELECTOR).forEach((button) => {
    const label = `${button.textContent ?? ""} ${button.value ?? ""}`.trim();
    const isBookingControl = /book now|search/i.test(label);

    if (!isBookingControl) return;

    button.style.setProperty("background", "#90cbdc", "important");
    button.style.setProperty("border-color", "#90cbdc", "important");
    button.style.setProperty("color", "#1c3240", "important");
    button.style.setProperty("border-radius", "10px", "important");
    button.style.setProperty("font-weight", "700", "important");
  });
}

export function polishLodgifyWidget(rootId) {
  const root = document.getElementById(rootId);
  if (!root) return () => {};

  const applyTheme = () => {
    normalizeLodgifyIconText(root);
    themeWidgetButtons(root);
    normalizeAedPriceElements(root);
    normalizeAedPriceText(root);
  };

  applyTheme();

  const observer = new MutationObserver(applyTheme);
  observer.observe(root, {
    childList: true,
    subtree: true,
    characterData: true,
  });

  const interval = window.setInterval(applyTheme, 600);
  const timeout = window.setTimeout(() => window.clearInterval(interval), 8000);

  return () => {
    observer.disconnect();
    window.clearInterval(interval);
    window.clearTimeout(timeout);
  };
}
