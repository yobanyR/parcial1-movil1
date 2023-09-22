document.getElementById('formularioContacto').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var nombre = document.getElementById('nombre').value;
    var telefono = document.getElementById('telefono').value;
    var correo = document.getElementById('correo').value;

    var mensaje = "Apreciado " + nombre + " hemos recibido su mensaje. Nos comunicaremos al teléfono " + telefono + " o dirección de email " + correo + " en los próximos días.";
    alert(mensaje);
});