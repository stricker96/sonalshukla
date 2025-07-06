const carousel = document.getElementById("experienceCarousel");
const slides = document.querySelectorAll(".experience-slide");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.querySelector(".experience-nav.prev");
const nextBtn = document.querySelector(".experience-nav.next");

let currentSlide = 0;
const totalSlides = slides.length;

function showSlide(index) {
  if (index < 0) index = totalSlides - 1;
  if (index >= totalSlides) index = 0;
  carousel.style.transform = `translateX(-${index * 100}%)`;
  currentSlide = index;

  dots.forEach((dot, i) =>
    dot.classList.toggle("active", i === index)
  );
}

nextBtn.addEventListener("click", () => showSlide(currentSlide + 1));
prevBtn.addEventListener("click", () => showSlide(currentSlide - 1));
dots.forEach((dot, i) => dot.addEventListener("click", () => showSlide(i)));

setInterval(() => showSlide(currentSlide + 1), 6000);
