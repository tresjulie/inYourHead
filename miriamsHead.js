import SpeechBubble from "./SpeechBubble.js";
import PersonalBubble from "./PersonalBubble.js";
import AnaPersonParameter from "./AnaPersonParameter.js";
import WellBeing from "./WellBeing.js";
//import ScreenOrganisation from "./ScreenOrganisation.js";
//let screens = new ScreenOrganisation(0, "pregame");
let bPbubble = new PersonalBubble("#e2efde", "right");
let otherbubble = new PersonalBubble("#ffcccc", "left");
//bP
let parameter = new AnaPersonParameter(0, -3);
let mood = new WellBeing(100, 100, parameter.trigger, parameter.wellBeing);
//für die Namensarrays
let pbNameArray = [];
let bPName = "";
//bubble
let minCounter = 1;
let counter = 1;
let maxCounter = 6;
//in bubbleArray werden alle Objekte definiert
let bubbleArray = [];
let y = 300;
let hitHeight = "";
//in person und messageArray müssen an gleicher Stelle im Array die Inhalte (also wer sagt was) definiert werden
let person = ["bP", "user", "user", "bP", "user", "user"];
let messageArray = [
  "1",
  "2",
  "3",
  "4444 444444444  4444444 Ich bin Jhin, oder so....n Also zumindest vielleicht",
  "5 hier ist noch ein langer Text bittesehr. 5 ist die Liebingszahl meiner Schwester",
  "6",
];
//Hilfe von Herr Toepper und https://p5js.org/examples/objects-array-of-objects.html
//die Anzahl an Nachrichten definiert, wieviele neue Sprechblasen erzeugt wird
for (let i = 0; i < messageArray.length; i++) {
  bubbleArray.push(
    new SpeechBubble(y, messageArray[i], person[i], messageArray[i + 1])
  );
}

/*function preload() {
  let abendessen = loadImage("backgroundScreens/abendessen.png");
  let baeckerei = loadImage("backgroundScreens/baeckerei.png");
  let bekannte = loadImage("backgroundScreens/bekannte.png");
  let bekannteTuer = loadImage("backgroundScreens/bekannteTuer.png");
  let blumenladen = loadImage("backgroundScreens/blumenladen.png");
  let entensee = loadImage("backgroundScreens/entensee.png");
  let haeuser = loadImage("backgroundScreens/haeuser.png");
  let handy = loadImage("backgroundScreens/handy.png");
  let hausTante = loadImage("backgroundScreens/hausTante.png");
  let kueche = loadImage("backgroundScreens/kueche.png");
  let musikladen = loadImage("backgroundScreens/musikLaden.png");
  let oberfeld = loadImage("backgroundScreens/oberfeld.png");
  let park = loadImage("backgroundScreens/park.png");
  let picknick = loadImage("backgroundScreens/picknick.png");
  let schule = loadImage("backgroundScreens/schule.png");
  let tanteDraussen = loadImage("backgroundScreens/tanteDraussen.png");
  let tanteDraussenBp = loadImage("backgroundScreens/tanteDraussenBp.png");
  let tanteEssen = loadImage("backgroundScreens/tanteEssen.png");
  let teller = loadImage("backgroundScreens/teller.png");
  let wohnzimmer = loadImage("backgroundScreens/wohnzimmer.png");
  let tryIt = loadImage("try.png");
}*/
function keyPressed() {
  pbNameArray.push(key);
  if (keyIsDown(8)) {
    pbNameArray.pop();
    pbNameArray.pop();
  }
  if (keyIsDown(13)) {
    pbNameArray.pop();
  }
  if (keyIsDown(32)) {
    pbNameArray.pop();
    pbNameArray.push(" ");
  }
  bPName = pbNameArray.join("");
}
function mousePressed() {
  if (counter < maxCounter) {
    //die einzelnen Elemente von bubbleArray sind die Objekte der Klasse Speechbubble, die vor der function draw erzeugt wurden
    //es muss für jede Person, die Auftreten kann eine If-funktion erstellt werden. Die Anzahl ist aber überschaubar.
    if (bubbleArray[counter].person === "bP") {
      bubbleArray[counter].hitTest(0);
    } else if (bubbleArray[counter].person === "user") {
      bubbleArray[counter].hitTest(0);
    }
    if (bubbleArray[counter].hitterNumber > 0) {
      counter = counter + 1;
    }
  }
  //durch diese if-Bedingung wird die letzte Sprechblase auch angezeigt
  if (counter <= maxCounter && counter - 1 >= minCounter) {
    if (bubbleArray[counter - 1].person === "bP") {
      bubbleArray[counter - 1].hitTest(0);
    } else if (bubbleArray[counter - 1].person === "user") {
      bubbleArray[counter - 1].hitTest(0);
    }
  }
}

function draw() {
  clear();
  //screens
  /*screens.display(
    abendessen,
    baeckerei,
    bekannte,
    bekannteTuer,
    blumenladen,
    entensee,
    haeuser,
    handy,
    hausTante,
    kueche,
    musikladen,
    oberfeld,
    park,
    picknick,
    schule,
    tanteDraussen,
    tanteDraussenBp,
    tanteEssen,
    teller,
    wohnzimmer,
    tryIt
  );*/
  //speech bubble
  if (counter < maxCounter) {
    bubbleArray[counter].y =
      400 -
      bubbleArray[counter].messageHeight(bubbleArray[counter].textLeading);
    //bubbleArray[counter - 1].y = bubbleArray[counter].hitHeight;
  }

  background(255);
  //counter geht jede Stelle der Array durch. Eine for-Schleife würde dabei alle Objekte gleichzeitig aufrufen, weshalb es so gelöst werden musste
  if (counter < maxCounter) {
    //die einzelnen Elemente von bubbleArray sind die Objekte der Klasse Speechbubble, die vor der function draw erzeugt wurden
    //es muss für jede Person, die Auftreten kann eine If-funktion erstellt werden. Die Anzahl ist aber überschaubar.
    if (bubbleArray[counter].person === "bP") {
      bubbleArray[counter].all(bPbubble.direction, bPbubble.color);
    } else if (bubbleArray[counter].person === "user") {
      bubbleArray[counter].all(otherbubble.direction, otherbubble.color);
    }
    if (bubbleArray[counter].hitterNumber > 0) {
      counter = counter + 1;
    }
  }

  //durch diese if-Bedingung wird die letzte Sprechblase auch angezeigt
  //Sprechblasen gehen langsam nach oben
  if (counter < maxCounter && counter - 1 >= minCounter) {
    if (bubbleArray[counter - 1].person === "bP") {
      bubbleArray[counter - 1].all(bPbubble.direction, bPbubble.color);
    } else if (bubbleArray[counter - 1].person === "user") {
      bubbleArray[counter - 1].all(otherbubble.direction, otherbubble.color);
    }
  }
  //name
  fill(0);
  textSize(20);
  text("Hallo. Ich heiße " + bPName, 100, 200);
  //das ist die Anzeige des Stimmungsbalkens
  fill(255);
  mood.display();
}
