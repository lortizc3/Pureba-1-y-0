
function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("open");
}

// FUNCIONES DE LOS BOTONES DEL SIDEBAR
function verMisTramites() {
    alert("Redirigiendo a Mis Trámites (aún no implementado).");
}

function verDetallesInformes() {
    alert("Redirigiendo a Detalles e Informes (aún no implementado).");
}

function verPQRDS() {
    alert("Redirigiendo a PQRDS (aún no implementado).");
}

document.addEventListener("DOMContentLoaded", function () {
    // Seleccionamos todos los botones de "Ver más"
    const botones = document.querySelectorAll(".ver-mas");

    // Agregamos evento de clic a cada botón
    botones.forEach(boton => {
        boton.addEventListener("click", function () {
            const tipoPago = this.getAttribute("data-tipo");  // Obtiene el tipo de pago del botón
            window.location.href = `detalles.html?tipo=${tipoPago}`;  // Redirige con el parámetro en la URL
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("graficoPagos").getContext("2d");
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Totales", "Al día", "En mora", "Pendientes"],
            datasets: [{
                label: "Cantidad de pagos",
                data: [800, 340, 400, 60],
                backgroundColor: ["#3498db", "#2ecc71", "#e74c3c", "#f1c40f"]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const btnGenerar = document.getElementById("generar-informe");
    const banner = document.getElementById("banner-informe");
    const btnDescargar = document.getElementById("descargar-informe");

    // Mostrar banner cuando se presiona "Generar Informe"
    btnGenerar.addEventListener("click", function () {
        banner.style.display = "block";
    });

    // Descargar PDF y redirigir al inicio
    btnDescargar.addEventListener("click", function () {
        alert("Descargando PagosTotales.PDF...");
        banner.style.display = "none"; // Ocultar el banner
        setTimeout(() => {
            window.location.href = "index.html"; // Redirige al inicio
        }, 2000);
    });
});
