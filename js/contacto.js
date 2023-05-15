function validarFormulario(){
  const nombreInput = document.getElementsByName("Nombre")[0].value;
  const apellidoInput = document.getElementsByName("Apellido")[0].value;
  const correoInput = document.getElementsByName("Correo")[0].value;
  const telInput = document.getElementsByName("telefono")[0].value;
  const mensajeError = document.getElementById("mensajeError");
  const mensajeExito = document.getElementById("mensajeExito");
  

  mensajeError.innerHTML = "";
  mensajeExito.innerHTML = "";

  //validar nombre
  const expresionRegularLetras = /^[A-Za-z]+$/;
  if (!expresionRegularLetras.test(nombreInput)) {
    mensajeError.innerHTML = "Por favor, ingresa un nombre válido que contenga solo letras.";
    return;}
  if (nombreInput.length < 2){
    mensajeError.innerHTML = "Por favor, ingresa un nombre valido con al menos dos caracteres.";
    return
  }
  //validar apellido
  if (!expresionRegularLetras.test(apellidoInput)) {
    mensajeError.innerHTML = "Por favor, ingresa un apellido válido que contenga solo letras.";
    return;}
  if (apellidoInput.length < 2){
    mensajeError.innerHTML = "Por favor, ingresa un apellido valido con al menos dos caracteres.";
    return
  }
  //validar correo
  const expresionRegularCorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!expresionRegularCorreo.test(correoInput)) {
    mensajeError.innerHTML = "Por favor, ingresa un correo electrónico válido.";
    return;
  }
  
  //validar telefono
  const expresionRegularTelefono = /^\d{10}$/;
  console.log(expresionRegularTelefono.test(telInput))
  if (!expresionRegularTelefono.test(telInput)) {
    mensajeError.textContent = "Por favor, ingresa un número de teléfono válido de 10 dígitos. Sin el 0 adelante";
    return;
  }
  /*if (telInput.length < 10){
    mensajeError.innerHTML = "Por favor, ingresa un número de teléfono válido de 10 dígitos."
  }*/
}

/*function validarFormulario() {
  const nombreInput = document.getElementsByName('Nombre')[0];
  const apellidoInput = document.getElementsByName('Apellido')[0];
  const correo = document.getElementsByName('correo')[0].value;
  const telefono = document.getElementsByName('telefono')[0].value;
  const mensaje = document.getElementById('mensaje').value;
  const mensajeError = document.getElementById('mensajeError');
  const mensajeExito = document.getElementById('mensajeExito');

  // Reiniciar los mensajes
  mensajeError.textContent = "";
  mensajeExito.textContent = "";

  // Validar nombre y apellido con expresión regular
  const expresionRegularLetras = /^[A-Za-z]+$/;
  if (!expresionRegularLetras.test(nombreInput.value)) {
    mensajeError.textContent = "Por favor, ingresa un nombre válido que contenga solo letras.";
    return;
  }
  if (nombreInput.value.length < 2) {
    mensajeError.textContent = "Por favor, ingresa un nombre válido con al menos dos caracteres.";
    return;
  }

  if (!expresionRegularLetras.test(apellidoInput.value)) {
    mensajeError.textContent = "Por favor, ingresa un apellido válido que contenga solo letras.";
    return;
  }
  if (apellidoInput.value.length < 2) {
    mensajeError.textContent = "Por favor, ingresa un apellido válido con al menos dos caracteres.";
    return;
  }

  // Validar correo electrónico utilizando una expresión regular
  const expresionRegularCorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!expresionRegularCorreo.test(correo)) {
    mensajeError.textContent = "Por favor, ingresa un correo electrónico válido.";
    return;
  }

  // Validar número de teléfono utilizando una expresión regular
  const expresionRegularTelefono = /^\d{10}$/;
  if (!expresionRegularTelefono.test(telefono)) {
    mensajeError.textContent = "Por favor, ingresa un número de teléfono válido de 10 dígitos.";
    return;
  }

  if (mensaje === "") {
    mensajeError.textContent = "Por favor, ingresa un mensaje.";
    return;
  }

  //
}
*/