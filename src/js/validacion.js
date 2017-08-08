var cargarPagina = function () {
    $('#validar').click(validacionCorreoElectronico, validacionTelefono);

}


var validacionCorreoElectronico = function () {
    var inputEmail = $('#email').val();
    var regex = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);

    // Se utiliza la funcion test() nativa de JavaScript
    if (regex.test($('#email').val().trim())) {
        alert('Correo validado');
    } else {
        alert('La direccón de correo no es valida');
    }

}

var validacionTelefono = function () {
    var inputTelefono = $('#telefono').val();

    if (inputTelefono.length < 10) {
        alert('El teléfono debe de contener 10 carácteres');
    } else {
        alert('Teléfono válido');
    }

}

$(document).ready(cargarPagina);