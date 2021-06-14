import SpeechBubble from "./SpeechBubble.js";
import PersonalBubble from "./PersonalBubble.js";
let speech = new SpeechBubble(
  100,
  200,
  "Hallo Kirssvsvs sgten ",
  100,
  "person1",
  false,
  0
);
let speechi = new SpeechBubble(
  100,
  200,
  "hiiiiiiiii ",
  100,
  "person1",
  false,
  0
);
let bPbubble = new PersonalBubble(0, "left");
let otherbubble = new PersonalBubble(0, "right");
let bubble = loadImage("speechp.png");
function draw() {
  background(0, 255, 0);
  speech.all(speechi.hitterNumber, bPbubble.direction, bubble, speech.message);
  if (speech.hitterNumber >= 1) {
    speechi.all(0, otherbubble.direction, bubble, speechi.message);
  }
}
