export default class Button {
  constructor(x, y, name) {
    this.x = x;
    this.y = y;
    this.buttonName = name;
    /*this.trigger = trigger;
    this.wellBeing = wellBeing;
    this.knowledge = knowledge;*/
  }
  display() {
    fill(0, 200, 0);
    rect(this.x, this.y, 120, 50, 15);
    textSize(20);
    fill(250);
    text(this.buttonName, this.x + 35, this.y + 30);
  }
  hitTest() {
    if (
      mouseX >= this.x &&
      mouseX <= this.x + 120 &&
      mouseY >= this.y &&
      mouseY <= this.y + 50
    ) {
      //this.state = "clicked";
      console.log("Klickt");
      //return true;
    } else {
      console.log("Noch nicht");
      //return false;
    }
  }
}
