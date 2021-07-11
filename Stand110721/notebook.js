export default class Notebook  {
    constructor() {
      this.x = 35;
      this.y = 35;
        this.width=477;
        this.height = 400;
        // this.message = message;
    }
    displayNotebook() {
      //äußere Form vom Notebook
      push(); //kleines Dreieck was das Icon küsst
      noStroke();
      fill(255);
      noStroke();
      triangle(this.x+15,this.y+60,this.x+25,this.y+48,this.x+35,this.y+60); 
      pop();
      push();
      noStroke();
      rect(this.x, this.y+60, this.width, this.height, 10);
      pop();
     
  
      //Dreieck zum schließen vom Notebook
      push();
      translate(this.x,this.y+60);
      fill(0);
        triangle(
          this.width - 20,
          this.height - 20,
          this.width - 10,
          this.height - 15,
          this.width - 20,
          this.height - 10
        );
      pop();
    }
    displayText(message){
        push();
        fill(0);
        textSize(20);
        translate(this.x,this.y+60);
        text(message, 10, 10, this.width - 20);
        pop();
    }

    // Zum zeigen von Gedankenansatz
    //     text(this.message, 10, 10, this.width - 20, this.height);

    hitTest(){ //funktioniert noch nicht 
      if(mouseX>=this.x+this.width -20 &&
      mouseX<=this.x+this.width-10&&
      mouseY>=this.y+60+this.y+10&&
      mouseY<=this.y+60+this.y+30){
        return true;
      }else {
        return false;
        }
      }
    
  
    
}