document.addEventListener('DOMContentLoaded', function () {
    // Función para crear un nuevo comité
    const crearComiteButton = document.getElementById('crear-comite-btn');
    crearComiteButton.addEventListener('click', function () {
        Swal.fire({
            title: 'Crear Nuevo Comité',
            html: `
                <label for="nuevo-titulo"><strong>Título:</strong></label>
                <input type="text" id="nuevo-titulo" class="swal2-input" placeholder="Ejemplo: Comité Escolar">
                <label for="nuevo-jornada"><strong>Jornada:</strong></label>
                <input type="text" id="nuevo-jornada" class="swal2-input" placeholder="Ejemplo: Mañana">
                <label for="nuevo-profesor"><strong>Profesor:</strong></label>
                <input type="text" id="nuevo-profesor" class="swal2-input" placeholder="Ejemplo: Juan Pérez">
                <label for="nuevo-profesor"><strong>Hora:</strong></label>
                <input type="text" id="nuevo-profesor" class="swal2-input" placeholder="Ejemplo: Ingrese la hora">
            `,
            confirmButtonText: 'Crear Comité',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            preConfirm: () => {
                const titulo = document.getElementById('nuevo-titulo').value;
                const jornada = document.getElementById('nuevo-jornada').value;
                const profesor = document.getElementById('nuevo-profesor').value;

                if (!titulo || !jornada || !profesor) {
                    Swal.showValidationMessage('Por favor ingrese todos los campos');
                } else {
                    // Crear el nuevo comité
                    const nuevoComite = document.createElement('div');
                    nuevoComite.classList.add('caja');
                    nuevoComite.innerHTML = `
                        <div class="contenido">
                            <div class="texto">
                                <p class="planilla-titulo">${titulo}</p>
                                <p class="planilla-subtitulo">${profesor}</p>
                            </div>
                            <div class="acciones">
                                <button class="entrar">Entrar</button>
                                <i class="fa-solid fa-cog"></i>
                                <i class="fa-solid fa-trash-alt"></i>
                            </div>
                        </div>
                    `;
                    document.getElementById('plantillas-container').appendChild(nuevoComite);

                    // Añadir eventos a los nuevos iconos
                    nuevoComite.querySelector('.fa-cog').addEventListener('click', modificarBloque);
                    nuevoComite.querySelector('.fa-trash-alt').addEventListener('click', eliminarBloque);

                    // Añadir evento al nuevo botón 'Entrar'
                    nuevoComite.querySelector('.entrar').addEventListener('click', () => {
                        window.location.href = 'entrarComite.html';
                    });

                    Swal.fire('¡Creado!', 'El Comité ha sido creado.', 'success');
                }
            },
        });
    });

    // Función para modificar un comité
    function modificarBloque(e) {
        const blockElement = e.target.closest('.caja');
        const tituloActual = blockElement.querySelector('.planilla-titulo').textContent;
        const subtituloActual = blockElement.querySelector('.planilla-subtitulo').textContent;

        Swal.fire({
            title: 'Modificar Comité',
            html: `
                <label for="nuevo-titulo"><strong>Título:</strong></label>
                <input type="text" id="nuevo-titulo" class="swal2-input" value="${tituloActual}">
                <label for="nuevo-subtitulo"><strong>Profesor:</strong></label>
                <input type="text" id="nuevo-subtitulo" class="swal2-input" value="${subtituloActual}">
            `,
            confirmButtonText: 'Guardar cambios',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            preConfirm: () => {
                const nuevoTitulo = document.getElementById('nuevo-titulo').value;
                const nuevoSubtitulo = document.getElementById('nuevo-subtitulo').value;

                if (!nuevoTitulo || !nuevoSubtitulo) {
                    Swal.showValidationMessage('Por favor complete todos los campos');
                } else {
                    blockElement.querySelector('.planilla-titulo').textContent = nuevoTitulo;
                    blockElement.querySelector('.planilla-subtitulo').textContent = nuevoSubtitulo;
                    Swal.fire('¡Modificado!', 'El comité ha sido actualizado.', 'success');
                }
            },
        });
    }

    // Función para eliminar un comité
    function eliminarBloque(e) {
        const blockElement = e.target.closest('.caja');
        Swal.fire({
            title: '¿Estás seguro?',
            text: 'Este comité será eliminado',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                blockElement.remove();
                Swal.fire('¡Eliminado!', 'El comité ha sido eliminado.', 'success');
            }
        });
    }

    // Función de búsqueda
    const buscarBtn = document.getElementById('buscar-btn');
    buscarBtn.addEventListener('click', function () {
        const nombreBusqueda = document.getElementById('nombre-buscar').value.toLowerCase();

        const comites = document.querySelectorAll('.caja');
        comites.forEach((comite) => {
            const titulo = comite.querySelector('.planilla-titulo').textContent.toLowerCase();
            const subtitulo = comite.querySelector('.planilla-subtitulo').textContent.toLowerCase();
            const mostrar =
                (!nombreBusqueda || titulo.includes(nombreBusqueda) || subtitulo.includes(nombreBusqueda));

            comite.style.display = mostrar ? 'block' : 'none';
        });
    });

    // Añadir eventos iniciales a los iconos de modificar y eliminar
    document.querySelectorAll('.fa-cog').forEach((icon) => icon.addEventListener('click', modificarBloque));
    document.querySelectorAll('.fa-trash-alt').forEach((icon) => icon.addEventListener('click', eliminarBloque));
});

document.querySelectorAll('.entrar').forEach((button) => {
    button.addEventListener('click', () => {
        window.location.href = 'entrarComite.html';
    });
});

