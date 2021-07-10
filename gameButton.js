export default class GameButton {
    constructor(x, y) {
      this.x = x;
      this.y = y;    
      this.height= 65;
      this.width=230;
      this.buttonArray= ["Start","Tutorial", "Weiter", "Verstanden","Okay","FreundIn", "Elternteil","Spiel verlassen", "Spiel beenden","nochmal spielen" ];
      this.textSize= 30;
    }
    display(number){            
        push();
        fill(180, 20, 100);
        rect(this.x, this.y, this.width, this.height, 15);
        pop();

        push();
        translate(this.x+115,this.y+42,5);
        fill(255);
        textFont("Hero New");
        textSize(this.textSize);
        textAlign(CENTER);
        text(this.buttonArray[number], 0,0);
 
        if(textWidth(this.buttonArray[number]) > this.width){
          this.textSize=25;
        }       
        pop();
     }

    hitTest() {
      if (
        mouseX >= this.x &&
        mouseX <= this.x + 120 &&
        mouseY >= this.y &&
        mouseY <= this.y + 50
      ) {
        return true;
      } else {
        return false;
      }
    }
    /*colourchange() {
      if (mouseIsPressed) {
        fill(255);
        text("EJF", 50, 50);
        this.buttonName = "YIPPIE";
        console.log("NÖ");
      }
    }*/
  }
  
  