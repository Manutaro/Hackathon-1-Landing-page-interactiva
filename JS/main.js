document.addEventListener('DOMContentLoaded', function() {
    
    const newsletter = document.getElementById('newsletterForm');
    
    if (newsletter) {
        newsletter.addEventListener('submit', function(e) {
            e.preventDefault(); // Evita que la página se recargue
            
            const emailInput = document.getElementById('emailInput');
            const email = emailInput.value;
            
            console.log('Email enviado:', email);
            
            // Simulación de éxito
            alert('¡Gracias por suscribirte!');
            emailInput.value = ''; // Limpiar el campo
        });
    }
});