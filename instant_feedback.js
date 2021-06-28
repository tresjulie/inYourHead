//erstellt zum ersten Mal und mit richtigen Klassen am 27.06.2021
export default class InstantFeedback {
  constructor(x, y, width, height, message) {
    //es muss imemer alles in den Construcktur geschrieben werden, aber es muss dann nciht immer alles aufgerufen werden?
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.feedbackText = message;
    this.instantFeedbackNotebook = [];
    // this.feedbackgelesen = false; //vielleicht brauchen wir das hier auch nur fürs testen
  }
  display() {
    // if (this.feedbackgelesen === true && this.feedbackgelesen !== false) {
    fill(255);
    rect(this.x, this.y, this.width, this.height, 10);
    push();
    translate(this.x, this.y);
    fill(0);
    triangle(
      this.width - 20,
      this.y + 20,
      this.width - 10,
      this.y + 25,
      this.width - 20,
      this.y + 30
    );
    pop();
    push();
    fill(0);
    textSize(20);
    text(this.instantFeedbackNotebook[0], this.x + 10, this.y + 30);
    pop();
    // }
  }
  hitTest() {
    if (
      mouseX > this.x &&
      mouseX < this.x + this.width &&
      mouseY > this.y &&
      mouseY < this.y + this.height
    ) {
      return true;
    } else {
      return false;
    }
  }
}
/*können wir vielleicht auch den Inhalt des Arrays 
auch Situations abhängig füllen?*/

class Notebook extends InstantFeedback {
  constructor(x, y, width, height) {
    super(x, y, width, height); //von der Elternklasse -brauchen wir hier diese Werte? die spielen ja eigentlich keine wichtige Rolle
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  displayNotebook() {
    fill(255);
    rect(this.x, this.y, this.width, this.height, 10);
    text(this.feedbackText, this.x + 20, this.y + 20);
  }
}
