// ================================================
// ÖMER AYAR - PORTFOLIO SCRIPTS
// ================================================

// Hamburger Menu Toggle
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Theme Toggle
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateThemeIcon();
}

function updateThemeIcon() {
  const themeIcons = document.querySelectorAll(".theme-icon");
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";

  themeIcons.forEach(icon => {
    icon.textContent = isDark ? "☀" : "☾";
  });
}

function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Default to dark mode unless user explicitly chose light
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  } else if (!prefersDark) {
    document.documentElement.setAttribute("data-theme", "light");
  }
  // Dark mode is already set as default in HTML

  updateThemeIcon();
}

// Scroll Animations with Intersection Observer
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

  // Elements to animate
  const animatedElements = document.querySelectorAll(
    ".tech-category, .project-card, .timeline-item, .contact-card, .about-content, .qualification-card"
  );

  animatedElements.forEach(el => {
    el.classList.add("fade-in");
    observer.observe(el);
  });
}

// Smooth Scroll for Anchor Links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const href = this.getAttribute("href");
      if (href === "#") return;

      e.preventDefault();
      const target = document.querySelector(href);

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

// Active Navigation Link Highlighting
function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a, .menu-links a");

  let currentSection = "";
  const scrollPosition = window.scrollY + 150;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
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

// Navbar Background on Scroll
function handleNavScroll() {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
}

// Close mobile menu on outside click
function initMenuCloseOnOutsideClick() {
  document.addEventListener("click", (e) => {
    const menu = document.querySelector(".menu-links");
    const hamburger = document.querySelector(".hamburger-menu, .nav-actions-mobile");

    if (menu && hamburger && !hamburger.contains(e.target) && menu.classList.contains("open")) {
      menu.classList.remove("open");
      document.querySelector(".hamburger-icon").classList.remove("open");
    }
  });
}

// Typing Effect for Hero (Optional)
function initTypingEffect() {
  const element = document.querySelector(".title-role");
  if (!element) return;

  // Store original text
  const originalText = element.innerHTML;

  // Only run on larger screens
  if (window.innerWidth < 768) return;

  element.innerHTML = "";
  element.style.borderRight = "2px solid var(--accent-primary)";

  let i = 0;
  const text = element.textContent || originalText.replace(/<[^>]*>/g, '');

  function type() {
    if (i < originalText.length) {
      element.innerHTML = originalText.substring(0, i + 1);
      i++;
      setTimeout(type, 50);
    } else {
      element.style.borderRight = "none";
    }
  }

  setTimeout(type, 800);
}

// Initialize Everything
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initScrollAnimations();
  initSmoothScroll();
  initMenuCloseOnOutsideClick();

  // Scroll event listeners (throttled)
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleNavScroll();
        updateActiveNavLink();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Listen for system theme changes
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
      document.documentElement.setAttribute("data-theme", e.matches ? "dark" : "light");
      updateThemeIcon();
    }
  });
});

// Add active class style
const style = document.createElement('style');
style.textContent = `
  .nav-links a.active,
  .menu-links a.active {
    color: var(--accent-primary) !important;
  }
  .nav-links a.active::after {
    width: 100%;
  }
`;
document.head.appendChild(style);
