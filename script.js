// Modern Portfolio JavaScript - 2025

// Hamburger Menu Toggle
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Dark Mode Toggle
function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  } else if (prefersDark) {
    document.documentElement.setAttribute("data-theme", "dark");
  }

  updateThemeIcon();
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateThemeIcon();
}

function updateThemeIcon() {
  const themeToggle = document.querySelector(".theme-toggle");
  if (!themeToggle) return;

  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  themeToggle.innerHTML = isDark ? "&#9728;" : "&#9790;"; // Sun or Moon
  themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
}

// Navbar Scroll Effect
function handleNavScroll() {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
}

// Intersection Observer for Fade-in Animations
function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Add fade-in class to elements
  const animatedElements = document.querySelectorAll(
    ".details-container, .text-container, .section-container, .contact-info-container"
  );

  animatedElements.forEach(el => {
    el.classList.add("fade-in");
    observer.observe(el);
  });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }

      // Close mobile menu if open
      const menu = document.querySelector(".menu-links");
      const icon = document.querySelector(".hamburger-icon");
      if (menu && menu.classList.contains("open")) {
        menu.classList.remove("open");
        icon.classList.remove("open");
      }
    });
  });
}

// Active navigation link highlighting
function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
}

// Typing effect for title (optional enhancement)
function initTypingEffect() {
  const titleElement = document.querySelector(".section__text__p2");
  if (!titleElement) return;

  const text = titleElement.textContent;
  titleElement.textContent = "";
  titleElement.style.borderRight = "2px solid var(--accent-primary)";

  let charIndex = 0;

  function type() {
    if (charIndex < text.length) {
      titleElement.textContent += text.charAt(charIndex);
      charIndex++;
      setTimeout(type, 80);
    } else {
      // Remove cursor after typing completes
      setTimeout(() => {
        titleElement.style.borderRight = "none";
      }, 1000);
    }
  }

  // Start typing after a short delay
  setTimeout(type, 500);
}

// Initialize everything on DOM load
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initScrollAnimations();
  initSmoothScroll();
  initTypingEffect();

  // Add scroll event listeners
  window.addEventListener("scroll", () => {
    handleNavScroll();
    updateActiveNavLink();
  });

  // Listen for system theme changes
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
      document.documentElement.setAttribute("data-theme", e.matches ? "dark" : "light");
      updateThemeIcon();
    }
  });
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  const menu = document.querySelector(".menu-links");
  const hamburger = document.querySelector(".hamburger-menu");

  if (menu && hamburger && !hamburger.contains(e.target) && menu.classList.contains("open")) {
    menu.classList.remove("open");
    document.querySelector(".hamburger-icon").classList.remove("open");
  }
});
