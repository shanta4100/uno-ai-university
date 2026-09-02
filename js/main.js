/* =========================================================
   UNO AI University — Global Scripts
   Handles mobile navigation, active link highlighting,
   contact form validation, and footer year.
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  initMobileNav();
  highlightActiveNavLink();
  setFooterYear();
  initContactForm();
});

/**
 * Toggles the mobile navigation menu open/closed and manages
 * the overlay + accessibility attributes.
 */
function initMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-menu");
  const overlay = document.querySelector(".nav-overlay");

  if (!toggle || !menu) return;

  function closeMenu() {
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    if (overlay) overlay.classList.remove("is-open");
  }

  function toggleMenu() {
    const isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    if (overlay) overlay.classList.toggle("is-open", isOpen);
  }

  toggle.addEventListener("click", toggleMenu);
  if (overlay) overlay.addEventListener("click", closeMenu);

  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeMenu();
  });
}

/**
 * Adds the "active" class to the nav link matching the current page.
 */
function highlightActiveNavLink() {
  const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".nav-menu a[data-page]").forEach(function (link) {
    if (link.getAttribute("data-page") === currentPage) {
      link.classList.add("active");
    }
  });
}

/**
 * Fills in the current year in any element with the "current-year" id.
 */
function setFooterYear() {
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/**
 * Handles lightweight client-side validation and a simulated
 * submission for the contact form (no backend available yet).
 */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const status = document.getElementById("form-status");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = form.querySelector("#name");
    const email = form.querySelector("#email");
    const message = form.querySelector("#message");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      showStatus("Please fill in all required fields.", "error");
      return;
    }

    if (!emailPattern.test(email.value.trim())) {
      showStatus("Please enter a valid email address.", "error");
      return;
    }

    showStatus(
      "Thank you, " +
        name.value.trim() +
        "! Your message has been received. Our admissions team will contact you soon.",
      "success"
    );
    form.reset();
  });

  function showStatus(message, type) {
    if (!status) return;
    status.textContent = message;
    status.className = "form-status " + type;
  }
}
