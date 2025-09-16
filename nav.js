// === NAVIGATION LOGIC ===

// 1. Desktop dropdown toggle
const desktopDropdownToggle = document.getElementById("desktop-dropdown-toggle");
const desktopDropdownMenu = document.getElementById("desktop-dropdown-menu");

desktopDropdownToggle?.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent bubbling to document click
  desktopDropdownMenu.classList.toggle("hidden");
});

// 2. Close desktop dropdown if clicked outside
document.addEventListener("click", (e) => {
  if (
    !desktopDropdownToggle?.contains(e.target) &&
    !desktopDropdownMenu?.contains(e.target)
  ) {
    desktopDropdownMenu?.classList.add("hidden");
  }
});

// 3. Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn?.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// 4. Mobile dropdown toggle
const dropdownToggle = document.getElementById("dropdown-toggle");
const dropdownMenu = document.getElementById("dropdown-menu");

dropdownToggle?.addEventListener("click", (e) => {
  e.preventDefault();
  dropdownMenu.classList.toggle("hidden");
});

// === ACTIVE LINK HIGHLIGHTING ===

document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop();

  // Only select navigation links (with .nav-link class)
  const navLinks = document.querySelectorAll("a.nav-link[href]");

  navLinks.forEach(link => {
    const linkHref = link.getAttribute("href");

    if (linkHref && !linkHref.startsWith("http") && !linkHref.startsWith("#")) {
      if (linkHref === currentPage || (linkHref === "index.html" && currentPage === "")) {
        link.classList.add("text-yellow-500");
        link.classList.remove("text-blue-900");
      } else {
        link.classList.remove("text-yellow-500");
        link.classList.add("text-blue-900");
      }
    }
  });
});
