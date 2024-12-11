document.addEventListener('DOMContentLoaded', function() {
    // Obtener los elementos relevantes del DOM
    const telefono1Input = document.getElementById('telefono1');
    const telefono2Input = document.getElementById('telefono2');
    const fotoInput = document.createElement('input');
    fotoInput.type = 'file';
    fotoInput.accept = 'image/*';
    const fotoContainer = document.querySelector('.foto-container');
    const fotoImage = document.querySelector('.foto');
    const configIconTelefono1 = document.querySelector('.config-icon');
    const configIconTelefono2 = document.querySelector('.config-icon-telefono2');
    const configIconFoto = document.querySelector('.config-icon-foto');
    const guardarBtn = document.getElementById('guardar');
    const cancelarBtn = document.getElementById('cancelar');
    
    let originalFoto = fotoImage.src;
    let originalTelefono1 = telefono1Input.value;
    let originalTelefono2 = telefono2Input.value;

    // Inicializar los inputs de teléfono como deshabilitados
    telefono1Input.disabled = true;
    telefono2Input.disabled = true;

    // Configurar la acción para el ícono de teléfono 1
    configIconTelefono1.addEventListener('click', function() {
        telefono1Input.disabled = !telefono1Input.disabled;
        // Deshabilitar teléfono 2 si teléfono 1 se habilita
        if (!telefono1Input.disabled) {
            telefono2Input.disabled = true;
        }
    });

    // Configurar la acción para el ícono de teléfono 2
    configIconTelefono2.addEventListener('click', function() {
        telefono2Input.disabled = !telefono2Input.disabled; 
        // Deshabilitar teléfono 1 si teléfono 2 se habilita
        if (!telefono2Input.disabled) {
            telefono1Input.disabled = true;
        }
    });

    // Configurar la acción del ícono de configuración para la foto
    configIconFoto.addEventListener('click', function() {
        fotoInput.click();
    });

    // Cuando se selecciona una nueva foto, actualizar la imagen
    fotoInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                fotoImage.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // Acción al hacer clic en "Guardar"
    guardarBtn.addEventListener('click', function() {
        originalTelefono1 = telefono1Input.value;
        originalTelefono2 = telefono2Input.value;
        originalFoto = fotoImage.src;
        Swal.fire('¡Guardado!', 'El miembro usuario ha sido actualizado.', 'success');
    });

    // Acción al hacer clic en "Cancelar"
    cancelarBtn.addEventListener('click', function() {
        // Restaurar los valores originales
        telefono1Input.value = originalTelefono1;
        telefono2Input.value = originalTelefono2;
        fotoImage.src = originalFoto;

        // Deshabilitar los campos de teléfono nuevamente
        telefono1Input.disabled = true;
        telefono2Input.disabled = true;
    });
});
