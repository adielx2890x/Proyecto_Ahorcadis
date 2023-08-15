import { Keyboard } from "./keyboard.js";
import { Panel } from "./panel.js";
import { BodyParts } from "./bodyparts.js";
import { Result } from "./result.js";

document.addEventListener("DOMContentLoaded", () => {
  let keyboard = new Keyboard();
  let panel = new Panel();
  let bodyParts = new BodyParts();
  let result = new Result();

  panel.choiseWord();
  panel.drawLines();
  panel.putOnHtml();

  keyboard.drawKeyboard(panel);

  const bodyPartImage = document.getElementById("bodyPartImage");
  const victoryMessage = document.getElementById("victoryMessage");
  const defeatMessage = document.getElementById("defeatMessage");
  const playAgainButton = document.getElementById("playAgainButton");

  function restartGame() {
    panel.choiseWord();
    panel.drawLines();
    panel.putOnHtml();
    victoryMessage.textContent = "";
    defeatMessage.textContent = "";
    playAgainButton.style.display = "none";
    bodyParts._currentPartIndex = 1;
    

    bodyPartImage.src = "/assets/images/1.png";

  }

  playAgainButton.addEventListener("click", restartGame);

  document.querySelectorAll(".keysButtons").forEach((button) => {
    button.addEventListener("click", () => {
      const letraAdivinada = button.textContent;

      if (panel._wordselected.includes(letraAdivinada)) {
        panel.updatePanel(letraAdivinada);
        if (panel._lines.join("") === panel._wordselected) {
          victoryMessage.textContent = result.getVictoryMessage(
            panel._wordselected
          );
          playAgainButton.style.display = "block";
        }
      } else {
        const nextPartImage = bodyParts.getNextPart();
        if (nextPartImage) {
          bodyPartImage.src = nextPartImage;
        }
        if (bodyParts._currentPartIndex === bodyParts._parts.length) {
          defeatMessage.textContent = result.getDefeatMessage(
            panel._wordselected
          );
          playAgainButton.style.display = "block";
        }
      }
    });
  });
});
