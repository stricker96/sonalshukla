const dots = document.querySelectorAll(".dot");
let currentSlide = 0;
let isTransitioning = false;

function showSlide(index) {
  const slides = document.querySelectorAll(".experience-slide");
  const offset = index * -100;
  const carousel = document.querySelector(".experience-carousel");

  if (!carousel || slides.length === 0) return;

  if (isTransitioning) return;
  isTransitioning = true;

  carousel.style.transition = "transform 0.6s ease-in-out";
  carousel.style.transform = `translateX(${offset}%)`;
  currentSlide = index;

  dots.forEach(dot => dot.classList.remove("active"));
  if (dots[index]) {
    dots[index].classList.add("active");
  }

  // Unlock after transition
  setTimeout(() => isTransitioning = false, 650);
}

document.querySelector(".experience-nav.next").addEventListener("click", () => {
  const slides = document.querySelectorAll(".experience-slide");
  const next = (currentSlide + 1) % slides.length;
  showSlide(next);
});

document.querySelector(".experience-nav.prev").addEventListener("click", () => {
  const slides = document.querySelectorAll(".experience-slide");
  const prev = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(prev);
});

dots.forEach(dot => {
  dot.addEventListener("click", () => {
    const index = parseInt(dot.getAttribute("data-slide"));
    showSlide(index);
  });
});

// Optional auto-slide (can comment this out if unwanted)
setInterval(() => {
  const slides = document.querySelectorAll(".experience-slide");
  showSlide((currentSlide + 1) % slides.length);
}, 10000);
