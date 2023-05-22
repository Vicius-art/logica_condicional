function preguntarTarea() {
  var respuesta = prompt("¿Hiciste la tarea? (responde 'si' o 'no')");
  var resultado = document.getElementById('resultado');
  
  if (respuesta.toLowerCase() === 'si') {
    resultado.textContent = "¡Bien hecho!";
  } else if (respuesta.toLowerCase() === 'no') {
    resultado.textContent = "No te rindas, ¡empieza ya mismo!";
  } else {
    resultado.textContent = "Respuesta inválida. Por favor, responde 'si' o 'no'.";
  }
}