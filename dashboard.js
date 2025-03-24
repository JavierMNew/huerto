// Configuración común para los gráficos
const configComun = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
        legend: {
            position: 'bottom',
            labels: {
                boxWidth: 12,
                padding: 15
            }
        }
    }
};

// Función para generar datos de ejemplo (reemplazar con datos reales del Arduino)
function generarDatosSemanales() {
    return {
        labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
        datos: Array.from({length: 7}, () => Math.floor(Math.random() * 100))
    };
}

// Gráfico de Humedad
const datosHumedad = generarDatosSemanales();
new Chart(document.getElementById('graficoHumedad'), {
    type: 'line',
    data: {
        labels: datosHumedad.labels,
        datasets: [{
            label: 'Humedad (%)',
            data: datosHumedad.datos,
            borderColor: '#2E7D32',
            backgroundColor: 'rgba(46, 125, 50, 0.1)',
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        ...configComun,
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                title: {
                    display: true,
                    text: 'Porcentaje de Humedad'
                }
            }
        }
    }
});

// Gráfico de Clima
const datosClima = generarDatosSemanales();
new Chart(document.getElementById('graficoClima'), {
    type: 'bar',
    data: {
        labels: datosClima.labels,
        datasets: [{
            label: 'Temperatura (°C)',
            data: datosClima.datos,
            backgroundColor: '#1976D2',
        }]
    },
    options: {
        ...configComun,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Temperatura'
                }
            }
        }
    }
});

// Gráfico de Luz
const datosLuz = generarDatosSemanales();
new Chart(document.getElementById('graficoLuz'), {
    type: 'line',
    data: {
        labels: datosLuz.labels,
        datasets: [{
            label: 'Intensidad de Luz (%)',
            data: datosLuz.datos,
            borderColor: '#FFA000',
            backgroundColor: 'rgba(255, 160, 0, 0.1)',
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        ...configComun,
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                title: {
                    display: true,
                    text: 'Porcentaje de Luz'
                }
            }
        }
    }
});
