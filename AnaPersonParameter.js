export default class AnaPersonParameter {
  constructor(trigger, wellBeing) {
    this.trigger = trigger;
    this.wellBeing = wellBeing;
    // this.x=x;
    // this.y=y;
    // this.width=width;
    // this.height=height;
    //Stimmung von -3 bis +3 
    this.moodSentence=["Hey!" + this.bP + "geht es nicht besonders gut! Du solltest jetzt besonders acht geben, wie du dich verhälst.",
    "Vorsicht! Du scheinst" + this.bP + "unter Druck zu setzen.",
    "Achte bei der nächsten Situation auf mehr Details, damit es" + this.bP + "bald ein bisschen besser geht",
    this.bP + "geht es okay! Du könntest allerdings versuchen noch einfühlsamer zu handeln.",
    "Du scheinst die Situation gut meistern!" + this.bP + "geht es den Umständen entsprechend gut. Bleibe weiterhin so einfühlsam und aufmerksam", 
    this.bP +"und du seid auf einem guten Weg. Bleibe weiterhin so einfühlsam und aufmerksam",
    "Hey!"+ this.bP +"fühlt sich in deiner Nähe wohl! Es ist gut für" + this.bP + "eine verlässliche Person an der Seite zu haben"];
  }
  displayMoodSentence(x,y,width,height){
    //und das jetzt für alle anderen Zustände auch
    if(this.wellBeing===-3){
      push();
      fill(0);
      textSize(20);
      textFont("Hero New");
      text(this.moodSentence[0], x, y, width, height);
      pop();
    }
  }

}
