// Script para manejar el envío del formulario de contacto con JS
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe tradicionalmente

    // Obtiene los valores del formulario
    const nombre = document.querySelector('input[name="nombre"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const mensaje = document.querySelector('textarea[name="mensaje"]').value;

    // Muestra un mensaje de éxito (puedes modificarlo según lo que desees hacer)
    document.getElementById("message").innerHTML = `
        <p>Gracias, ${nombre}. Hemos recibido tu mensaje.</p>
        <p>Nos pondremos en contacto contigo en ${email} lo antes posible.</p>
    `;
    
    // Aquí podrías hacer algo como enviar los datos a un servidor o almacenarlos localmente.
});

// Función para el botón de volver al inicio
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
