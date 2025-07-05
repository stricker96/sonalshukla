// experience.js
const dots = document.querySelectorAll(".dot");
const carousel = document.querySelector(".experience-carousel");
const slides = document.querySelectorAll(".experience-slide");
const prevBtn = document.querySelector(".experience-nav.prev");
const nextBtn = document.querySelector(".experience-nav.next");

let currentSlide = 0;
let isTransitioning = false;

function showSlide(index) {
  if (isTransitioning) return;
  if (!carousel) return;

  isTransitioning = true;
  const offset = index * -100;
  carousel.style.transform = `translateX(${offset}%)`;
  currentSlide = index;

  dots.forEach(dot => dot.classList.remove("active"));
  if (dots[index]) dots[index].classList.add("active");

  setTimeout(() => isTransitioning = false, 650);
}

prevBtn.addEventListener("click", () => {
  const prev = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(prev);
});

nextBtn.addEventListener("click", () => {
  const next = (currentSlide + 1) % slides.length;
  showSlide(next);
});

dots.forEach(dot => {
  dot.addEventListener("click", () => {
    const index = parseInt(dot.getAttribute("data-slide"));
    showSlide(index);
  });
});

// Optional auto-slide
setInterval(() => {
  showSlide((currentSlide + 1) % slides.length);
}, 10000);
