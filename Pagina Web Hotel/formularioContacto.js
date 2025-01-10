
    document.getElementById('contacto').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const formData = {
            name: name,
            email: email,
            message: message
        };

        // Llamada POST al back-end
        fetch('http://localhost:8080/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Formulario enviado con éxito:', data);
            })
            .catch(error => {
                console.error('Error al enviar el formulario:', error);
            });
    });
