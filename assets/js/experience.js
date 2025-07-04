// Experience slider logic
const slides = document.querySelectorAll(".experience-slide");
const dots = document.querySelectorAll(".dot");
let currentSlide = 0;

function showSlide(index) {
  const offset = index * -100; // Slide by 100% per slide
  document.querySelector(".experience-carousel").style.transform = `translateX(${offset}%)`;
  currentSlide = index;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

document.querySelector(".experience-nav.next").addEventListener("click", () => {
  const next = (currentSlide + 1) % slides.length;
  showSlide(next);
});

document.querySelector(".experience-nav.prev").addEventListener("click", () => {
  const prev = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(prev);
});

dots.forEach(dot => {
  dot.addEventListener("click", () => {
    const index = parseInt(dot.getAttribute("data-slide"));
    showSlide(index);
  });
});

// Optional: auto-slide every 10s
setInterval(() => {
  showSlide((currentSlide + 1) % slides.length);
}, 10000);
