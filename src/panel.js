/*
Crea una clase Panel en la carpeta src

Esta clase deberá poder pintar en pantalla la palabra a decifrar y actualizarla en pantalla con forme el usuario lo vaya adivinando.

Similar a las imagenes adjuntas
 */

class Panel {
  constructor() {
    this._vector = ["Perro", "Gato", "Conejo", "Caballo"];
    this._wordselected = "";
    this._result = [];
    this._lines = [];
  }

  choiseWord() {
    const id = Math.floor(Math.random() * (this._vector.length - 0), 0);
    this._wordselected = this._vector[id]
    console.log(id, this._wordselected);
  }

  drawLines(){
    const word = Array.from(this._wordselected)
    
    for (let index = 0; index < word.length; index++) {
        
        this._lines.push('_')
    }
    

    
  }

}

const P = new Panel();
P.choiseWord();

console.log(P.drawLines())
