import Button from "neueButtons.js";
let verstandenbutton = new Button(825, 560, 230, 65, "Verstanden", "c9a6b9");
let weiterbutton = new Button(825, 560, 230, 65, "Weiter", "c9a6b9");

export default class TutorialScreen {
  constructor(picture1, picture2) {
    this.picture1 = picture1;
    this.picture2 = picture2;
  }
  displayfirst() {
    image(this.picture1, 0, 0, 1162, 700);
    weiterbutton.display();
  }
  displaysecond() {
    image(this.picture2, 0, 0, 1162, 700);
    verstandenbutton.display();
  }
  hitTestWeiter() {
    if (
      mouseX >= weiterbutton.x &&
      mouseX <= weiterbutton.x + weiterbutton.width &&
      mouseY >= weiterbutton.y &&
      mouseY <= weiterbutton.y + weiterbutton.height
    ) {
      return true;
    } else {
      return false;
    }
  }
  hitTestVerstanden() {
    if (
      mouseX >= verstandenbutton.x &&
      mouseX <= verstandenbutton.x + verstandenbutton.width &&
      mouseY >= verstandenbutton.y &&
      mouseY <= verstandenbutton.y + verstandenbutton.height
    ) {
      return true;
    } else {
      return false;
    }
  }
}
