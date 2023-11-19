// VARIABLES
let jugadorActual = 'X';
let juegoActivo = true;
let resultadoElement;






// FUNCIONES

function placeMark(celda) {
  if (!celda.textContent && juegoActivo) {
    celda.textContent = jugadorActual;

    if (checkWinner()) {
      juegoActivo = false;
    } else {
      jugadorActual = jugadorActual === 'X' ? 'O' : 'X';
      document.getElementById('turno').textContent = `Es el turno del jugador ${jugadorActual}`;
    }
  }
}



function checkWinner() {
  const celdas = document.querySelectorAll('.celda');
  resultadoElement = document.getElementById('resultado');
  
  const lineasGanadoras = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
    [0, 4, 8], [2, 4, 6]             // Diagonales
  ];

  for (const linea of lineasGanadoras) {
    const [a, b, c] = linea;
    if (celdas[a].textContent && celdas[a].textContent === celdas[b].textContent && celdas[a].textContent === celdas[c].textContent) {
      resultadoElement.textContent = `¡El jugador ${jugadorActual} ha ganado!`;
      resultadoElement.style.opacity = 1;
      resultadoElement.style.fontSize = '2em';
      resultadoElement.style.marginTop = '30px';
      juegoActivo = false;
      return true;
    }
  }

  if ([...celdas].every(celda => celda.textContent)) {
    resultadoElement.textContent = '¡Es un empate!';
    resultadoElement.style.opacity = 1;
    resultadoElement.style.fontSize = '2em';
    resultadoElement.style.marginTop = '30px';
    juegoActivo = false;
    return true;
  }

  return false;
}



function resetGame() {
  const celdas = document.querySelectorAll('.celda');

  
  celdas.forEach(celda => celda.textContent = '');
  jugadorActual = 'X';
  juegoActivo = true;
  document.getElementById('turno').textContent = 'Es el turno del jugador X';

  resultadoElement.textContent = '';
  resultadoElement.style.opacity = 0;
}


document.querySelector('button').addEventListener('click', resetGame);

