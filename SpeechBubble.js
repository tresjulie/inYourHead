export default class SpeechBubble {
  constructor(message, person) {
    this.x = 100;
    this.y = 200;
    this.message = message;
    this.height = height;
    this.person = person;
    this.hitter = false;
    this.hitterNumber = 0;
    this.done = false;
    this.width = 200;
    this.line = line;
    //nochmal überarbeiten?
    this.textLeading = 3.5;
  }
  messageHeight(maxWidth) {
    let text = this.message.split(" ");
    this.line = "";
    let textHeight = this.textLeading;
    for (let i = 0; i < text.length; i++) {
      let textLine = this.line + text[i] + " ";
      let textWidth = drawingContext.measureText(textLine).width;
      if (textWidth > maxWidth && i > 0) {
        this.line = text[i] + " ";
        // a+=b === a=a+b
        textHeight += this.textLeading;
      } else {
        this.line = textLine;
      }
    }

    return textHeight;
  }
  display(direction, message) {
    this.height = this.messageHeight(this.textLeading);
    console.log(this.height);
    if (this.hitter === false) {
      translate(this.x, this.y);
      if (direction === "left") {
        rect(-10, -10, this.width + 20, this.height + 20, 10);
        if (this.hitterNumber === 0) {
          triangle(
            this.width - 20,
            this.height - 25,
            this.width - 10,
            this.height - 20,
            this.width - 20,
            this.height - 15
          );
        }
        // https://editor.p5js.org/gfm262/sketches/TGK6Th4Xr

        text(message, 0, 0, this.width - 20);
      }
      if (direction === "right") {
        //scale(-1, 1);
        rect(-10, -10, this.width + 20, this.height + 20, 10);
        //scale(-1, 1);
        if (this.hitterNumber === 0) {
          triangle(
            this.width - 20,
            this.height - 25,
            this.width - 10,
            this.height - 20,
            this.width - 20,
            this.height - 15
          );
        }

        text(message, 0, 0, this.width - 20);
      }
    }
  }
  /*
  heightmeasure() {
    push();
    //https://editor.p5js.org/Tiri/sketches/LfGW4AjOz
    var messagewidth = textWidth(this.message);
    if (messagewidth >= 25 && this.done === false) {
      this.height = this.height + Math.floor((messagewidth - 25) / 30) * 5;
      this.done = true;
    }
    pop();
  }*/
  hitTest(hit) {
    push();
    if (
      (mouseIsPressed &&
        mouseX >= this.x + this.width - 20 &&
        mouseX <= this.x + this.width - 10 &&
        mouseY >= this.y + this.height - 25 &&
        mouseY <= this.y + this.height - 15) ||
      hit > 0
    ) {
      this.y = this.y - this.height - 30;
      this.hitterNumber = this.hitterNumber + 1;
      if (this.hitterNumber > 1) {
        this.hitter = true;
      }
    }
    pop();
  }
  all(hit, direction, message) {
    push();
    this.messageHeight();
    this.hitTest(hit);
    this.display(direction, message);
    pop();
  }
}
