function submitted(e) {
    if (e) e.preventDefault();
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Enviado',
        showConfirmButton: false,
        timer: 2000
    });
}

function callForm() {
    Swal.fire({
        html: `
        <h1 class="text-2xl text-white mb-5 montserrat font-bold uppercase">¡Agenda una llamada con un asesor!</h1>
        <label class="text-xl text-white montserrat" for="name">Nombre</label>
        <input style="background-color: #ffff; color:black;" type="text" id="name" class="montserrat my-3 h-12 w-full">
        <label class="text-xl text-white montserrat" for="email">Correo</label>
        <input style="background-color: #ffff; color:black;" type="email" id="email" class="montserrat my-3 h-12 w-full">
        <label class="text-xl text-white montserrat" for="phone">Numero</label>
        <input style="background-color: #ffff; color:black;" type="tel" id="phone" class="montserrat my-3 h-12 w-full">
        <label class="text-xl text-white montserrat" for="topic">Motivo de la consulta</label>
        <input style="background-color: #ffff; color:black;" type="text" id="topic" class="montserrat my-3 h-12 w-full"><br><br>
        <label class="text-xl text-white montserrat" for="meeting-time">Elija la fecha y hora preferidas:</label>
        <input class="my-3 h-12 w-full montserrat" style="background-color: #ffff; color:black;" type="datetime-local" id="meeting-time" name="meeting-time" value="${moment().format('YYYY-MM-DDTHH:mm')}" min="${moment().format('YYYY-MM-DDTHH:mm')}" max="2050-06-14T00:00" placeholder="${moment().format('YYYY-MM-DDTHH:mm')}">`,
        confirmButtonText: 'Agendar',
        confirmButtonColor: '#48D7E5',
        background: '#0E0E19',
        focusConfirm: false,
        preConfirm: () => { 
            const popup = Swal.getPopup();
            const name = popup.querySelector('#name').value.trim();
            const email = popup.querySelector('#email').value.trim();
            const phone = popup.querySelector('#phone').value.trim();
            const topic = popup.querySelector('#topic').value.trim();
            const dateTime = popup.querySelector('#meeting-time').value;
            if (!topic) {
                Swal.showValidationMessage('Ingresa tu motivo');
                return null;
            }
            if (!phone) {
                Swal.showValidationMessage('Ingresa tu numero');
                return null;
            }
            if (!email) {
                Swal.showValidationMessage('Ingresa tu correo');
                return null;
            }
            if (!name) {
                Swal.showValidationMessage('Ingresa tu nombre');
                return null;
            }
            if (!dateTime) {
                Swal.showValidationMessage('Ingresa la fecha y hora');
                return null;
            }
            return { name, email, phone, topic, dateTime };
        }
    });
}
