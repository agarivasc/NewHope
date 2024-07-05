let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.querySelectorAll('.slide');
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Cambia la imagen cada 5 segundos
}

document.querySelector('.prev').addEventListener('click', () => {
  slideIndex = (slideIndex - 2 + slides.length) % slides.length;
  showSlides();
});

document.querySelector('.next').addEventListener('click', () => {
  showSlides();
});
