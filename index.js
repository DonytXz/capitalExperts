
function submitted() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Enviado',
        showConfirmButton: false,
        timer: 2000
    })
}
function callForm() {
    Swal.fire({
        // title: 'WHO IS REQUESTING THIS REPORT?',
        html: `
        <h1 class="text-2xl mb-2 text-white mb-5 montserrat font-bold uppercase">¡Agenda una llamada con un asesor!</h1>
        <label class="text-xl text-white montserrat" >Nombre</label>
        <input style="background-color: #ffff; color:black;"  type="text" id="name" class="montserrat my-3  h-12 w-full">
        <label class="text-xl text-white montserrat">Numero</label>
        <input style="background-color: #ffff; color:black;"  type="tel" id="phone" class="montserrat my-3 h-12 w-full">
        <label class="text-xl text-white montserrat ">Motivo de la consulta</label>
        <input style="background-color: #ffff; color:black;" type="tel" id="topic" class="montserrat my-3 h-12 w-full"></br></br>
        <label class="text-xl text-white montserrat" for="meeting-time">Eliga la fecha y hora preferidas:</label>
        <input class="my-3 h-12 w-full montserrat" style="background-color: #ffff; color:black;" type="datetime-local" id="meeting-time" name="meeting-time" value=${moment().format()} min=${moment().format()}  max="2050-06-14T00:00" placeholder=${moment().format()}>`,
        confirmButtonText: 'Agendar',
        confirmButtonColor: '#48D7E5',
        background: '#0E0E19',
        focusConfirm: false,
        preConfirm: () => { 
            const name = Swal.getPopup().querySelector('#name').value
            const email = Swal.getPopup().querySelector('#email').value
            const phone = Swal.getPopup().querySelector('#phone').value
            const topic = Swal.getPopup().querySelector('#topic').value
            const dateTime = Swal.getPopup().querySelector('#meeting-time').value
            if (!topic) {
                Swal.showValidationMessage(`Ingresa tu motivo`)
            }
            if (!phone) {
                Swal.showValidationMessage(`Ingresa tu numero`)
            }
            if (!email) {
                Swal.showValidationMessage(`Ingresa tu correo`)
            }
            if (!name) {
                Swal.showValidationMessage(`Ingresa tu nombre`)
            }
            if (!dateTime) {
                Swal.showValidationMessage(`Ingresa la fecha y hora`)
            }
            return { name: name, email: email, phone: phone, topic: topic, dateTime : dateTime }
        }
    })
}

// function optionIMG() {
//     var option1 = document.getElementById("option1")
//     var option2 = document.getElementById("option2")
//     var option3 = document.getElementById("option3")
//     var option4 = document.getElementById("option4")
//     option1.src('./assets/icons/vector-1.svg')
//     option2.src('./assets/icons/vector-2.svg')
//     option3.src('./assets/icons/vector-3.svg')
//     option4.src('./assets/icons/vector-4.svg')
// }
