function toggleStyle() {
    var element = document.getElementById("line1");
    var element2 = document.getElementById("line2");
    var element3 = document.getElementById("catalog");
    var element4 = document.getElementById("text_catalog");
    var element5 = document.getElementById("logo");

    element.classList.toggle("changed-style");
    element2.classList.toggle("changed-style");
    element3.classList.toggle("changed-style");
    element4.classList.toggle("changed-style");
    element5.classList.toggle("changed-style");
  }






document.addEventListener("DOMContentLoaded", function() {
    const scrollButton = document.getElementById("scrollButton");
    const targetSection = document.getElementById("targetSection");
  
    scrollButton.addEventListener("click", function() {
      smoothScroll(targetSection);
    });
  
    function smoothScroll(target) {
      const targetPosition = target.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1000; // Duration of the scroll animation in milliseconds
      let start = null;
  
      function animationStep(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
        if (progress < duration) {
          window.requestAnimationFrame(animationStep);
        }
      }
  
      function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
      }
  
      window.requestAnimationFrame(animationStep);
    }
  });
  