const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("#mobile-menu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    menu.hidden = isOpen;
    document.body.classList.toggle("menu-open", !isOpen);
  });

  menu.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      toggle.setAttribute("aria-expanded", "false");
      menu.hidden = true;
      document.body.classList.remove("menu-open");
    }
  });
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");

    // "Back to top" — bypass scroll-padding-top offset
    if (href === "#top") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const target = document.querySelector(href);
    if (!target) return;
    event.preventDefault();
    if (target instanceof HTMLDetailsElement) {
      target.open = true;
    }
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Cookie consent banner
(function () {
  const STORAGE_KEY = "radiance_cookie_consent";
  const banner = document.getElementById("cookie-banner");
  if (!banner) return;

  let stored = null;
  try {
    stored = localStorage.getItem(STORAGE_KEY);
  } catch (e) {
    // localStorage unavailable (private browsing, etc.) — show banner this visit
  }

  if (!stored) {
    banner.hidden = false;
  }

  const dismiss = (choice) => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ choice, timestamp: new Date().toISOString() })
      );
    } catch (e) {
      // storage failed; still hide for this visit
    }
    banner.hidden = true;
  };

  const accept = banner.querySelector(".cookie-accept");
  const reject = banner.querySelector(".cookie-reject");
  if (accept) accept.addEventListener("click", () => dismiss("accepted"));
  if (reject) reject.addEventListener("click", () => dismiss("rejected"));
})();
