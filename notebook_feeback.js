class InstantFeedback {
  constructor(x, y) {
    this.x = 200;
    this.y = 200;
    this.width = 0;
    this.height = 0;
    this.feedbackText = "bla bli blup";
    // this.savedNotes= instantFeedbackNotebook[];
    //wir können anscheinend keinen Arry darein tun?
  }
  display() {
    //rect ? oder gezeichneter Hintergrund?
    fill(255);
    textSize(20);
    text(this.feedbackText, this.x, this.y, [this.width, this.height]);
  }
}

feedbackOne = new InstantFeedback();

class Notebook {
  constructor(x, y) {
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
  }
  display() {
    //text?
  }
}

function draw() {
  clear();
  feedbackOne.display();
}
