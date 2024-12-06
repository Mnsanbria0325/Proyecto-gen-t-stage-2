document.getElementById('reservationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Limpiar mensajes anteriores
    document.getElementById('nameError').textContent = '';
    document.getElementById('peopleError').textContent = '';
    document.getElementById('dateError').textContent = '';
    document.getElementById('timeError').textContent = '';
    document.getElementById('successMessage').textContent = '';

    // Obtener valores del formulario
    const name = document.getElementById('name').value.trim();
    const people = document.getElementById('people').value.trim();
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    let hasError = false;

    // Validaciones
    if (name === '') {
        document.getElementById('nameError').textContent = 'El nombre es obligatorio.';
        hasError = true;
    }
    if (people === '' || people <= 0) {
        document.getElementById('peopleError').textContent = 'Por favor, ingrese un número válido de personas.';
        hasError = true;
    }
    if (date === '') {
        document.getElementById('dateError').textContent = 'Seleccione una fecha válida.';
        hasError = true;
    }
    if (time === '') {
        document.getElementById('timeError').textContent = 'Seleccione una hora válida.';
        hasError = true;
    }

    // Si no hay errores, mostrar éxito
    if (!hasError) {
        document.getElementById('successMessage').textContent = `¡Reserva confirmada para ${name} el ${date} a las ${time} para ${people} personas!`;
        document.getElementById('reservationForm').reset();
    }
    
});
