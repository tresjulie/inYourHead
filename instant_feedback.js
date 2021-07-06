//erstellt zum ersten Mal und mit richtigen Klassen am 27.06.2021
//überarbeitet am 30.06
export default class InstantFeedback {
  constructor(message) {
    //es muss imemer alles in den Construcktur geschrieben werden, aber es muss dann nciht immer alles aufgerufen werden?
    this.x = 400;
    this.y = 35;
    // this.width = width;
    this.width=477;
    this.height = height;
    this.message = message;
    this.line = line;
    //Zeilenabstand
    this.textLeading = 4;

    // this.feedbackTextForNotebook = [];
    // this.instantFeedbackForNotebook = ["Ich bin der erste lange Text im Notebook passend zum ersten Instant Feedback", "hallo ich bin Nummer 2 und ich bin auch dabei"];
    // this.instantFeedback=["Ich bin das erste Instant Feedback, ganz klein und ganz fein", "hallo ich bin die kleine Nummer 2"];
   
  }
  messageHeight(maxWidth) {
    //text wird überall dort, wo ein Leerzeichen ist, gespalten und als neues Element in einem Array aufgerufen
    let text = this.message.split(" ");
    //hier wird nur this.line erzeigt, ohne ihm einen Wert zuzuweisen
    this.line = "";
    //wenn textHeight und textLeaning nicht verschieden definiert werden, funktioniert textHeight += this.textLeading; nicht mehr
    let textHeight = this.textLeading;
    for (let i = 0; i < text.length; i++) {
      //hier wird jetzt jedes Wort einzeln durchgegangen und mit einem Leerzeichen ergänzt, damit der Text lesbar ist.
      let textLine = this.line + text[i] + " ";
      //The p5.js API provides a lot of functionality for creating graphics, but there is some native HTML5 Canvas functionality that is not exposed by p5. You can still call it directly using the variable drawingContext, as in the example shown.(https://p5js.org/reference/#/p5/drawingContext)
      let textWidth = drawingContext.measureText(textLine).width;
      //hier wird, wenn die Textlänge einer Zeile den maximalen Wert, den diese Annehmen soll,überschreitet, eine Zeile hinzugeefügt
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

  display() {
    //weiterhin wird die Texthöhe als this.height definiert
    this.height = this.messageHeight(this.textLeading);
    fill(255);
    rect(this.x, this.y, this.width, this.height+20, 10);
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
    
  }

  displayText(){
    push();
    fill(255,0,0);
    textSize(20);
    text(this.message, this.x + 10, this.y + 10, this.width - 20);
    pop();
  }
  hitTest() {
    if (
      mouseX>=this.x &&
      mouseX<=this.x+this.width&&
      mouseY>=this.y&&
      mouseY<=this.y+this.height
      /*mouseX >= this.x + this.width -20 &&
      mouseX <= this.x + this.width-10  &&
      mouseY >= this.y+20 &&
      mouseY <= this.y + 30*/
    ) {
      return true;
    } else {
      return false;
    }
  }
}


class Notebook extends InstantFeedback {
  constructor(x,y,width, height) {
    super(x, y, width, height); //von der Elternklasse -brauchen wir hier diese Werte? die spielen ja eigentlich keine wichtige Rolle
    this.x = 35;
    this.y = 35;
    this.width = width;
    this.height = height;
  }
  displayNotebook() {
    push();
    noStroke();
    fill(255);
    triangle(this.x+15,this.y+60,this.x+25,this.y+48,this.x+35,this.y+60);
    rect(this.x, this.y+60, this.width, this.height, 10);
    pop();
    //hier fehlt noch das kleine Dreick um zurück zu kommen
  }

  
}
/*mouseX > this.x + this.width -20 &&
mouseX < this.x + this.width-10  &&
mouseY > this.y+20 &&
mouseY < this.y + 30*/