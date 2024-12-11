document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar títulos y subtítulos
    const titulos = document.querySelectorAll('.titulos');
    const subtitulos = document.querySelectorAll('.subtitulo');

    // Función para redirigir a plantillas.html
    function redirigir() {
        window.location.href = 'planillas-uno.html';
    }

    // Añadir eventos de clic a los títulos
    titulos.forEach(titulos => {
        titulos.addEventListener('click', redirigir);
    });

    // Añadir eventos de clic a los subtítulos
    subtitulos.forEach(subtitulo => {
        subtitulo.addEventListener('click', redirigir);
    });
    // Seleccionar todos los iconos de engranaje
    const cogIcons = document.querySelectorAll('.fa-cog');

    // Función para crear un nuevo bloque
    const crearBloqueButton = document.querySelector('.crear-bloque');
    crearBloqueButton.addEventListener('click', function() {
        Swal.fire({
            title: 'Crear Nuevo Bloque',
            html: `
                <input type="text" id="nuevoSubtitulo" class="swal2-input" placeholder="Subtítulo del nuevo bloque">
            `,
            confirmButtonText: 'Crear Bloque',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            preConfirm: () => {
                const nuevoSubtitulo = document.getElementById('nuevoSubtitulo').value;
                if (!nuevoSubtitulo) {
                    Swal.showValidationMessage('Por favor ingrese un subtítulo');
                } else {
                    // Crear el nuevo bloque
                    Swal.fire('¡Creado!', 'El bloque ha sido creado.', 'success');
                    const nuevoBloque = document.createElement('div');
                    nuevoBloque.classList.add('caja');
                    nuevoBloque.innerHTML = `
                        <h3 class="titulo">Planillas</h3>
                        <p class="subtitulo">${nuevoSubtitulo}</p>
                        <div class="icons">
                            <i class="fa-solid fa-cog"></i>
                            <i class="fa-solid fa-trash-alt"></i>
                        </div>
                    `;
                    document.getElementById('plantillas-container').appendChild(nuevoBloque);

                    // Añadir el evento para el engranaje
                    nuevoBloque.querySelector('.fa-cog').addEventListener('click', modificarBloque);
                    // Añadir el evento para el icono de eliminar
                    nuevoBloque.querySelector('.fa-trash-alt').addEventListener('click', eliminarBloque);
                }
            }
        });
    });

    // Función para modificar un bloque
    function modificarBloque(e) {
        const blockElement = e.target.closest('.caja');
        const blockName = blockElement.querySelector('.subtitulo').textContent;

        Swal.fire({
            title: 'Modificar Bloque',
            html: `
                <input type="text" id="nuevoNombre" class="swal2-input" placeholder="Nuevo nombre del bloque" value="${blockName}">
            `,
            confirmButtonText: 'Guardar cambios',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            preConfirm: () => {
                const nuevoNombre = document.getElementById('nuevoNombre').value;
                if (!nuevoNombre) {
                    Swal.showValidationMessage('Por favor ingrese un nuevo nombre');
                } else {
                    blockElement.querySelector('.subtitulo').textContent = nuevoNombre;
                    Swal.fire('¡Modificado!', 'El bloque ha sido actualizado.', 'success');
                }
            }
        });
    }

    // Función para eliminar un bloque
    function eliminarBloque(e) {
        const blockElement = e.target.closest('.caja');
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Este bloque será eliminado",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                blockElement.remove();
                Swal.fire('¡Eliminado!', 'El bloque ha sido eliminado.', 'success');
            }
        });
    }

    // Asignar eventos de modificación y eliminación a los bloques existentes
    cogIcons.forEach(icon => {
        icon.addEventListener('click', modificarBloque);
    });
    const deleteIcons = document.querySelectorAll('.fa-trash-alt');
    deleteIcons.forEach(icon => {
        icon.addEventListener('click', eliminarBloque);
    });
});
