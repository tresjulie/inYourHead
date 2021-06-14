class InstantFeedback {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.feedbackText = "bla bli blup";
    this.instantFeedbackNotebook = [];
  }
  display() {
    fill(255);
    textSize(20);
    text(this.feedbackText, this.x, this.y, this.width, this.height);
  }
}

feedbackOne = new InstantFeedback(200, 250);

class Notebook {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  display() {
    //text?
  }
}
//Test um zu schauen, ob unser Array funktioniert
// function mouseClicked() {
//   if (mouseX < 100 && mouseY < 100) {
//     feedbackOne.instantFeedbackNotebook.push("hallo");
//   }
// }

function draw() {
  clear();
  feedbackOne.display();
  console.log(feedbackOne.instantFeedbackNotebook[0]);
}
