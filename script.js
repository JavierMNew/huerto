// Configuración de los medidores
const configGauge = {
    angle: 0,
    lineWidth: 0.44,
    radiusScale: 1,
    pointer: {
        length: 0.6,
        strokeWidth: 0.035,
        color: '#000000'
    },
    limitMax: false,
    limitMin: false,
    colorStart: '#6FADCF',
    colorStop: '#8FC0DA',
    strokeColor: '#E0E0E0',
    generateGradient: true,
    highDpiSupport: true,
    staticLabels: {
        font: "12px sans-serif",
        labels: [0, 20, 40, 60, 80, 100],
        color: "#000000",
        fractionDigits: 0
    },
    staticZones: [
        {strokeStyle: "#30B32D", min: 0, max: 30},
        {strokeStyle: "#FFDD00", min: 30, max: 70},
        {strokeStyle: "#F03E3E", min: 70, max: 100}
    ]
};

// Crear los medidores
const gaugeHumedad = new Gauge(document.getElementById('gauge-humedad')).setOptions(configGauge);
const gaugeClima = new Gauge(document.getElementById('gauge-clima')).setOptions(configGauge);
const gaugeLuz = new Gauge(document.getElementById('gauge-luz')).setOptions(configGauge);

// Establecer rangos
gaugeHumedad.maxValue = 100;
gaugeHumedad.setMinValue(0);
gaugeClima.maxValue = 100;
gaugeClima.setMinValue(0);
gaugeLuz.maxValue = 100;
gaugeLuz.setMinValue(0);

// Establecer valores iniciales
gaugeHumedad.set(50);
gaugeClima.set(30);
gaugeLuz.set(70);

// Función para actualizar datos (aquí es donde se conectará con Arduino)
function actualizarDatos() {
    // Esta función quedará "abierta" para que tu amigo la conecte con Arduino
    // Por ahora solo simularemos datos aleatorios
    const randomValue = () => Math.floor(Math.random() * 100);
    
    gaugeHumedad.set(randomValue());
    gaugeClima.set(randomValue());
    gaugeLuz.set(randomValue());
    
    document.getElementById('humedad').textContent = `${gaugeHumedad.value}%`;
    document.getElementById('clima').textContent = `${gaugeClima.value}%`;
    document.getElementById('luz').textContent = `${gaugeLuz.value}%`;
    
    actualizarRecomendaciones();
}

// Función para actualizar recomendaciones
function actualizarRecomendaciones() {
    const humedad = gaugeHumedad.value;
    let mensaje = '';
    
    if (humedad < 30) {
        mensaje = '⚠️ La humedad está baja. Se recomienda regar.';
    } else if (humedad > 70) {
        mensaje = '⚠️ La humedad está alta. No es necesario regar.';
    } else {
        mensaje = '✅ Los niveles de humedad son óptimos.';
    }
    
    document.getElementById('mensaje-recomendacion').textContent = mensaje;
}

// Actualizar datos iniciales
actualizarDatos();
