//das hier ist ein Test für die Welt Beste Projekt Gruppe ever!!!
class NotebookIcon {
  constructor(x, y) {
    this.x = 300;
    this.y = 300;
    this.picture = loadImage("test_foto_wassermelone.png");
    /*height und width habe ich weg gelassen, weil man 
    diese ja auch im Image Tag einstellen kann*/
    this.width = 50;
    this.height = 50;
  }
  display() {
    image(this.picture, this.x, this.y, this.width, this.height);
  }
  hitTest() {
    if (
      mouseX < this.x + this.width &&
      mouseX > this.x &&
      mouseY < this.y + this.height &&
      mouseY > this.y
    ) {
      return true;
    } else {
      return false;
    }
  }
}

watermeloneNote = new NotebookIcon();

function mouseClicked() {
  if (watermeloneNote.hitTest()) {
    console.log("yippie");
  }
}

function draw() {
  watermeloneNote.display();
  watermeloneNote.hitTest();
}
