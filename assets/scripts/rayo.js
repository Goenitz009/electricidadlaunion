document.addEventListener('click', function(event) {
  // Obtener las coordenadas del clic ajustadas por el desplazamiento
  var clickX = event.clientX + window.pageXOffset;
  var clickY = event.clientY + window.pageYOffset;

  // Crear un nuevo elemento de rayo
  var rayo = document.createElement('div');
  rayo.classList.add('rayo');
  
  // Establecer la posición del rayo en las coordenadas del clic
  rayo.style.left = clickX + 'px';
  rayo.style.top = clickY + 'px';

  // Agregar el rayo al contenedor
  document.body.appendChild(rayo);
  
  // Hacer que el rayo aparezca
  setTimeout(function() {
    rayo.style.opacity = '1';
  }, 10);
  
  // Hacer que el rayo desaparezca después de un tiempo
  setTimeout(function() {
    rayo.style.opacity = '0';
    // Remover el rayo del DOM después de que haya desaparecido
    setTimeout(function() {
      rayo.remove();
    }, 300);
  }, 500);

  // Detener la propagación del evento clic para evitar interferencias con otros elementos
  event.stopPropagation();
});