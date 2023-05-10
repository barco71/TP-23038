const botonEnviar = document.getElementById('enviar');
botonEnviar.addEventListener('click', validarFormulario);

function validarFormulario() {
    // Validar el nombre
    const nombreInput = document.getElementById('nombre');
    const nombre = nombreInput.value;
    const mensajeError = document.getElementById('mensajeError');
  
    if (nombre === '') {
      mensajeError.textContent = 'Por favor, ingrese su nombre.';
      nombreInput.focus();
      return false;
    }
  
    // Validar el apellido
    const apellidoInput = document.getElementById('apellido');
    const apellido = apellidoInput.value;
  
    if (apellido === '') {
      mensajeError.textContent = 'Por favor, ingrese su apellido.';
      apellidoInput.focus();
      return false;
    }
  
    // Validar el correo
    const correoInput = document.getElementById('correo');
    const correo = correoInput.value;
  
    if (correo === '') {
      mensajeError.textContent = 'Por favor, ingrese su correo.';
      correoInput.focus();
      return false;
    }
  
    // Validar el teléfono
    const telefonoInput = document.getElementById('telefono');
    const telefono = telefonoInput.value;
  
    if (telefono === '') {
      mensajeError.textContent = 'Por favor, ingrese su teléfono.';
      telefonoInput.focus();
      return false;
    }
  
    // Validar el mensaje
    const mensajeInput = document.getElementById('mensaje');
    const mensaje = mensajeInput.value;
  
    if (mensaje === '') {
      mensajeError.textContent = 'Por favor, ingrese un mensaje.';
      mensajeInput.focus();
      return false;
    }
  
    // Si todas las validaciones pasan, enviar el formulario
    mensajeError.textContent = '';
    alert('Formulario enviado exitosamente!');
    // Aquí puedes agregar la lógica para enviar el formulario al servidor
    return true;
  }
  
  document.getElementById('enviar').addEventListener('click', validarFormulario);
  
  // Agregar eventos blur a cada elemento del formulario
  const inputs = document.querySelectorAll('input[type="text"], textarea');
  inputs.forEach(input => {
    input.addEventListener('blur', validarCampo);
  });
  function validarCampo(event) {
    const campo = event.target;
  
    if (campo.value === '') {
      alert('Este campo es obligatorio.');
      setTimeout(() => {
        campo.focus();
      }, 0);
    }
  }
  
  
  