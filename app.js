const studentNameInput = document.getElementById('studentName');
const roomSelect = document.getElementById('roomSelect');
const btnReservar = document.getElementById('btnReservar');
const reservationsList = document.getElementById('reservationsList');

// Función de alerta que generará el conflicto programado
function getAlertMessage(student, room) {
  return `EduRoom: Reserva confirmada para ${student} en el ${room}.`;
  // DETONANTE DEL CONFLICTO: El integrante 4 cambiará esta misma línea de texto
  // en su propia rama antes de fusionar.
}

btnReservar.addEventListener('click', () => {
  const student = studentNameInput.value.trim();
  const room = roomSelect.value;

  if (student === '') {
    alert('Por favor, ingrese el nombre del estudiante.');
    return;
  }

  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <div>
      <strong>${room}</strong> - Líder: ${student}
    </div>
    <button class="btn-cancelar">Liberar</button>
  `;

  const btnCancelar = listItem.querySelector('.btn-cancelar');
  btnCancelar.addEventListener('click', () => {
    listItem.remove();
  });

  reservationsList.appendChild(listItem);

  // Ejecuta la alerta configurada
  alert(getAlertMessage(student, room));
  studentNameInput.value = '';
});