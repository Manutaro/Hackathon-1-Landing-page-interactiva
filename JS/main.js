document.addEventListener('DOMContentLoaded', function() {
    
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Evita que la página se recargue
            
            const emailInput = document.getElementById('emailInput');
            const email = emailInput.value;
            
            // Aquí puedes agregar la lógica para enviar el email a tu backend
            console.log('Email enviado:', email);
            
            // Simulación de éxito
            alert('¡Gracias por suscribirte!');
            emailInput.value = ''; // Limpiar el campo
        });
    }
});