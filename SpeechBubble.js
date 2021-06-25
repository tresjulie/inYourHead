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
    //Zeilenabstand
    this.textLeading = 3.5;
  }
  //vgl Hilfe von Herr Toepper
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
  display(direction, color) {
    //weiterhin wird ide Texthöhe als this.height definiert
    this.height = this.messageHeight(this.textLeading);
    //wenn der Button einer Sprechblase noch nie gedrückt würde
    if (this.hitter === false) {
      translate(this.x, this.y);
      //die Sprechblasen können rechts, pder links angeordnet sein
      if (direction === "left") {
        //color ist abhängig von der Person und wird in PersonalBubble bzw in dem Array person der Hauptdatei definiert
        fill(color);
        rect(-20, -10, this.width + 20, this.height + 20, 10);
        if (this.hitterNumber === 0) {
          //wenn die Höhe kleiner als 10 ist, entsteht das Problem, dass der Pfeil zu weit oben angezeigt würde, weshalb es ein Sonderfall ist
          if (this.height > 10) {
            triangle(
              this.width - 20,
              this.height - 25,
              this.width - 10,
              this.height - 20,
              this.width - 20,
              this.height - 15
            );
          } else if (this.height <= 10) {
            triangle(
              this.width - 20,
              0,
              this.width - 10,
              5,
              this.width - 20,
              10
            );
          }
        }
        // https://editor.p5js.org/gfm262/sketches/TGK6Th4Xr
        fill(0, 0, 0);
        text(this.message, -10, 0, this.width - 20);
      }
      if (direction === "right") {
        //scale(-1, 1);
        fill(color);
        rect(-10, -10, this.width + 20, this.height + 20, 10);
        //scale(-1, 1);
        if (this.hitterNumber === 0) {
          if (this.height > 10) {
            triangle(
              this.width - 20,
              this.height - 25,
              this.width - 10,
              this.height - 20,
              this.width - 20,
              this.height - 15
            );
          } else if (this.height <= 10) {
            triangle(
              this.width - 20,
              0,
              this.width - 10,
              5,
              this.width - 20,
              10
            );
          }
        }
        fill(0, 0, 0);
        text(this.message, 0, 0, this.width - 20);
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
    //vgl oben es gibt 2 Anordnungen für einen Pfeil
    if (this.height > 10) {
      if (
        (mouseIsPressed &&
          mouseX >= this.x + this.width - 20 &&
          mouseX <= this.x + this.width - 10 &&
          mouseY >= this.y + this.height - 25 &&
          mouseY <= this.y + this.height - 15) ||
        hit > 0
      ) {
        //die Sprechblase wird entsprechend der Höhe der folgenden Sprechblase nach oben verschoben
        this.y = this.y - this.height - 30;
        this.hitterNumber = this.hitterNumber + 1;
        //wenn hitter true ist, wird die Sprechblase nicht mehr angezeigt. Das ist erst bei 2 der Fall, da die letzte Nachricht vor der aktuellen Nachricht noch lesbar sein soll
        if (this.hitterNumber > 1) {
          this.hitter = true;
        }
      }
    }
    if (this.height <= 10) {
      if (
        (mouseIsPressed &&
          mouseX >= this.x + this.width - 20 &&
          mouseX <= this.x + this.width - 10 &&
          mouseY >= this.y &&
          mouseY <= this.y + 10) ||
        hit > 0
      ) {
        this.y = this.y - this.height - 30;
        this.hitterNumber = this.hitterNumber + 1;
        if (this.hitterNumber > 1) {
          this.hitter = true;
        }
      }
    }
    pop();
  }
  //hier werden nochmal alle Dateien kompniniert
  all(hit, direction, color) {
    push();
    this.messageHeight();
    this.hitTest(hit);
    this.display(direction, color);
    pop();
  }
}
