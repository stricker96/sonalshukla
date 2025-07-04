const dots = document.querySelectorAll(".dot");
let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".experience-slide"); // 🛠 Re-query slides every time
  const offset = index * -100;
  const carousel = document.querySelector(".experience-carousel");
  
  if (!carousel || slides.length === 0) return; // safety check

  carousel.style.transform = `translateX(${offset}%)`;
  currentSlide = index;

  dots.forEach(dot => dot.classList.remove("active"));
  if (dots[index]) {
    dots[index].classList.add("active");
  }
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

// Optional auto-slide every 10s
setInterval(() => {
  const slides = document.querySelectorAll(".experience-slide");
  showSlide((currentSlide + 1) % slides.length);
}, 10000);
