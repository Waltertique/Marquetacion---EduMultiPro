document.addEventListener('DOMContentLoaded', function() {
    // Función para crear una nueva planilla
    const crearPlanillaButton = document.getElementById('crear-planilla-btn');
    crearPlanillaButton.addEventListener('click', function() {
        Swal.fire({
            title: 'Crear Nueva Planilla',
            html: `
                <label for="nuevo-curso"><strong>Curso:</strong></label>
                <input type="text" id="nuevo-curso" class="swal2-input" placeholder="Ejemplo: 101">
                <label for="nuevo-periodo"><strong>Periodo:</strong></label>
                <input type="text" id="nuevo-periodo" class="swal2-input" placeholder="Ejemplo: 2024-1">
                <label for="nuevo-jornada"><strong>Jornada:</strong></label>
                <input type="text" id="nuevo-jornada" class="swal2-input" placeholder="Ejemplo: Tarde">
            `,
            confirmButtonText: 'Crear Planilla',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            preConfirm: () => {
                const curso = document.getElementById('nuevo-curso').value;
                const periodo = document.getElementById('nuevo-periodo').value;
                const jornada = document.getElementById('nuevo-jornada').value;

                if (!curso || !periodo || !jornada) {
                    Swal.showValidationMessage('Por favor ingrese todos los campos');
                } else {
                    // Crear la nueva planilla
                    Swal.fire('¡Planilla creada!', 'La planilla ha sido creada.', 'success');
                    const nuevaPlanilla = document.createElement('div');
                    nuevaPlanilla.classList.add('caja');
                    nuevaPlanilla.innerHTML = `
                        <div class="contenido">
                            <p class="planilla-titulo">Planilla ${curso} ${jornada}</p>
                            <button class="ver-planilla">Ver Planilla</button>
                            <i class="fa-solid fa-cog"></i>
                            <i class="fa-solid fa-trash-alt"></i>
                        </div>
                    `;
                    document.getElementById('plantillas-container').appendChild(nuevaPlanilla);

                    // Añadir eventos a los nuevos iconos
                    nuevaPlanilla.querySelector('.fa-cog').addEventListener('click', modificarBloque);
                    nuevaPlanilla.querySelector('.fa-trash-alt').addEventListener('click', eliminarBloque);

                    // Añadir evento para el botón "Ver Planilla"
                    nuevaPlanilla.querySelector('.ver-planilla').addEventListener('click', mostrarPlanillaEstudiantes);

                    Swal.fire('¡Creado!', 'La planilla ha sido creada.', 'success');
                }
            }
        });
    });

    // Función para modificar una planilla
    function modificarBloque(e) {
        const blockElement = e.target.closest('.caja');
        const blockName = blockElement.querySelector('.planilla-titulo').textContent;

        Swal.fire({
            title: 'Modificar Planilla',
            html: `
                <input type="text" id="nuevoNombre" class="swal2-input" placeholder="Nuevo nombre de la planilla" value="${blockName}">
            `,
            confirmButtonText: 'Guardar cambios',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            preConfirm: () => {
                const nuevoNombre = document.getElementById('nuevoNombre').value;
                if (!nuevoNombre) {
                    Swal.showValidationMessage('Por favor ingrese un nuevo nombre');
                } else {
                    blockElement.querySelector('.planilla-titulo').textContent = nuevoNombre;
                    Swal.fire('¡Modificado!', 'La planilla ha sido actualizada.', 'success');
                }
            }
        });
    }

    // Función para eliminar una planilla
    function eliminarBloque(e) {
        const blockElement = e.target.closest('.caja');
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Esta planilla será eliminada",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                blockElement.remove();
                Swal.fire('¡Eliminada!', 'La planilla ha sido eliminada.', 'success');
            }
        });
    }

    // Evento para el botón de búsqueda
    const buscarBtn = document.getElementById('buscar-btn');
    buscarBtn.addEventListener('click', function() {
        const nombreBusqueda = document.getElementById('nombre-buscar').value.toLowerCase();
        const cursoSeleccionado = document.getElementById('curso-select').value;
        
        const planillas = document.querySelectorAll('.caja');
        planillas.forEach(planilla => {
            const titulo = planilla.querySelector('.planilla-titulo').textContent.toLowerCase();
            let mostrar = true;

            // Filtrar por nombre
            if (nombreBusqueda && !titulo.includes(nombreBusqueda)) {
                mostrar = false;
            }

            // Filtrar por curso
            if (cursoSeleccionado !== 'todos') {
                const curso = planilla.querySelector('.planilla-titulo').textContent;
                const cursoNumero = parseInt(curso.split(' ')[1]);

                // Determinar el curso basado en el número
                if (cursoSeleccionado === 'primero' && !(cursoNumero >= 100 && cursoNumero < 200)) {
                    mostrar = false;
                } else if (cursoSeleccionado === 'segundo' && !(cursoNumero >= 200 && cursoNumero < 300)) {
                    mostrar = false;
                } else if (cursoSeleccionado === 'tercero' && !(cursoNumero >= 300 && cursoNumero < 400)) {
                    mostrar = false;
                } else if (cursoSeleccionado === 'cuarto' && !(cursoNumero >= 400 && cursoNumero < 500)) {
                    mostrar = false;
                } else if (cursoSeleccionado === 'quinto' && !(cursoNumero >= 500 && cursoNumero < 600)) {
                    mostrar = false;
                }
            }

            planilla.style.display = mostrar ? 'block' : 'none';
        });
    });

    // Delegación de eventos para los botones "Ver Planilla" (tanto los nuevos como los existentes)
    document.getElementById('plantillas-container').addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('ver-planilla')) {
            mostrarPlanillaEstudiantes();
        }
    });

    // Añadir eventos a los iconos de modificar y eliminar
    document.querySelectorAll('.fa-cog').forEach(icon => icon.addEventListener('click', modificarBloque));
    document.querySelectorAll('.fa-trash-alt').forEach(icon => icon.addEventListener('click', eliminarBloque));
});

document.querySelectorAll('.ver-planilla').forEach((button) => {
    button.addEventListener('click', () => {
        window.location.href = 'verPlanilla.html';
    });
});
