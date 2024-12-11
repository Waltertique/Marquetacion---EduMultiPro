// Funcionalidad del chat
const messagesContainer = document.querySelector('.messages');
const sendButton = document.getElementById('send-button');
const chatInput = document.getElementById('chat-input');

sendButton.addEventListener('click', () => {
    const messageText = chatInput.value.trim();
    if (messageText !== '') {
        const newMessage = document.createElement('div');
        newMessage.classList.add('message');
        newMessage.innerHTML = `
            <div class="sender">Tú:</div>
            <div class="text">${messageText}</div>
        `;
        messagesContainer.appendChild(newMessage);
        chatInput.value = '';
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
});


document.querySelectorAll('.fa-trash-alt').forEach((btn) => {
    btn.addEventListener('click', function () {
        Swal.fire({
            title: '¿Estás seguro?',
            text: 'Este miembro será eliminado',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                this.closest('li').remove();
                Swal.fire('¡Eliminado!', 'El miembro ha sido eliminado.', 'success');
            }
        });
    });
});
