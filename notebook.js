export default class Notebook  {
    constructor(message) {
      this.x = 35;
      this.y = 35;
    //   this.width = width;
    //   this.height = height;
        this.width=477;
        this.height = height;
        this.message = message;
        this.line = line;
    //Zeilenabstand
    this.textLeading = 1;
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

    displayNotebook() {
        this.height = this.messageHeight(this.textLeading);
      //äußere Form vom Notebook
      push(); 
      noStroke();
      fill(255);
      noStroke();
      triangle(this.x+15,this.y+60,this.x+25,this.y+48,this.x+35,this.y+60); 
      pop();

      push();
      if(this.height<=50){
          noStroke();
        this.height=49;
      rect(this.x, this.y+60, this.width, this.height+50, 10);
      }
      pop();

      push();
      if(this.height>50){
        noStroke();
      rect(this.x, this.y+60, this.width, this.height+200, 10);
      }
      pop();
  
      //Dreieck zum schließen vom Notebook
      push();
      translate(this.x,this.y+60);
      fill(0);
      if (this.height >= 51) {
        triangle(
          this.width - 20,
          this.height - 20,
          this.width - 10,
          this.height - 15,
          this.width - 20,
          this.height - 10
        );
      } else if (this.height < 50) {
        triangle(
          this.width - 20,
          200,
          this.width - 10,
          205,
          this.width - 20,
          210
        );
      }
      pop();
    }
    displayText(){
        push();
        fill(0);
        textSize(20);
        translate(this.x,this.y+60);
        text(this.message, 10, 10, this.width - 20);
        pop();
        console.log(this.height);
    }

    // Zum zeigen von Gedankenansatz
    // displayText(){
    //     push();
    //     fill(255);
    //     textSize(20);
    //     translate(this.x,this.y+60);
    //     text(this.message, 10, 10, this.width - 20, this.height);
    //     pop();
    // }


    // hitTest(){
    //   if()
    // }
  
    
  }