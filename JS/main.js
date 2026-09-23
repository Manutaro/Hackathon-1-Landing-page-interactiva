
// JS para carruseles
// Se detienen al poner el cursor en la imagen y ya no avanzan
const carousels = document.querySelectorAll('.carousel');
carousels.forEach(c => {
  c.addEventListener('mouseenter', () => {
    bootstrap.Carousel.getInstance(c).pause();
  });
  c.addEventListener('mouseleave', () => {
    bootstrap.Carousel.getInstance(c).cycle();
  });
});
