/*Crea una clase Result dentro de la carpeta src donde puedas manejar:
-mensaje de Victoria con la palabra que debía adivinar
-mensaje de Derrota con la palabra que debía adivinar
-mensaje para jugar nuevamente.

Además debe incluir una función similar a este para que muestre el resultado en el HTML

showResult(isWin, word'){}

Recuerda:Si hago click en jugar nuevamente debe permitirme volver a iniciar.
Solo si quisieras probar que esta clase cumple con lo requerido, deberías hacer algo similar a esto:
result.showResult(true, 'javascript'); // Mensaje de Victoria
result.showResult(false, 'estudiar'); //Mensaje de derrota
*/

class Result {
  constructor() {
    this._victoryMessage = "¡Felicidades, has ganado!";
    this._defeatMessage = "¡Has perdido! La palabra era:";
    this._playAgainMessage = "Presiona el botón para jugar nuevamente";
  }

  getVictoryMessage(word) {
    return `${this._victoryMessage} ${word}`;
  }

  getDefeatMessage(word) {
    return `${this._defeatMessage} ${word}`;
  }

  getPlayAgainMessage() {
    return this._playAgainMessage;
  }
}

export { Result };
