import SpeechBubble from "./SpeechBubble.js";
import PersonalBubble from "./PersonalBubble.js";
let speech = new SpeechBubble(
  "Hallo Kisten und Julie :)))  Mein Name ist sehr lange Nachricht.  Ich wüsste zu gerne, ob ich funktioniere, oder nciht, aber noch ish poehf uhlajhfe lkdfsadfa d fasddsffffffffffffffffffffffffffffffffffffffff ffffffffffffffffffffffffffffffffffffffffffffffffffffff ffffffffffffffffffffffffffffff fffffffffff ffffffffffffffffff fffffffffffffffffffffffff fffffffffffff ff    ffffffffffffffffffffffffffffffffff fffffffffff f f  f  f jkhajktv iogakjeh rakjhr cljkhr akjehr akjhe  ",
  "person1"
);
let speechi = new SpeechBubble("hiiiiiiiii ", "person1");

let bPbubble = new PersonalBubble(0, "right");
let otherbubble = new PersonalBubble(0, "left");
let bubble = loadImage("speechp.png");
function draw() {
  background(0, 255, 0);
  speech.all(speechi.hitterNumber, bPbubble.direction, speech.message);
  if (speech.hitterNumber >= 1) {
    speechi.all(0, otherbubble.direction, speechi.message);
  }
}
