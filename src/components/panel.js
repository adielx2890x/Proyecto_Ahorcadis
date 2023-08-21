/*
Crea una clase Panel en la carpeta src

Esta clase deberá poder pintar en pantalla la palabra a decifrar y actualizarla en pantalla con forme el usuario lo vaya adivinando.

Similar a las imagenes adjuntas
 */

// panel.js
import { PokenApi } from "../api/pokemon-api.js";

class Panel {
  constructor() {
    this._PokenApi = new PokenApi();
    this._wordselected = "";
    this._lines = [];
  }

  async choiseWord() {
    const id = Math.floor(Math.random() * (200 - 1), 0);
    const data = await this._PokenApi.getData(id);
    console.log(data.name.toUpperCase());
    this._wordselected = data.name.toUpperCase();
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
