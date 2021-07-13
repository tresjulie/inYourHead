import GameButton from "./gameButton";
import Export from "./Export.js";
import AnaPersonParameter from "./AnaPersonParameter.js";

let weiterButton= new GameButton(825, 560);
let exitGame= new GameButton(560, 560);
let feedbackBackground= loadImage("./Screens_ohneButtons/Feedback_Screens2.jpg");


let moodSentence = new AnaPersonParameter("trigger", -3); //hier im Parameter der Wellbeing counter
let zwischenFeedback= new Export("Name");




function draw(){
    clear();
    keyPressed();
    image(feedbackBackground,0,0,1162,700);
    weiterButton.display(2);
    exitGame.display(7);    
    moodSentence.displayMoodSentence(105,350,720,100);
    zwischenFeedback.displayFeedback(105,420,950,100);

}


// Du musst einmal bitte diese Tasten drücken, um das Feedback auszulösen
//nur so konnte ich es schaffen, dir zu zeigen, wie das Feedback angezeigt werden soll
function keyPressed(){
    if(keyCode===13){ //ENTER
        zwischenFeedback.displayMiddleFeedback.unshift(zwischenFeedback.createMiddleFeedback[0]);
    }

}

