document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.getElementById("registration-form");
    const responseContainer = document.getElementById("response");

    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Capturar los valores del formulario
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const fechaNacimiento = document.getElementById("fechaNacimiento").value;

        // Crear un objeto con los datos del formulario
        const formData = {
            nombre: nombre,
            apellido: apellido,
            fechaNacimiento: fechaNacimiento
        };

        // Realizar una solicitud POST a la API de JSONPlaceholder
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            // Mostrar la respuesta del servidor en el contenedor de respuesta
            responseContainer.textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error("Error al enviar la solicitud:", error);
        });
    });
});
