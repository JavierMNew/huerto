document.addEventListener("DOMContentLoaded", function() {
    const ctxHumedad = document.getElementById('humedadChart').getContext('2d');
    new Chart(ctxHumedad, {
        type: 'line',
        data: {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
            datasets: [{
                label: 'Humedad del Suelo (%)',
                data: [30, 40, 50, 60],
                borderColor: 'blue',
                borderWidth: 2,
                fill: false
            }]
        }
    });

    const ctxLluvia = document.getElementById('lluviaChart').getContext('2d');
    new Chart(ctxLluvia, {
        type: 'bar',
        data: {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
            datasets: [{
                label: 'Lluvia (mm)',
                data: [10, 50, 30, 20],
                backgroundColor: 'purple'
            }]
        }
    });

    const ctxLuz = document.getElementById('luzChart').getContext('2d');
    new Chart(ctxLuz, {
        type: 'doughnut',
        data: {
            labels: ['Alta', 'Media', 'Baja'],
            datasets: [{
                label: 'Nivel de Luz',
                data: [60, 30, 10],
                backgroundColor: ['yellow', 'orange', 'red']
            }]
        }
    });
});
