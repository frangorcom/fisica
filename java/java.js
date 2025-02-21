document.addEventListener('DOMContentLoaded', function () {
  // Función para manejar el clic en los botones
  function toggleSolucion(buttonId, procedimientoId) {
    const button = document.getElementById(buttonId);
    const procedimiento = document.getElementById(procedimientoId);

    if (button && procedimiento) {
      button.addEventListener('click', function () {
        procedimiento.classList.toggle('hidden');

        // Cambiar el texto del botón
        if (procedimiento.classList.contains('hidden')) {
          this.textContent = 'Solución';
        } else {
          this.textContent = 'Ocultar Solución';
        }
      });
    } else {
      console.error(`No se encontró el botón o el procedimiento: ${buttonId}, ${procedimientoId}`);
    }
  }

  // Aplicar la función a cada sección
  toggleSolucion('mostrar-solucion-1', 'procedimiento-1');
  toggleSolucion('mostrar-solucion-2', 'procedimiento-2');
  toggleSolucion('mostrar-solucion-3', 'procedimiento-3');
  toggleSolucion('mostrar-solucion-4', 'procedimiento-4');
  toggleSolucion('mostrar-solucion-5', 'procedimiento-5');
  toggleSolucion('mostrar-solucion-6', 'procedimiento-6');
});