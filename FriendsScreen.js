import Button from "./neueButtons.js";
let nextbutton2 = new Button(465, 450, 230, 65, "Weiter", "c9a6b9");

export default class FriendsScreen {
  constructor() {}
  display() {
    rect(50, 50, 100);
    image(this.picture, 0, 0, 1162, 700);
    nextbutton2.display();
  }
  hitTest() {
    if (
      mouseX >= nextbutton2.x &&
      mouseX <= nextbutton2.x + nextbutton2.width &&
      mouseY >= nextbutton2.y &&
      mouseY <= nextbutton2.y + nextbutton2.height
    ) {
      return true;
    } else {
      return false;
    }
  }
}
