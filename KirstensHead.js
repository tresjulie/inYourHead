import Button from "./ButtonTest.js";

let firstButton = new Button(100, 100, "TEST");
firstButton.display();

function mouseClicked() {
  if (firstButton.hitTest()) {
    //Farbe ändern bei Klick? Sonst ohne if
  }
}
