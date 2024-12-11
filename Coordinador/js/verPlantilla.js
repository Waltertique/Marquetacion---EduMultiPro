// Nombres aleatorios
const nombres = [
    "Juan Pérez", "María López", "Carlos Martínez",
    "Ana González", "Luis Fernández", "Sofía Castro"
];

// Materias disponibles
const materias = ["Matemáticas", "Español", "Ciencias", "Historia"];

// Función para generar las filas de la tabla
function generarTabla() {
    const tbody = document.querySelector("table tbody");

    nombres.forEach((nombre, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${nombre}</td>
            ${materias
                .map(materia => {
                    const nota = (Math.random() * 5).toFixed(1);
                    return `
                        <td>
                            ${nota} <button onclick="mostrarDetalles('${nombre}', '${materia}', ${nota})" class="lupa">🔍</button>
                        </td>`;
                })
                .join("")}
        `;
        tbody.appendChild(row);
    });
}

// Función para mostrar detalles en SweetAlert
function mostrarDetalles(nombre, materia, nota) {
    let observacion;
    if (nota >= 4) {
        observacion = "Buen comportamiento, sigue así.";
    } else if (nota >= 3) {
        observacion = "Se deben mejorar algunos aspectos académicos.";
    } else {
        observacion = "No aprueba la materia, necesita trabajar en puntos clave.";
    }

    Swal.fire({
        title: `Detalles`,
        html: `<strong>Estudiante:</strong> ${nombre}<br>
               <strong>Asignatura:</strong> ${materia}<br>
               <strong>Nota:</strong> ${nota}<br>
               <strong>Observación:</strong> ${observacion}`,
        confirmButtonText: "Salir",
    });
}

// Llamar a la función para generar la tabla al cargar la página
document.addEventListener("DOMContentLoaded", generarTabla);
