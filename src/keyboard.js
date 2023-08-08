/*
Crea una clase Keyboard en la carpeta src.
Esta clase será la encargada de pintar el alfabeto en pantalla
similar a la imagen adjunta.
Por lo que la clase deberá tener una propiedad que contenga el
alfabeto.
Además de las siguientes funciones:

    createKeyboard() : Encargada de crear cada letra obtenida de la propiedad alfabeto y además agregarla a algún contenedor HTML.
    showCorrect(letter):Encargada de recibir una letra del alfabeto y marcarla como correcta según requerimientos.
    showInCorrect(letter):Encargada de recibir una letra del alfabeto y marcarla como incorrecta según requerimientos.

Puedes agregar más funciones si así lo necesitas.

Una manera de probar esta clase sería

→ llamando a createKeyboard y verificando que pinte el alfabeto en mi sitio.

→ probando pintan cualquier letra
keyboard.showCorrect('E');
keyboard.showCorrect('I');
 */

class Keyboard {
  constructor() {
    this.keys = 
      [
      "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ", "Z", "X", "C", "V", "B", "N", "M" 
    ]
  }
  drawKeyboard() {
    this.keys.map((key) => {});
    console.log(this.keys);

    return this.drawKeyboard
  }
}
console.log(Keyboard)