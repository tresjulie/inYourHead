import NotebookIcon from "./notebookIcon.js";
import InstantFeedback from "./instant_feedback.js";
import Button from "./Button.js";
import Notebook from "./instant_feedback.js";
import ExportInstantFeedback from "./export_instantFeedback";

let icon = new NotebookIcon(35, 35, 50, 50);

let entscheidungsButton = new Button(350, 300, "Entscheidung");
let notebookPaper= new Notebook(35,35,477,200);
let feedbackarray= new ExportInstantFeedback();
let instantFeedback = new InstantFeedback(feedbackarray.instantFeedback[0]);

/*hier könnten wir einfach eine Art Backlog anlegen 
in dem wird die verschiedenen Instant Feedback Antworten 
speichern können. So viele sind es ja auch nicht oder? :D 
mhmmm wir könnten dann beim hitTest aber Probleme kriegen
welche Variable dann geunshiftet wird..?*/






let feedbackAnzeigen = false;
let notebookAnzeigen=false;
let n="";
function draw() {
  clear();
  icon.display();
  
  if (feedbackAnzeigen === true) {
    instantFeedback.messageHeight(instantFeedback.textLeading);
    instantFeedback.display();    
    instantFeedback.displayText();
    feedbackarray.feedbackTextForNotebook.unshift(feedbackarray.instantFeedbackForNotebook[0]);
    console.log(feedbackarray.feedbackTextForNotebook[1]);
  }
  if(notebookAnzeigen===true){
    notebookPaper.displayNotebook();
  }


  

  // if(notebookAnzeigen===true){
  // for(let i=0; i<feedbackarray.instantFeedback.length; i++){
  //   fill(0);
  //   text(feedbackarray.feedbackTextForNotebook[i], notebookPaper.x, 60+ notebookPaper.y*i,instantFeedback.width -20);
  // } 
  // // for (let i=0; i<feedbackarray.feedbackTextForNotebook.length; i++){}
  // //     //hier sollten die Notebook sätze nach einander auftauchen 
  // //  
  // }

  



  

  // instantFeedback.feedbackTextForNotebook.push(instantFeedback.instantFeedbackForNotebook[0]);

  // instantFeedback.feedbackTextForNotebook.push(instantFeedback.instantFeedbackForNotebook[1]);

  entscheidungsButton.display();
}

function mouseClicked() {
  // instantFeedback.hitTest();
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
    // feedbackAnzeigen = false;
  }
}








