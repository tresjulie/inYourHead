import Button from "./Button.js";

let firstButton = new Button(100, 100, "TEST");

function mouseClicked() {
  firstButton.hitTest();
}
