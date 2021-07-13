import NotebookIcon from "./notebookIcon.js";
import InstantFeedback from "./instant_feedback.js";
import Button from "./decisionButton.js";
import Notebook from "./notebook.js";
import GameButton from "./gameButton.js";
import Exit from "./exit_button.js";
import Export from "./Export.js";
import AnaPersonParameter from "./AnaPersonParameter.js";

let exitButton= new Exit(200,35);
let icon = new NotebookIcon(35, 35, 50, 50);
let entscheidung= new Export("Name");
let entscheidungsButton = new Button(50, 350,(entscheidung.buttonMessage[2]));

let zwischenFeedback= new Export("Name");
let middleFeedbackBolean= false;

// let moodSentence = new AnaPersonParameter("trigger", -3);



let feedbackarray= new Export("Name"); //hier holen wir uns die Feedback Sätze aus der Probedatei
let instantFeedback = new InstantFeedback(feedbackarray.instantFeedbackMessage[0]);
let notebookPaper= new Notebook();

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

  }
  if(notebookAnzeigen===true){
    notebookPaper.displayNotebook();
    notebookPaper.displayText(feedbackarray.feedbackTextForNotebook[0]);
  }

  

  if(middleFeedbackBolean===true){
    zwischenFeedback.displayFeedback(100,500,1100,200);
  }



  entscheidungsButton.display();
  //die folgende Zeile ist irgendwie nicht notwendig, warum auch immer 
  // entscheidungsButton.messageHeight(entscheidungsButton.textLeading);
  
}

function mouseClicked() {
  instantFeedback.hitTest();
  if (icon.hitTest()) {
    //Wissensstand counter plus 1
    // console.log("Icon geklickt");
    notebookAnzeigen=true;
    // console.log(feedbackarray.feedbackTextForNotebook[0]);

  }
  if(interactionButton.hitTest()){ //gibt Miriam den Buttons eigentlich noch andere Eigenschaften, damit man sagen wenn explitit der oder der Button gedrückt wurde, dann ....
    //hier ganz wichtig unshift zu verwenden, damit der aktuelle Satz immer auf Index Position 0 sizt 
    zwischenFeedback.displayMiddleFeedback.unshift(zwischenFeedback.createMiddleFeedback[0]);
    middleFeedbackBolean=true;
  }


  if (entscheidungsButton.hitTest()) {
    // console.log("Entscheidung getroffen");
    feedbackAnzeigen = true;
    //je nachdem welche Entscheidung getroffen wurde, wird hier der passende Text zum Instant Feedback ins Notebook an den Anfang gepackt
    //für jede Möglichkeit wo ein Instant Feedback auf einen längeren Satz im Notebook passt , müssen wir die folgende Zeile Code selber schreiben
    feedbackarray.feedbackTextForNotebook.unshift(feedbackarray.instantFeedbackForNotebook[0]);
    console.log(feedbackarray.feedbackTextForNotebook.length);

  }



  if (instantFeedback.hitTest()) {
    // console.log("dreieck getroffen");
    feedbackAnzeigen = false;
  }

  if(exitButton.hitTest()){
    // console.log("exit gedrückt");
  }
  if(notebookPaper.hitTest()){
    console.log("yippie");
  }
}






