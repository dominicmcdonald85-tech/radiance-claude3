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
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    if (target instanceof HTMLDetailsElement) {
      target.open = true;
    }
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
