// Función para redirigir a la página de "upload.html"
function redirectToUpload() {
  window.location.href = "upload.html";
}

// Función para redirigir a la página de "biblioteca.html"
function redirectToLibrary() {
  window.location.href = "biblioteca.html";
}

// Función para validar campos de entrada
function validarCampo(input) {
  const valor = input.value.trim();
  if (valor === '') {
      input.classList.add('invalid');
  } else {
      input.classList.remove('invalid');
  }
}

// Función para validar una dirección de correo electrónico
function validarEmail() {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const emailInput = document.getElementById("registroEmailInput");
  const resultadoEmail = document.getElementById("resultadoEmail");
  
  if (!emailRegex.test(emailInput.value)) {
      resultadoEmail.textContent = "La dirección de correo electrónico no es válida.";
      return false;
  }
  
  resultadoEmail.textContent = "";
  return true;
}

// Función para validar un número de teléfono
function validarTelefono() {
  const phoneRegex = /^\d{10}$/; // Se asume que el número debe contener exactamente 10 dígitos
  const telefonoInput = document.getElementById("telefono");
  const resultadoTelefono = document.getElementById("resultadoTelefono");
  
  if (!phoneRegex.test(telefonoInput.value.replace(/\D/g, ''))) {
      resultadoTelefono.textContent = "El número de teléfono no es válido. Debe contener 10 dígitos.";
      return false;
  }
  
  return true;
}

// Función para validar contraseñas
function validarContrasena() {
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{10,}$/;
  const contrasenaInput = document.getElementById("contrasena");
  const resultadoContrasena = document.getElementById("resultadoContrasena");

  if (!passwordRegex.test(contrasenaInput.value)) {
      resultadoContrasena.textContent = "La contraseña no es válida. Debe contener al menos un carácter en mayúscula, al menos un dígito y tener al menos 10 caracteres.";
      return false;
  }
  resultadoContrasena.textContent = "";
  return true;
}

// Función para verificar que las contraseñas coincidan
function verificarContrasenas() {
  const contrasenaInput = document.getElementById("contrasena").value;
  const confirmarContrasenaInput = document.getElementById("confirmarContrasena").value;
  const mensajeContrasenas = document.getElementById("mensajeContrasenas");

  if (contrasenaInput !== confirmarContrasenaInput) {
      mensajeContrasenas.textContent = "Las contraseñas no coinciden.";
      return false;
  } else {
      mensajeContrasenas.textContent = "";
      return true;
  }
}
