/*
Crea una clase Panel en la carpeta src

Esta clase deberá poder pintar en pantalla la palabra a decifrar y actualizarla en pantalla con forme el usuario lo vaya adivinando.

Similar a las imagenes adjuntas
 */

// panel.js
class Panel {
  constructor() {
    this._vector = ["PERRO", "GATO", "CONEJO", "CABALLO"];
    this._wordselected = "";
    this._result = [];
    this._lines = [];
  }

  choiseWord() {
    const id = Math.floor(Math.random() * this._vector.length);
    this._wordselected = this._vector[id];
  }

  drawLines() {
    this._lines = Array.from(this._wordselected).map(() => "_");
  }

  putOnHtml() {
    const panelBox = document.getElementById("panelBox");
    this._lines.forEach((line) => {
      const lineElement = document.createElement("span");
      lineElement.textContent = line + " ";
      panelBox.appendChild(lineElement);
    });
  }

  updatePanel(letra) {
    for (let i = 0; i < this._wordselected.length; i++) {
      if (this._wordselected[i] === letra) {
        this._lines[i] = letra;
      }
    }

    const panelBox = document.getElementById("panelBox");
    panelBox.innerHTML = "";

    this.putOnHtml();
  }
}

export { Panel };
