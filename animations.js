// animations.js
/**
 * Animate tab transitions with a smooth fade and slide effect.
 * Call animateTabSwitch(oldTab, newTab) when switching tabs.
 */
function animateTabSwitch(oldTab, newTab, duration = 500) {
    if (oldTab) {
        // Fade out and slide up the old tab
        oldTab.style.transition = `opacity ${duration}ms ease, transform ${duration}ms ease`;
        oldTab.style.opacity = 0;
        oldTab.style.transform = "translateY(-20px)";
        setTimeout(() => {
            oldTab.style.display = "none";
            oldTab.style.transition = "";
            oldTab.style.transform = "";
        }, duration);
    }
    if (newTab) {
        // Prepare new tab for animation
        newTab.style.display = "block";
        newTab.style.opacity = 0;
        newTab.style.transform = "translateY(20px)";
        newTab.style.transition = "none";
        // Animate fade in and slide down
        setTimeout(() => {
            newTab.style.transition = `opacity ${duration}ms ease, transform ${duration}ms ease`;
            newTab.style.opacity = 1;
            newTab.style.transform = "translateY(0)";
            setTimeout(() => {
                newTab.style.transition = "";
                newTab.style.transform = "";
            }, duration);
        }, 10);
    }
}
// Easing Function (Ease-Out)
function easeOutQuad(t) {
    return t * (2 - t);
}

// Fade In Animation
function fadeIn(element, duration = 500) {
    element.style.opacity = 0;
    element.style.display = "block";

    let startTime = performance.now();

    function animate(time) {
        let elapsed = time - startTime;
        let progress = Math.min(elapsed / duration, 1);
        element.style.opacity = easeOutQuad(progress);

        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);
}

// Fade Out Animation
function fadeOut(element, duration = 500) {
    element.style.opacity = 1;

    let startTime = performance.now();

    function animate(time) {
        let elapsed = time - startTime;
        let progress = Math.min(elapsed / duration, 1);
        element.style.opacity = 1 - easeOutQuad(progress);

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            element.style.display = "none";
        }
    }

    requestAnimationFrame(animate);
}

// Slide Down Animation
function slideDown(element, duration = 500) {
    element.style.height = "0";
    element.style.overflow = "hidden";
    element.style.display = "block";

    let targetHeight = element.scrollHeight;
    let startTime = performance.now();

    function animate(time) {
        let elapsed = time - startTime;
        let progress = Math.min(elapsed / duration, 1);
        element.style.height = targetHeight * easeOutQuad(progress) + "px";

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            element.style.height = "";
        }
    }

    requestAnimationFrame(animate);
}

// Slide Up Animation
function slideUp(element, duration = 500) {
    element.style.height = element.scrollHeight + "px";
    element.style.overflow = "hidden";

    let startTime = performance.now();

    function animate(time) {
        let elapsed = time - startTime;
        let progress = Math.min(elapsed / duration, 1);
        element.style.height = element.scrollHeight * (1 - easeOutQuad(progress)) + "px";

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            element.style.display = "none";
            element.style.height = "";
        }
    }

    requestAnimationFrame(animate);
}
// animation.js

// Fade in on page load
function fadeIn(selector) {
  const el = document.querySelector(selector);
  if (el) {
    el.style.opacity = 0;
    el.style.transition = "opacity 1s ease-in-out";
    setTimeout(() => {
      el.style.opacity = 1;
    }, 100);
  }
}

// Zoom on hover
function zoomOnHover(selector) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    el.style.transition = "transform 0.3s ease";
    el.addEventListener("mouseenter", () => {
      el.style.transform = "scale(1.05)";
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform = "scale(1)";
    });
  });
}

// Export the functions
export { fadeIn, zoomOnHover };


// Usage Example
// const myElement = document.getElementById("myElement");
// fadeIn(myElement);
// fadeOut(myElement);
// slideDown(myElement);
// slideUp(myElement);

// Ensure all animations use requestAnimationFrame for ultra-smoothness (already implemented above)

// Export all animation utilities in a clean, organized way
export {
    animateTabSwitch,
    fadeIn,
    fadeOut,
    slideDown,
    slideUp,
    zoomOnHover
};