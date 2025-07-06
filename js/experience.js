// js/experience.js
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".experience-carousel");
  const slides = document.querySelectorAll(".experience-slide");
  const prevBtn = document.querySelector(".experience-nav.prev");
  const nextBtn = document.querySelector(".experience-nav.next");
  const dots = document.querySelectorAll(".dot");
  let currentSlide = 0;
  let isTransitioning = false;
  const totalSlides = slides.length;

  function updateCarousel() {
    const offset = -100 * currentSlide;
    carousel.style.transform = `translateX(${offset}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    if (dots[currentSlide]) dots[currentSlide].classList.add("active");
  }

  function showSlide(index) {
    if (index < 0 || index >= totalSlides || isTransitioning) return;
    isTransitioning = true;
    currentSlide = index;
    updateCarousel();
    setTimeout(() => {
      isTransitioning = false;
    }, 500);
  }

  prevBtn.addEventListener("click", () => showSlide(currentSlide - 1));
  nextBtn.addEventListener("click", () => showSlide(currentSlide + 1));

  dots.forEach(dot =>
    dot.addEventListener("click", e => {
      const index = parseInt(e.target.getAttribute("data-slide"));
      showSlide(index);
    })
  );

  setInterval(() => {
    showSlide((currentSlide + 1) % totalSlides);
  }, 6000);
});
