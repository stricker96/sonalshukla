const carousel = document.querySelector(".experience-carousel");
const slides = document.querySelectorAll(".experience-slide");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.querySelector(".experience-nav.prev");
const nextBtn = document.querySelector(".experience-nav.next");

let currentSlide = 0;
let isTransitioning = false;

function showSlide(index) {
  if (!carousel || isTransitioning || slides.length === 0) return;

  isTransitioning = true;
  const offset = index * -100;
  carousel.style.transition = "transform 0.6s ease-in-out";
  carousel.style.transform = `translateX(${offset}%)`;

  dots.forEach(dot => dot.classList.remove("active"));
  if (dots[index]) dots[index].classList.add("active");

  currentSlide = index;
  setTimeout(() => {
    isTransitioning = false;
  }, 600);
}

// Navigation: arrows
prevBtn.addEventListener("click", () => {
  const prev = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(prev);
});

nextBtn.addEventListener("click", () => {
  const next = (currentSlide + 1) % slides.length;
  showSlide(next);
});

// Navigation: dots
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
  });
});

// Auto-slide every 10 seconds
setInterval(() => {
  const next = (currentSlide + 1) % slides.length;
  showSlide(next);
}, 10000);

// Initialize first slide
showSlide(currentSlide);
