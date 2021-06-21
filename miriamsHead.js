import SpeechBubble from "./SpeechBubble.js";
import PersonalBubble from "./PersonalBubble.js";
let speech = new SpeechBubble(
  "Hallo Kirrrrrrrrrrrrrrrrrsten ug ggccc hhcghnd Julie :)))  Mein Name ist sehr lange Nachricht.  Ich wüsste zu gerne, ob ich funktioniere, oder nciht, aber noch ish poehf uhlajhsalkj alksj lksaj lksj lkajs lkasj lkasj lkajs kjklllllllllllllajalllllllll  jslkdjldksjkl akj lksjdkj laskjfe lkdfsadfa d fasddsffffffffffffffffffffffffffffffffffffffff ffffffffffffffffffffffffffffffffffffffffffffffffffffff ffffffffffffffffffffffffffffff fffffffffff ffffffffffffffffff fffffffffffffffffffffffff fffffffffffff ff    ffffffffffffffffffffffffffffffffff fffffffffff f f  f  f jkhajktv iogakjeh rakjhr cljkhr akjehr akjhe  ",
  "person1"
);
let speechi = new SpeechBubble("hiiiiiiiii ", "person1");

let bPbubble = new PersonalBubble(0, "right");
let otherbubble = new PersonalBubble(0, "left");
let bubble = loadImage("speechp.png");
function draw() {
  clear();
  speech.all(speechi.hitterNumber, bPbubble.direction);
  if (speech.hitterNumber >= 1) {
    speechi.all(0, otherbubble.direction);
  }
}
