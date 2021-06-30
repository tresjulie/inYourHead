//erstellt zum ersten Mal und mit richtigen Klassen am 27.06.2021
//überarbeitet am 30.06
export default class InstantFeedback {
  constructor(x, y, width, height) {
    //es muss imemer alles in den Construcktur geschrieben werden, aber es muss dann nciht immer alles aufgerufen werden?
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.feedbackTextForNotebook = [];
    this.instantFeedbackForNotebook = ["Ich bin der erste lange Text im Notebook passend zum ersten Instant Feedback", "hallo ich bin Nummer 2 und ich bin auch dabei"];
    this.instantFeedback=["Ich bin das erste Instant Feedback, ganz klein und ganz fein", "hallo ich bin die kleine Nummer 2"];
   
  }
  display(n) {
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
    text(this.instantFeedback[n], this.x + 10, this.y + 30, this.width - 20);
    pop();
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
  displayNotebook(message) { //wird bald ersetzt durch passende Grafik
    fill(255);
    rect(this.x, this.y, this.width, this.height, 10);
    push();
    // fill(0);
    // text(message, this.x + 20, this.y + 10,this.width -20);
    pop();
  }

  
}
