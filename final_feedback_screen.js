import GameButton from "./gameButton";
import Export from "./Export.js";
import AnaPersonParameter from "./AnaPersonParameter.js";

let weiterButton= new GameButton(825, 560);
let exitGame= new GameButton(560, 560);
let feedbackBackground= loadImage("./Screens_ohneButtons/Feedback_Screens4.jpg");


let moodSentence = new AnaPersonParameter("trigger", -3);
let zwischenFeedback= new Export("Name");

function draw(){
    clear();
    image(feedbackBackground,0,0,1162,700);
    zwischenFeedback.displayMiddleFeedback.unshift(zwischenFeedback.createMiddleFeedback[11]);
    weiterButton.display(8);
    exitGame.display(9);    
    moodSentence.displayMoodSentence(105,350,720,100);
    zwischenFeedback.displayFeedback(105,420,950,100);

}
