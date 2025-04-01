"use strict";

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

/*
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = () => navbar.classList.toggle("active");

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = () => navbar.classList.remove("active");

addEventOnElem(navLinks, "click", closeNavbar);

/**
 * header & back top btn active when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
};

addEventOnElem(window, "scroll", headerActive);

/**
 * filter function
 */

const filterBtns = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter]");

let lastClickedFilterBtn = filterBtns[0];

const filter = function () {
  lastClickedFilterBtn.classList.remove("active");
  this.classList.add("active");
  lastClickedFilterBtn = this;

  for (let i = 0; i < filterItems.length; i++) {
    if (
      this.dataset.filterBtn === filterItems[i].dataset.filter ||
      this.dataset.filterBtn === "all"
    ) {
      filterItems[i].style.display = "block";
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].style.display = "none";
      filterItems[i].classList.remove("active");
    }
  }
};

addEventOnElem(filterBtns, "click", filter);

//////////////////// scroll reveal ///////////////////////

ScrollReveal().reveal(".card", {
  interval: 200,
  origin: "bottom",
  distance: "50px",
  duration: 300,
  delay: 200,
  easing: "ease-in-out",
});

ScrollReveal().reveal(".pricing-card", {
  interval: 200,
  origin: "bottom",
  distance: "50px",
  duration: 900,
  delay: 200,
});

ScrollReveal().reveal(".services-wrapper h1, .services-wrapper p", {
  interval: 200,
  origin: "bottom",
  distance: "50px",
  duration: 900,
  delay: 200,
});

ScrollReveal().reveal(".pricing h2, .pricing p", {
  interval: 200,
  origin: "bottom",
  distance: "50px",
  duration: 900,
  delay: 200,
});

ScrollReveal().reveal(".hero-title, .hero-text, .btn, .navbar-item, .logo", {
  interval: 200,
  origin: "bottom",
  distance: "50px",
  duration: 220,
  delay: 150,
});

////////////////////////// contato //////////////////////////////

// Simple scroll

document.addEventListener("DOMContentLoaded", function () {
  // Configure animation properties
  const animationConfig = {
    distance: "50px",
    origin: "bottom",
    duration: 200,
    delay: 100,
    easing: "ease-in-out",
    reset: true,
  };

  // Animate elements sequentially with proper selectors
  const elements = [
    ".contact-header",
    ".contact-cards .contact-card:nth-child(1)",
    ".contact-cards .contact-card:nth-child(2)",
    ".contact-cards .contact-card:nth-child(3)",
    ".contact-cards .contact-card:nth-child(4)",
    ".whatsapp-card",
  ];

  elements.forEach((selector, index) => {
    const element = document.querySelector(selector);
    if (element) {
      element.style.opacity = "0";
      element.style.transform = `translateY(${animationConfig.distance})`;
      element.style.transition = `
        opacity ${animationConfig.duration}ms ${animationConfig.easing} ${
        animationConfig.delay + index * 100
      }ms,
        transform ${animationConfig.duration}ms ${animationConfig.easing} ${
        animationConfig.delay + index * 100
      }ms
      `;
    }
  });

  // Check scroll position and animate
  function checkScroll() {
    elements.forEach(selector => {
      const element = document.querySelector(selector);
      if (element && isElementInViewport(element)) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    });
  }

  // Helper function to check if element is in viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <=
      (window.innerHeight || document.documentElement.clientHeight) * 0.75
    );
  }

  // Initial check
  checkScroll();

  // Listen for scroll events
  window.addEventListener("scroll", checkScroll);
});
