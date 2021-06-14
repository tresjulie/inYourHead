//das hier ist ein Test für die Welt Beste Projekt Gruppe ever!!!
class NotebookIcon {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.picture = loadImage("test_foto_wassermelone.png");
    /*height und width habe ich weg gelassen, weil man 
    diese ja auch im Image Tag einstellen kann*/
    this.width = width;
    this.height = height;
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

watermeloneNote = new NotebookIcon(300, 300, 50, 50);

function mouseClicked() {
  if (watermeloneNote.hitTest()) {
    fill(255, 50, 125);
    rect(watermeloneNote.x, watermeloneNote.y, 50, 50);
  }
}

function draw() {
  watermeloneNote.display();
  watermeloneNote.hitTest();
}