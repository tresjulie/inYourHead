export default class SpeechBubble {
  constructor(x, y, message, height, person, hitter, hitterNumber, hit) {
    this.x = x;
    this.y = y;
    this.message = message;
    this.height = height;
    this.person = person;
    this.hitter = hitter;
    this.hitterNumber = hitterNumber;
    this.done = false;
  }
  display(direction, picture, message) {
    push();
    //hitter
    if (this.hitter === false) {
      translate(this.x, this.y);
      if (direction === "left") {
        image(picture, 0, 0, 100, this.height);
        if (this.hitterNumber === 0) {
          triangle(
            80,
            this.height - 45,
            90,
            this.height - 40,
            80,
            this.height - 35
          );
        }
        // https://editor.p5js.org/gfm262/sketches/TGK6Th4Xr
        text(message, 10, 40, 10, 200);
      }
      if (direction === "right") {
        scale(-1, 1);
        image(picture, -100, 0, 100, this.height);
        scale(-1, 1);
        if (this.hitterNumber === 0) {
          triangle(
            80,
            this.height - 45,
            90,
            this.height - 40,
            80,
            this.height - 35
          );
        }
        text(message, 10, 40, 10, 200);
      }
    }

    pop();
  }
  heightmeasure() {
    push();
    //https://editor.p5js.org/Tiri/sketches/LfGW4AjOz
    var messagewidth = textWidth(this.message);
    if (messagewidth >= 10 && this.done === false) {
      this.height = this.height + (messagewidth - 10);
      this.done = true;
    }
    pop();
  }
  hitTest(hit) {
    push();
    if (
      (mouseIsPressed &&
        mouseX >= this.x + 80 &&
        mouseX <= this.x + 90 &&
        mouseY >= this.y + this.height - 45 &&
        mouseY <= this.y + this.height - 35) ||
      hit > 0
    ) {
      this.y = this.y - this.height - 10;
      this.hitterNumber = this.hitterNumber + 1;
      if (this.hitterNumber > 1) {
        this.hitter = true;
      }
    }
    pop();
  }
  all(hit, direction, picture, message) {
    push();
    this.heightmeasure();
    this.hitTest(hit);
    this.display(direction, picture, message);
    pop();
  }
}
