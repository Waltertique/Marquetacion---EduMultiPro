document.addEventListener('DOMContentLoaded', function () {

    // Función para eliminar un comité
    function eliminarComite(e) {
        const comiteElemento = e.target.closest('.caja'); // Selecciona el contenedor del comité
        Swal.fire({
            title: '¿Estás seguro?',
            text: 'Este comité será eliminado.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                comiteElemento.remove(); // Elimina el elemento del DOM
                Swal.fire('¡Eliminado!', 'El comité ha sido eliminado.', 'success');
            }
        });
    }

    // Asigna el evento de eliminar a todos los iconos de basura
    document.querySelectorAll('.fa-trash-alt').forEach((icon) => {
        icon.addEventListener('click', eliminarComite);
    });



    // Función para buscar comités por nombre o subtítulo
    function buscarComites() {
        const nombreBusqueda = document.getElementById('nombre-buscar').value.toLowerCase(); // Captura el valor del campo de búsqueda

        // Selecciona todos los comités
        const comites = document.querySelectorAll('.caja');
        comites.forEach((comite) => {
            const titulo = comite.querySelector('.planilla-titulo').textContent.toLowerCase();
            const subtitulo = comite.querySelector('.planilla-subtitulo').textContent.toLowerCase();

            // Verifica si el término de búsqueda coincide con el título o subtítulo
            const mostrar =
                (!nombreBusqueda || titulo.includes(nombreBusqueda) || subtitulo.includes(nombreBusqueda));

            // Muestra u oculta el comité dependiendo de si coincide
            comite.style.display = mostrar ? 'block' : 'none';
        });
    }

    // Asigna la función de búsqueda al botón de buscar
    const buscarBtn = document.getElementById('buscar-btn');
    buscarBtn.addEventListener('click', buscarComites);
});
