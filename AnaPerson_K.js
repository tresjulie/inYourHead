let Namearray = ["Test"];
let Hoverthoughtarray = ["erster Test", "zweiter Test", "dritter Test"];

export default class AnaPerson {
  constructor(x, y, width, height, name, currentMood, hoverthought) {
    //müsste man nicht eine alternative finden zu width und height beim hovern weil das Bild von der bP ja keine viereckige umrandung hat?
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.hoverthought = hoverthought;
    this.name = name;
    this.currentMood = currentMood;
    //hier fehlt noch das Bild der bP
  }
  hover() {
    //bei hover wird gedankenblase angezeigt
    //bP ist erstmal ein rechteck
    rect(this.x, this.y, this.width, this.height);
    if (
      mouseX >= this.x &&
      mouseX <= this.x + this.width &&
      mouseY >= this.y &&
      mouseY <= this.y + this.height
    ) {
      
      push();//hier zum Beispiel ein translate für eine mögliche Animation der Gedankenblase
      fill(255);
      //wird Gedankenblase gecodet? uuund wenn ja, können es ja eig feste Werte wie hier sein oder? Ist ja immer die gleiche Position
      //Julie: ich würde es von der Position von der bP ausmachen
      ellipse(450, 100, 200, 100);
      ellipse(370, 170, 40);
      ellipse(340, 200, 20);
      fill(0);
      Hoverthoughtarray.push(ana.hoverthought);
      text(Hoverthoughtarray[ana.hoverthought], 415, 100);
      pop();
    } else {
      fill(100);
    }
  }
  mood() {
    push();
    textSize(30);
    //je nach mood wird ein anderes bild displayt
    if (this.currentMood === "laugh") {
      //hier dann anstatt halt ein bild)
      text("😂", 110, 90);
    } else if (this.currentMood === "smilecry") {
      text("🥲", 110, 90);
    } else if (this.currentMood === "heart") {
      text("😍", 110, 90);
    }
    pop();
  }
}
