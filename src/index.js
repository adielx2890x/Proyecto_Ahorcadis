import { Keyboard } from "./components/keyboard.js";
import { Panel } from "./components/panel.js";
import { BodyParts } from "./components/bodyparts.js";
import { Result } from "./components/result.js";

document.addEventListener("DOMContentLoaded", () => {

  const startButton = document.getElementById("startButton");
  const startGameDiv = document.getElementById("startGame");
  const gameContainerDiv = document.getElementById("gameContainer");

  startButton.addEventListener("click", () => {
    startGameDiv.style.display = "none";       
    gameContainerDiv.style.display = "flex";  
  });
});

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
    gameEnded = false
    const panelBox = document.getElementById("panelBox");
    panelBox.innerHTML = "";
    panel.choiseWord();
    panel.drawLines();
    panel.putOnHtml();
    victoryMessage.textContent = "";
    defeatMessage.textContent = "";
    playAgainButton.style.display = "none";
    bodyParts._currentPartIndex = 1;
    bodyPartImage.src = "/assets/images/1.png";
    keyboard.resetKeys();
    keyboard.enableColorChanges()
  }

  let gameEnded = false;

  playAgainButton.addEventListener("click", restartGame);

  document.querySelectorAll(".keysButtons").forEach((button) => {
    button.addEventListener("click", () => {
      if (!gameEnded ) {
        const letraAdivinada = button.textContent;



        if (panel._wordselected.includes(letraAdivinada)) {
          panel.updatePanel(letraAdivinada);
          if (panel._lines.join("") === panel._wordselected) {
            gameEnded = true;
            victoryMessage.textContent = result.getVictoryMessage(
              panel._wordselected
            );
            playAgainButton.style.display = "block";
            keyboard.disableColorChanges();
          }
        } else {
          const nextPartImage = bodyParts.getNextPart();
          if (nextPartImage) {
            bodyPartImage.src = nextPartImage;
          }
          if (bodyParts._currentPartIndex === bodyParts._parts.length) {
            gameEnded = true;
            defeatMessage.textContent = result.getDefeatMessage(
              panel._wordselected
            );
            playAgainButton.style.display = "block";
            keyboard.disableColorChanges();
          }
        }
      }
    });
  });

