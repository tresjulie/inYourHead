import NotebookIcon from "./notebookIcon.js";
import InstantFeedback from "./instant_feedback.js";
import Button from "./decisionButton.js";
import Notebook from "./notebook.js";
import ExportInstantFeedback from "./export_instantFeedback.js";
import GameButton from "./gameButton.js";
import MidFeedback from "./middle_final_feedback.js";
import Exit from "./exit_button.js";

let exitButton= new Exit(200,35);
let icon = new NotebookIcon(35, 35, 50, 50);
let entscheidungen= ["ja", "nein", "ich koche alleine", "ich hole Quark und Möhren", "Wir schaffen dieses Projekt auf jeden Fall! Das wird ganz toll. Ich bin schon sehr gespannt wie das alles aussehen wird"];
let entscheidungsButton = new Button(50, 350,(entscheidungen[2]));
let zwischenFeedback= new MidFeedback (100,500,1100,200);
let middleFeedbackBolean= false;


let feedbackarray= new ExportInstantFeedback(); //hier holen wir uns die Feedback Sätze aus der Probedatei
let instantFeedback = new InstantFeedback(feedbackarray.instantFeedback[0]);
let notebookPaper= new Notebook(feedbackarray.instantFeedback[1]);

let interactionButton= new GameButton(100,200);

let feedbackAnzeigen = false;
let notebookAnzeigen=false;




function draw() {
  clear();
  icon.display();
  interactionButton.display(8);
  exitButton.displayButton();
  
  if (feedbackAnzeigen === true) {
    instantFeedback.messageHeight(instantFeedback.textLeading);
    instantFeedback.display();    
    instantFeedback.displayText();
    feedbackarray.feedbackTextForNotebook.unshift(feedbackarray.instantFeedbackForNotebook[0]);

  }
  if(notebookAnzeigen===true){
    notebookPaper.displayNotebook();
    notebookPaper.displayText();
  }
  
  if(middleFeedbackBolean===true){
    zwischenFeedback.displayFeedback();
  }

  entscheidungsButton.display();
  //die folgende Zeile ist irgendwie nicht notwendig, warum auch immer 
  // entscheidungsButton.messageHeight(entscheidungsButton.textLeading);
  
}


function mouseClicked() {
  instantFeedback.hitTest();
  if (icon.hitTest()) {
    console.log("Icon geklickt");
    notebookAnzeigen=true;

  }
  if(interactionButton.hitTest()){
    //hier ganz wichtig unshift zu verwenden, damit der aktuelle Satz immer auf Index Position 0 sizt 
    zwischenFeedback.displayMiddleFeedback.unshift(zwischenFeedback.createMiddleFeedback[0]);
    console.log(zwischenFeedback.displayMiddleFeedback.length);
    middleFeedbackBolean=true;
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

  if(exitButton.hitTest()){
    console.log("exit gedrückt");
  }
}









