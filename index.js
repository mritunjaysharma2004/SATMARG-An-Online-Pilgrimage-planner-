// Ensure these files exist at the specified paths and export the correct functions
import { initFadeIn } from "./animations/fadeIn.js";
import { drawRoute } from "./animations/drawRoute.js";
import { loadPilgrimLottie } from "./animations/lottie.js";

document.addEventListener("DOMContentLoaded", () => {
  try {
    // Initialize animations
    initFadeIn();
    drawRoute();
    loadPilgrimLottie();
  } catch (error) {
    console.error("Error initializing animations:", error);
  }

  // Handle navigation menu toggle
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("is-active");
      navToggle.classList.toggle("is-active");
    });
  }
  import { fadeIn, zoomOnHover } from "./animation.js";

// Fade in the homepage title
fadeIn("#homeTitle");

// Zoom animation on cards
zoomOnHover(".location-card");


  // Handle smooth scrolling for anchor links
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
  smoothScrollLinks.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const targetId = link.getAttribute("href")?.substring(1);
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        } else {
          console.warn(`Target element with ID "${targetId}" not found.`);
        }
      } else {
        console.warn("Invalid href attribute in anchor link.");
      }
    });
  });
});