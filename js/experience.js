// EXPERIENCE SLIDER LOGIC

const carousel = document.querySelector(".experience-carousel");
const slides = document.querySelectorAll(".experience-slide");
const prevButton = document.querySelector(".experience-nav.prev");
const nextButton = document.querySelector(".experience-nav.next");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;
let isTransitioning = false;
const totalSlides = slides.length;

// Show selected slide
function showSlide(index) {
  if (isTransitioning) return;
  isTransitioning = true;

  currentSlide = (index + totalSlides) % totalSlides;
  const offset = currentSlide * -100;
  carousel.style.transform = `translateX(${offset}%)`;

  dots.forEach(dot => dot.classList.remove("active"));
  if (dots[currentSlide]) dots[currentSlide].classList.add("active");

  setTimeout(() => {
    isTransitioning = false;
  }, 600);
}

// Navigate arrows
prevButton.addEventListener("click", () => showSlide(currentSlide - 1));
nextButton.addEventListener("click", () => showSlide(currentSlide + 1));

// Dots navigation
dots.forEach(dot => {
  dot.addEventListener("click", () => {
    const slideIndex = parseInt(dot.getAttribute("data-slide"));
    showSlide(slideIndex);
  });
});

// Auto-slide every 6 seconds
setInterval(() => {
  showSlide(currentSlide + 1);
}, 6000);

// Init
showSlide(currentSlide);
