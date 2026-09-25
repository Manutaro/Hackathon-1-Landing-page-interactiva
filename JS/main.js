//Para reiniciar el carrusel de cada deporte
document.addEventListener("DOMContentLoaded", () => {//que cargue el archivo
    const enlaceDeportes = document.querySelectorAll(".btn-deporte"); 

    // Recorrer los botones cuando hay clic
    enlaceDeportes.forEach(enlace => {
        enlace.addEventListener("click", (e) => {
            const targetID = enlace.getAttribute("href");
            const targetSection = document.querySelector(targetID); 

            if (targetSection) {
                const carouselElement = targetSection.querySelector(".carousel"); 

                if (carouselElement) {
                    const carouselInstance = bootstrap.Carousel.getOrCreateInstance(carouselElement);
                    carouselInstance.to(0);
                }
            }
        });
    });
});

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


// Botón para subir 
const btnTop = document.getElementById("btnTop");

btnTop.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

