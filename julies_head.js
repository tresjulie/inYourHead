import NotebookIcon from "./notebookIcon.js";
import InstantFeedback from "./instant_feedback.js";
import Button from "./Button.js";
import Notebook from "./instant_feedback.js";

let icon = new NotebookIcon(50, 50, 50, 50);
let instantFeedback = new InstantFeedback(300, 50, 200, 100, "hallo");
let entscheidungsButton = new Button(350, 300, "Entscheidung");
let notebookPaper= new Notebook(50,50,200,200);

/*hier könnten wir einfach eine Art Backlog anlegen 
in dem wird die verschiedenen Instant Feedback Antworten 
speichern können. So viele sind es ja auch nicht oder? :D 
mhmmm wir könnten dann beim hitTest aber Probleme kriegen
welche Variable dann geunshiftet wird..?*/



////
let feedbackAnzeigen = false;
let notebookAnzeigen=false;
let n="";
function draw() {
  clear();
  icon.display();
  if(notebookAnzeigen===true){
    notebookPaper.displayNotebook();
  }
 /*hier müssen dann die richtigen If 
  Bedingungen für die richtigen Situationen 
  geschrieben werden, in denen dann n 
  verändert werden kann*/
  if (feedbackAnzeigen === true) {
    instantFeedback.display(0);
  }

  if (feedbackAnzeigen === true) {
    instantFeedback.display(1);
  }

  instantFeedback.feedbackTextForNotebook.push(instantFeedback.instantFeedbackForNotebook[0]);

  instantFeedback.feedbackTextForNotebook.push(instantFeedback.instantFeedbackForNotebook[1]);

  if(notebookAnzeigen===true){
  for(let i=0; i<instantFeedback.feedbackTextForNotebook.length; i++){
  // notebookPaper.displayNotebook(instantFeedback.feedbackTextForNotebook[i]);
  fill(0);
    text(instantFeedback.feedbackTextForNotebook[i], notebookPaper.x + 20, notebookPaper.y + 10 *i,instantFeedback.width -20);
  }
  }


  instantFeedback.hitTest();
  entscheidungsButton.display();
}

function mouseClicked() {
  if (icon.hitTest()) {
    console.log("Icon geklickt");
    notebookAnzeigen=true;

  }

  if (entscheidungsButton.hitTest()) {
    console.log("Entscheidung getroffen");
    feedbackAnzeigen = true;
  }
  if (instantFeedback.hitTest()) {
    console.log("dreieck nicht ganz getroffen, aber soll in Zukunft so sein - feedback verschwindet");
    // instantFeedback.feedbackgelesen = false; //kann der das
    feedbackAnzeigen = false;
  }
}

