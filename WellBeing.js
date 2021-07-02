import AnaPersonParameter from "./AnaPersonParameter.js";
export default class WellBeing extends AnaPersonParameter {
  constructor(x, y, trigger, wellBeing) {
    super(trigger, wellBeing);
    this.x = x;
    this.y = y;
  }
  display() {
    push();
    stroke(0);
    strokeWeight(1);
    translate(500, 100);
    rect(0, 0, 200, 50, 10);
    noStroke();
    fill(255, 0, 0);
    //abhängig von Well-being wird der Balden immer breiter.
    if (this.wellBeing > 0) {
      if (this.wellBeing <= 3) {
        rect(100, 0, this.wellBeing * 33, 50, 10);
        rect(100, 0, 5, 50);
      } else if (this.wellBeing > 3) {
        this.wellBeing = 3;
      }
    }
    if (this.wellBeing < 0) {
      if (this.wellBeing >= -3) {
        //Julie hatte bei iherer HTML Datei das Problem, dass eine Koordinate nicht negativ werden durfte, weshalb ich das auch versucht habe zu vermeiden.
        //abhängig von dem wellBeing wird beginnt der Balken weiter rechts
        //da dieses wellBeing negativ ist, ist die Rechnung bei zum Beispiel einem wellBeing von -2=
        //(3+(-2))*33=(3-2)*33=1*33=33 für die x-Koordinate
        //Math.abs(this.wellBeing)=|wellBeing| (=Betrag aus wellBeing = alles wird immer positiv dargestllt. |2|=|-2|=2)
        rect(
          (3 + this.wellBeing) * 33,
          0,
          Math.abs(this.wellBeing) * 33,
          50,
          10
        );
        rect(95, 0, 5, 50);
      } else if (this.wellBeing < -3) {
        this.wellBeing = -3;
      }
    }
    //wenn wellBeing 0 ist, trittt ein Sonderfall ein, um es auch in diesem Fall deutlich und nicht nur als Strich darstellen zu können
    if (this.wellBeing === 0) {
      rect(90, 0, 20, 50, 10);
    }
    strokeWeight(1);
    stroke(0);
    line(100, 0, 100, 50);
    pop();
  }
}
