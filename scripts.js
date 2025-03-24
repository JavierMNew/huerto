function actualizarDatos() {
    document.getElementById("humedad").textContent = Math.floor(Math.random() * 100) + "%";
    document.getElementById("clima").textContent = Math.random() > 0.5 ? "🌧 Lluvia" : "☀ Despejado";
    document.getElementById("luz").textContent = Math.floor(Math.random() * 100) + "%";

    generarRecomendacion();
}

function generarRecomendacion() {
    let humedad = parseInt(document.getElementById("humedad").textContent);
    let clima = document.getElementById("clima").textContent;

    if (humedad < 30) {
        document.getElementById("mensaje-recomendacion").textContent = "⚠ La humedad es baja. Riega tus plantas pronto.";
    } else if (clima.includes("Lluvia")) {
        document.getElementById("mensaje-recomendacion").textContent = "🌧 Hay lluvia. No es necesario regar hoy.";
    } else {
        document.getElementById("mensaje-recomendacion").textContent = "✅ Los valores están en un rango óptimo.";
    }
}
