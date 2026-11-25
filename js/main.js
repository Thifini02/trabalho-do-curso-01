const revealElements = document.querySelectorAll(
  ".section-heading, .menu-section, .order, .info-section"
);

revealElements.forEach((element, index) => {
  element.classList.add("reveal");
  element.style.transitionDelay = `${Math.min(index * 70, 280)}ms`;
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
    rootMargin: "0px 0px -40px",
  }
);

revealElements.forEach((element) => observer.observe(element));

const animatedTapElements = document.querySelectorAll(
  ".menu-section, .items li, .contact a, .order-button, .whatsapp-float"
);

if ("ontouchstart" in window) {
  animatedTapElements.forEach((element) => {
    element.addEventListener("touchstart", () => {
      element.classList.add("is-tapped");
    }, { passive: true });

    element.addEventListener("touchend", () => {
      window.setTimeout(() => element.classList.remove("is-tapped"), 180);
    }, { passive: true });

    element.addEventListener("touchcancel", () => {
      element.classList.remove("is-tapped");
    }, { passive: true });
  });
}