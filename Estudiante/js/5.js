// Parte 1

document.getElementById('inicio').addEventListener('click', function () {
    // Redirige a otra página
    window.location.href = '../Estudiante/1-principalAlumno.html';
});

document.getElementById('noticia').addEventListener('click', function () {
    // Redirige a otra página
    window.location.href = '../Estudiante/2-noticias.html';
});

document.getElementById('horario').addEventListener('click', function () {
    // Redirige a otra página
    window.location.href = '../Estudiante/4-horario.html';
});

document.getElementById('clases').addEventListener('click', function () {
    // Redirige a otra página
    window.location.href = '../Estudiante/5-aula.html';
});

document.getElementById('notas').addEventListener('click', function () {
    // Redirige a otra página
    window.location.href = '../Estudiante/10-notas.html';
});

document.getElementById('boletin').addEventListener('click', function () {
    // Redirige a otra página
    window.location.href = '../Estudiante/11-boletines.html';
});

document.getElementById('usuario').addEventListener('click', function () {
    // Redirige a otra página
    window.location.href = '../Estudiante/12-usuario.html';
});

document.getElementById('salir').addEventListener('click', function () {
    // Redirige a otra página
    window.location.href = '../Principal/index.html';
});

// Parte 2

document.getElementById('clase1').addEventListener('click', function () {
    // Redirige a otra página
    window.location.href = '../Estudiante/6-trabajo.html';
});

document.getElementById('clase2').addEventListener('click', function () {
    // Redirige a otra página
    window.location.href = '../Estudiante/6-trabajo.html';
});

document.getElementById('clase3').addEventListener('click', function () {
    // Redirige a otra página
    window.location.href = '../Estudiante/6-trabajo.html';
});

// parte 4 eliminar clase
// apartado 1

const boton = document.getElementById('eliminar1');
const div = document.getElementById('apartado1');

// Añade el evento 'click' a la imagen
boton.addEventListener('click', function () {
    // Muestra una alerta de confirmación con SweetAlert2
    Swal.fire({
        title: '¿Estás seguro?',
        text: "Si eliminas la clase perderas toda su informacion.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminarlo',
        cancelButtonText: 'No, cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            // Si el usuario confirma, elimina el div
            div.remove();
            Swal.fire(
                '¡Eliminado!',
                'El div ha sido eliminado.',
                'success'
            );
        } else {
            // Si el usuario cancela, muestra un mensaje
            Swal.fire(
                'Cancelado',
                'la clase no ha sido eliminado.',
                'error'
            );
        }
    });
});
// apartado 1

const boton2 = document.getElementById('eliminar2');
const div2 = document.getElementById('apartado2');

// Añade el evento 'click' a la imagen
boton2.addEventListener('click', function () {
    // Muestra una alerta de confirmación con SweetAlert2
    Swal.fire({
        title: '¿Estás seguro?',
        text: "Si eliminas la clase perderas toda su informacion.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminarlo',
        cancelButtonText: 'No, cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            // Si el usuario confirma, elimina el div
            div2.remove();
            Swal.fire(
                '¡Eliminado!',
                'El div ha sido eliminado.',
                'success'
            );
        } else {
            // Si el usuario cancela, muestra un mensaje
            Swal.fire(
                'Cancelado',
                'la clase no ha sido eliminado.',
                'error'
            );
        }
    });
});
// apartado 1

const boton3 = document.getElementById('eliminar3');
const div3 = document.getElementById('apartado3');

// Añade el evento 'click' a la imagen
boton3.addEventListener('click', function () {
    // Muestra una alerta de confirmación con SweetAlert2
    Swal.fire({
        title: '¿Estás seguro?',
        text: "Si eliminas la clase perderas toda su informacion.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminarlo',
        cancelButtonText: 'No, cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            // Si el usuario confirma, elimina el div
            div3.remove();
            Swal.fire(
                '¡Eliminado!',
                'El div ha sido eliminado.',
                'success'
            );
        } else {
            // Si el usuario cancela, muestra un mensaje
            Swal.fire(
                'Cancelado',
                'la clase no ha sido eliminado.',
                'error'
            );
        }
    });
});