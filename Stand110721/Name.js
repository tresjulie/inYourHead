import Button from "neueButtons.js";
let verstandenbutton = new Button(825, 560, 230, 65, "Verstanden", "c9a6b9");
let weiterbutton = new Button(825, 560, 230, 65, "Weiter", "c9a6b9");

export default class Name {
  constructor(picture) {
    this.picture = picture;
  }
  display() {
    image(this.picture1, 0, 0, 1162, 700);
  }
}
