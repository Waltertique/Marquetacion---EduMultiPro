document.addEventListener('DOMContentLoaded', function() {

    // Seleccionar todos los botones de eliminar
    const eliminarBotones = document.querySelectorAll('.eliminar-horario');
    
    eliminarBotones.forEach(boton => {
        boton.addEventListener('click', function() {
            const horarioElemento = this.closest('.horario');
            const horarioTexto = horarioElemento.querySelector('h3').innerText;

            // Mostrar SweetAlert con opciones para eliminar o modificar
            Swal.fire({
                title: '¿Qué deseas hacer?',
                text: "Puedes eliminar o modificar este horario.",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Eliminar',
                cancelButtonText: 'Modificar',
            }).then((result) => {
                if (result.isConfirmed) {
                    // Acción para eliminar el horario
                    Swal.fire('¡Eliminado!', 'El horario ha sido eliminado.', 'success');
                    horarioElemento.remove(); // Elimina el elemento del DOM
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    // Acción para modificar el horario
                    Swal.fire({
                        title: 'Modificar Horario',
                        html: `
                            <input type="text" id="nuevoHorario" class="swal2-input" placeholder="Nuevo horario" value="${horarioTexto.split(':')[0].trim()}">
                            <input type="text" id="nuevaJornada" class="swal2-input" placeholder="Nueva jornada" value="${horarioTexto.split(':')[1].trim()}">
                        `,
                        confirmButtonText: 'Guardar cambios',
                        showCancelButton: true,
                        cancelButtonText: 'Cancelar',
                        preConfirm: () => {
                            const nuevoHorario = document.getElementById('nuevoHorario').value;
                            const nuevaJornada = document.getElementById('nuevaJornada').value;
                            if (!nuevoHorario || !nuevaJornada) {
                                Swal.showValidationMessage('Por favor ingrese todos los campos');
                            } else {
                                // Acción para guardar el nuevo horario
                                Swal.fire('¡Modificado!', 'El horario ha sido actualizado.', 'success');
                                // Actualiza el horario en el DOM
                                horarioElemento.querySelector('h3').innerText = `${nuevoHorario}: ${nuevaJornada}`;
                            }
                        }
                    });
                }
            });
        });
    });

    // Crear nuevo horario
    const crearHorarioButton = document.querySelector('.crear-horario');
    crearHorarioButton.addEventListener('click', function() {
        Swal.fire({
            title: 'Crear Nuevo Horario',
            html: `
                <input type="text" id="nuevoHorarioInput" class="swal2-input" placeholder="Nombre del nuevo horario">
                <input type="text" id="nuevaJornadaInput" class="swal2-input" placeholder="Jornada del nuevo horario">
            `,
            confirmButtonText: 'Crear Horario',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            preConfirm: () => {
                const nuevoHorario = document.getElementById('nuevoHorarioInput').value;
                const nuevaJornada = document.getElementById('nuevaJornadaInput').value;
                if (!nuevoHorario || !nuevaJornada) {
                    Swal.showValidationMessage('Por favor ingrese todos los campos');
                } else {
                    // Crear el nuevo horario y agregarlo a la lista
                    const nuevoElemento = document.createElement('div');
                    nuevoElemento.classList.add('horario');
                    nuevoElemento.innerHTML = `
                        <h3>${nuevoHorario}: ${nuevaJornada}</h3>
                        <button class="ver-horario">Ver Horario</button>
                        <button class="eliminar-horario">Eliminar</button>
                    `;
                    document.querySelector('.lista-horarios').appendChild(nuevoElemento);

                    // Reasignar el evento de eliminación a los nuevos botones
                    nuevoElemento.querySelector('.eliminar-horario').addEventListener('click', function() {
                        const horarioElemento = this.closest('.horario');
                        const horarioTexto = horarioElemento.querySelector('h3').innerText;

                        Swal.fire({
                            title: '¿Qué deseas hacer?',
                            text: "Puedes eliminar o modificar este horario.",
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonText: 'Eliminar',
                            cancelButtonText: 'Modificar',
                        }).then((result) => {
                            if (result.isConfirmed) {
                                Swal.fire('¡Eliminado!', 'El horario ha sido eliminado.', 'success');
                                horarioElemento.remove();
                            } else if (result.dismiss === Swal.DismissReason.cancel) {
                                Swal.fire({
                                    title: 'Modificar Horario',
                                    html: `
                                        <input type="text" id="nuevoHorario" class="swal2-input" placeholder="Nuevo horario" value="${horarioTexto.split(':')[0].trim()}">
                                        <input type="text" id="nuevaJornada" class="swal2-input" placeholder="Nueva jornada" value="${horarioTexto.split(':')[1].trim()}">
                                    `,
                                    confirmButtonText: 'Guardar cambios',
                                    showCancelButton: true,
                                    cancelButtonText: 'Cancelar',
                                    preConfirm: () => {
                                        const nuevoHorario = document.getElementById('nuevoHorario').value;
                                        const nuevaJornada = document.getElementById('nuevaJornada').value;
                                        if (!nuevoHorario || !nuevaJornada) {
                                            Swal.showValidationMessage('Por favor ingrese todos los campos');
                                        } else {
                                            horarioElemento.querySelector('h3').innerText = `${nuevoHorario}: ${nuevaJornada}`;
                                            Swal.fire('¡Modificado!', 'El horario ha sido actualizado.', 'success');
                                        }
                                    }
                                });
                            }
                        });
                    });
                }
            }
        });
    });
});
