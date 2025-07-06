
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
  carousel.style.transition = "transform 0.5s ease";
  carousel.style.transform = `translateX(${offset}%)`;

  dots.forEach(dot => dot.classList.remove("active"));
  if (dots[index]) dots[index].classList.add("active");

  setTimeout(() => {
    isTransitioning = false;
  }, 500);
}

document.querySelector(".prev-btn").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + dots.length) % dots.length;
  showSlide(currentSlide);
});

document.querySelector(".next-btn").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % dots.length;
  showSlide(currentSlide);
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

showSlide(currentSlide);
