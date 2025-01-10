// Llamada GET para obtener información
fetch('http://localhost:8080/api/habitaciones')
    .then(response => response.json())
    .then(data => {
        console.log(data); // Muestra los datos obtenidos
        // Aquí puedes actualizar el DOM con los datos
    })
    .catch(error => console.error('Error al obtener los datos:', error));

// Llamada POST para enviar datos
const roomData = {
    nombre: 'habitacion 101',
    descripcion: 'Habitación con 2 camas',
    precio: 100
};

fetch('http://localhost:8080/api/habitaciones', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(habitacionData)
})
    .then(response => response.json())
    .then(data => console.log('Respuesta del servidor:', data))
    .catch(error => console.error('Error al enviar datos:', error));
