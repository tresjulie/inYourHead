import Button from "./Button.js";
let name = "TEST";

let firstButton = new Button(100, 100, name);
firstButton.display();
//firstButton.colourchange();

function mouseClicked() {
  firstButton.hitTest();
}
