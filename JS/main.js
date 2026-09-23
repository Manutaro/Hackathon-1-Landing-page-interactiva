//Para reiniciar el carrusel de cada deporte
document.addEventListener("DOMContentLoaded", () => {//que cargue el archivo
    // 1. Se agregó el punto '.' para seleccionar la clase correctamente
    const enlaceDeportes = document.querySelectorAll(".btn-deporte"); 

    // Recorrer los botones cuando hay clic
    enlaceDeportes.forEach(enlace => {
        // 2. Se cambió "clic" por "click"
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
