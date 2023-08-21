/*
Crea en la carpeta src una Clase BodyParts.

Esta clase deberá tener como propiedad un arreglo de imagenes(Las imagenes que ya agregaste en uno de los tiquetes anteriores).

Además deberá tener una función encargada de actualizar la imagen según los intentos que vayan quedando.
 */

class BodyParts {
  constructor() {
    this._parts = [
      "/assets/images/1.png",
      "/assets/images/2.png",
      "/assets/images/3.png",
      "/assets/images/4.png",
      "/assets/images/5.png",
      "/assets/images/6.png",
      "/assets/images/7.png",
    ];
    this._currentPartIndex = 1;
  }

  getNextPart() {
    if (this._currentPartIndex < this._parts.length) {
      const imageUrl = this._parts[this._currentPartIndex];
      this._currentPartIndex++;
      return imageUrl;
    }
    return null;
  }
}

export { BodyParts };
