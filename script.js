// Función principal para validar el formulario antes de enviarlo
function validarFormulario() {
  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const cedula = document.getElementById("cedula").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const fechaNacimiento = document.getElementById("fecha-nacimiento").value;

  // Validación básica de campos vacíos (ya cubierta por "required", pero la reforzamos)
  if (!nombre || !apellido || !cedula || !email || !telefono || !fechaNacimiento) {
    alert("Todos los campos son obligatorios.");
    return false;
  }

  // Validación de cédula: solo números y longitud mínima
  if (isNaN(cedula) || cedula.length < 8) {
    alert("La cédula debe contener solo números y tener al menos 8 dígitos.");
    return false;
  }

  // Validación de correo usando expresión regular
  const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/;
  if (!regexEmail.test(email)) {
    alert("Ingrese un correo electrónico válido.");
    return false;
  }

  // Validación de teléfono: solo números
  if (isNaN(telefono)) {
    alert("El número de teléfono debe ser numérico.");
    return false;
  }

  // Validación de fecha: que no sea futura
  const hoy = new Date();
  const fechaNac = new Date(fechaNacimiento);
  if (fechaNac > hoy) {
    alert("La fecha de nacimiento no puede ser futura.");
    return false;
  }

  // Si todo es válido
  alert("Formulario enviado correctamente ✅");
  return true;
}
