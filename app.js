const studentNameInput = document.getElementById('studentName');
const roomSelect = document.getElementById('roomSelect');
const btnReservar = document.getElementById('btnReservar');
const reservationsList = document.getElementById('reservationsList');

// Función de alerta que generará el conflicto programado
function getAlertMessage(student, room) {
  return `¡Listo ${student}! Tu cubículo ${room} ha sido reservado con éxito.`;
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