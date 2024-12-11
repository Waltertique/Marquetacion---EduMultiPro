document.getElementById('inicio').addEventListener('click', function () {
    // Redirige a otra página
    window.location.href = '../Profesor/1-principalProfesor.html';
});

document.getElementById('noticia').addEventListener('click', function () {
    // Redirige a otra página
    window.location.href = '../Profesor/2-noticias.html';
});

document.getElementById('horario').addEventListener('click', function () {
    // Redirige a otra página
    window.location.href = '../Profesor/4-horario.html';
});

document.getElementById('clases').addEventListener('click', function () {
    // Redirige a otra página
    window.location.href = '../Profesor/5-aula.html';
});

document.getElementById('notas').addEventListener('click', function () {
    // Redirige a otra página
    window.location.href = '../Profesor/13-calificaciones.html';
});

document.getElementById('usuario').addEventListener('click', function () {
    // Redirige a otra página
    window.location.href = '../Profesor/Usuario.html';
});

// Parte 2

document.getElementById('clase1').addEventListener('click', function () {
    // Redirige a otra página
    window.location.href = '../Profesor/6-trabajo.html';
});

document.getElementById('clase2').addEventListener('click', function () {
    // Redirige a otra página
    window.location.href = '../Profesor/6-trabajo.html';
});

document.getElementById('clase3').addEventListener('click', function () {
    // Redirige a otra página
    window.location.href = '../Profesor/6-trabajo.html';
});

document.getElementById('salir').addEventListener('click', function () {
    // Redirige a otra página
    window.location.href = '../Principal/index.html';
});

// parte 3 crear clase
document.getElementById('crearClase').addEventListener('click', () => {
    Swal.fire({
        title: 'Crear Clase',
        html: `
            <input id="materiaClaseInput" class="swal2-input" placeholder="Nombre de la Materia">
            <input id="cursoClaseInput" class="swal2-input" placeholder="Curso">
            <input id="JornadaClaseInput" class="swal2-input" placeholder="Jornada">
            <input id="profesorClaseInput" class="swal2-input" placeholder="Profesor">
        `,
        confirmButtonText: 'Crear',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        preConfirm: () => {
            const materiaClase = document.getElementById('materiaClaseInput').value;
            const cursoClase = document.getElementById('cursoClaseInput').value;
            const jornadaClase = document.getElementById('JornadaClaseInput').value;
            const profesorClase = document.getElementById('profesorClaseInput').value;

            if (!materiaClase || !cursoClase || !jornadaClase | !profesorClase) {
                Swal.showValidationMessage('Por favor, complete todos los campos');
                return false;
            }

            return { materiaClase, cursoClase, jornadaClase, profesorClase };
        }
    }).then((result) => {
        if (result.isConfirmed) {
            const { materiaClase, cursoClase, jornadaClase, profesorClase } = result.value;

            // Crear nueva sección respetando la estructura y clases existentes
            const nuevoApartado = document.createElement('div');
            
            nuevoApartado.innerHTML = `
                <div class="linea"></div>
                <div class="apartado2" id="apartado1">
                    <div class="clase1" id="clase1">
                        <div class="p1">${materiaClase} ${cursoClase} Jornada ${jornadaClase}:</div>
                        <div class="p2">${profesorClase}</div>
                    </div>
                    <div class="imagenes">
                        <img src="img/f7.png" alt="">
                        <img src="img/f6.png" id="eliminar1" alt="">
                    </div>
                </div>
            `;

            // Insertar el nuevo apartado antes de la última línea de la lista
            const contenedor = document.querySelector('.parte2');
            contenedor.appendChild(nuevoApartado);

            // Agregar funcionalidad al botón de eliminar
            nuevoApartado.querySelector('.eliminar-clase').addEventListener('click', () => {
                nuevoApartado.remove();
            });
        }
    });
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